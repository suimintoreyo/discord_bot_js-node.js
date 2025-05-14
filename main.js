// ==========================
// Discord Bot メインスクリプト
// ==========================

// --- 必要なライブラリの読み込み ---
// discord.js: Discord Botのための主要ライブラリ
const { Client, GatewayIntentBits } = require("discord.js");

// dotenv: .envファイルから環境変数を読み込むためのライブラリ
const dotenv = require("dotenv");
dotenv.config(); // .envファイルを読み込んでprocess.envに設定

// axios: HTTPリクエストを送信するためのライブラリ
const axios = require("axios");

// --- Discordクライアントの初期化 ---
// Botが受け取るイベントの種類（Intent）を指定
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,         // サーバー（ギルド）関連のイベント
    GatewayIntentBits.GuildMessages,  // メッセージ関連のイベント
    GatewayIntentBits.MessageContent, // メッセージ内容の取得（Intent必須）
  ],
});

// --- Gemini APIの設定 ---
// .envファイルからGemini APIキーを取得
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Gemini APIのエンドポイントURLを組み立て
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// --- Gemini APIとの通信関数 ---
// ユーザーからのプロンプトを受け取り、Gemini APIで返答を生成
async function generateReply(prompt) {
  try {
    // Gemini APIへPOSTリクエストを送信
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [
          {
            parts: [{ text: prompt }], // ユーザーの入力をAPIに渡す
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json", // リクエスト形式をJSONに指定
        },
      }
    );

    // Gemini APIの返答からテキスト部分を安全に抽出
    const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    // 返答が空の場合はデフォルトメッセージを返す
    return reply || "（Geminiからの返答が空です）";
  } catch (error) {
    // エラー発生時は詳細をログに出力し、ユーザーにも通知
    console.error("Gemini APIエラー:", error.response?.data || error.message);
    return "⚠️ Gemini APIへの接続に失敗しました。";
  }
}

// --- Discord Botのイベント設定 ---
// Botが起動し、準備完了したときに一度だけ呼ばれる
client.once("ready", () => {
  console.log(`✅ ログイン成功: ${client.user.tag}`);
});

// メッセージ受信時のイベントハンドラ
client.on("messageCreate", async (message) => {
  // Bot自身のメッセージは無視
  if (message.author.bot) return;

  // "!chat" で始まるメッセージのみ処理
  if (message.content.startsWith("!chat")) {
    // "!chat"コマンド以降のテキストを抽出
    const userPrompt = message.content.slice(5).trim();

    // 入力が空の場合は注意を促す
    if (!userPrompt) {
      message.reply("⚠️ 何か話しかけてください（例：`!chat 今日の天気は？`）");
      return;
    }

    // 「入力中」表示をチャンネルに送信
    await message.channel.sendTyping();

    // Gemini APIで返答を生成
    const reply = await generateReply(userPrompt);

    // 生成した返答を返信として送信
    message.reply(reply);
  }
});

// --- DiscordへのBotログイン ---
// .envファイルからトークンを取得してログイン
client.login(process.env.DISCORD_TOKEN);

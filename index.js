// discord.jsライブラリから必要なクラス・定数を読み込む
const { Client, GatewayIntentBits } = require("discord.js");

// 環境変数を使用するためのdotenvを読み込み
const dotenv = require("dotenv");
dotenv.config(); // .envファイルを読み込んでprocess.envに設定

// HTTPリクエストを送るためのaxiosを読み込み
const axios = require("axios");

// Discordクライアントの初期化
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,           // サーバー（ギルド）関連のイベントを受け取る
    GatewayIntentBits.GuildMessages,    // メッセージ関連のイベントを受け取る
    GatewayIntentBits.MessageContent,   // メッセージの中身（内容）を取得する（必要なIntent）
  ],
});

// ===== Gemini APIの設定 =====
// 環境変数からAPIキーを取得（.envファイルに設定しておく）
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Gemini APIのエンドポイントURLを設定（APIキー付き）
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// ===== Geminiとの通信関数 =====
async function generateReply(prompt) {
  try {
    // Gemini APIへPOSTリクエストを送信
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [
          {
            parts: [{ text: prompt }], // ユーザーからのプロンプトを渡す
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json", // JSONとして送信することを指定
        },
      }
    );

    // Geminiの返答からテキスト部分を安全に抽出
    const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    // 返答が空ならメッセージを表示
    return reply || "（Geminiからの返答が空です）";
  } catch (error) {
    // エラー時のログとユーザーへのメッセージ
    console.error("Gemini APIエラー:", error.response?.data || error.message);
    return "⚠️ Gemini APIへの接続に失敗しました。";
  }
}

// ===== Discord Botのイベント設定 =====

// Botが正常に起動したときに一度だけ呼ばれる
client.once("ready", () => {
  console.log(`✅ ログイン成功: ${client.user.tag}`);
});

// メッセージ受信イベント
client.on("messageCreate", async (message) => {
  // Bot自身のメッセージは無視する
  if (message.author.bot) return;

  // "!chat" で始まるメッセージだけを処理対象とする
  if (message.content.startsWith("!chat")) {
    // "!chat"コマンドの後のテキストを取り出す
    const userPrompt = message.content.slice(5).trim();

    // ユーザーの入力が空の場合は注意を促す
    if (!userPrompt) {
      message.reply("⚠️ 何か話しかけてください（例：`!chat 今日の天気は？`）");
      return;
    }

    // 「入力中」表示をチャンネルに表示
    await message.channel.sendTyping();

    // Gemini APIから返答を取得
    const reply = await generateReply(userPrompt);

    // 取得した返答を返信として送信
    message.reply(reply);
  }
});

// BotをDiscordにログイン（トークンは.envから取得）
client.login(process.env.DISCORD_TOKEN);

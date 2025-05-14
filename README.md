# Discord Chat Bot (Node.js / JavaScript)

Discordでチャットボットを実装するためのシステムです。

Python から JavaScript (Node.js) への切り替えにより、同様の開発環境を組み込む手順を下記に記述します。

## 環境構築

### 必須環境

* Node.js (v18 以降を推奨)
* npm (Node.jsに同格包含)

### セットアップ手順

1. Node.js をインストール:

   [https://nodejs.org/](https://nodejs.org/) よりLTSバージョンをダウンロードしてインストール

2. リポジトリーをクローン:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

   `<repository-url>`: リポジトリURL
   `<repository-folder>`: クローン後のフォルダ名

3. Node.js プロジェクトを初期化:

   ```bash
   npm init -y
   ```

4. 依存関係をインストール:

   ```bash
   npm install discord.js dotenv
   ```

   必要に応じて、API 通信用ライブラリも追加可能 (axios など)

5. `.env` ファイルを作成し、以下を記述:

   ```env
   DISCORD_TOKEN=set_your_bot_token
   GEMINI_API_KEY=set_your_api_key
   ```

6. `index.js` (または main ファイル) を作成し、以下のように基本的なボット構成を記述:

   ```js
   const { Client, GatewayIntentBits } = require('discord.js');
   const dotenv = require('dotenv');
   dotenv.config();

   const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

   client.once('ready', () => {
     console.log(`Logged in as ${client.user.tag}!`);
   });

   client.on('messageCreate', message => {
     if (!message.author.bot && message.content === '!ping') {
       message.channel.send('Pong!');
     }
   });

   client.login(process.env.DISCORD_TOKEN);
   ```

7. ボットを実行:

   ```bash
   node index.js
   ```

### API キーの取得方法

* Discord Bot Token: ([https://discord.com/developers/applications](https://discord.com/developers/applications)) でアプリケーションを作成し、Bot を追加し Token を発行
* Gemini API Key: ([https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)) より発行

獲得したキーを `.env` に記述してください

---

## 開発メモ

* 依存ファイル `package.json` を作成:

  ```bash
  npm init -y
  ```

* 依存をエクスポート:

  ```bash
  npm install
  ```

---

## 参考文献

* discord.js: ([https://discord.js.org/docs/packages/discord.js/14.19.3](https://discord.js.org/docs/packages/discord.js/14.19.3))

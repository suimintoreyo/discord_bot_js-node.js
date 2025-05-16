# Discord Chat Bot (Node.js / JavaScript)

Discordでチャットボットを実装するためのシステムです。  
PythonからJavaScript（Node.js）への切り替えにより、同様の開発環境を構築する手順をまとめています。

---

## 環境構築

### 必須環境

- **Node.js**（v18以降を推奨）
- **npm**（Node.jsに同梱）

---

### セットアップ手順

1. **Node.js をインストール**  
   [公式サイト](https://nodejs.org/)からLTSバージョンをダウンロードしてインストールしてください。

2. **リポジトリをクローン**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
   - `<repository-url>`: クローンするリポジトリのURL
   - `<repository-folder>`: クローン後のフォルダ名

3. **Node.js プロジェクトを初期化**  
   ```bash
   npm init -y
   ```

4. **依存関係をインストール**  
   ```bash
   npm install discord.js dotenv axios
   ```
   - 必要に応じて他のAPI通信用ライブラリも追加してください。

5. **APIキーの設定**  
   - Discord Bot Token: [Discord Developer Portal](https://discord.com/developers/applications)でアプリケーションを作成し、Botを追加してTokenを発行
   - Gemini API Key: [Google AI Studio](https://aistudio.google.com/app/apikey)で発行
   - 取得したキーを`.env`ファイルに記述します。

   例:
   ```
   DISCORD_TOKEN=あなたのDiscordBotトークン
   GEMINI_API_KEY=あなたのGeminiAPIキー
   ```

   > **.envファイルの注意:**  
   > `.env`ファイルはAPIキーやトークンなどの機密情報を管理するために使います。  
   > **必ず`.gitignore`に追加し、バージョン管理システムにアップロードしないよう注意してください。**

6. **ボットを実行**  
   ```bash
   node index.js
   ```

---

## 開発メモ

- 依存ファイル `package.json` を作成:
  ```bash
  npm init -y
  ```
- 依存をインストール:
  ```bash
  npm install
  ```

---

## 参考文献

- [discord.js公式ドキュメント](https://discord.js.org/docs/packages/discord.js/14.19.3)(https://discord.js.org/docs/packages/discord.js/14.19.3)

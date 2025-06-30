# Discord Chat Bot (Node.js / JavaScript)

このリポジトリは、Node.js（JavaScript）でDiscordチャットボットを実装するためのテンプレートプロジェクトです。  
Pythonでの実装からJavaScript（Node.js）への移行を想定し、セットアップや開発フローをわかりやすくまとめています。

---

## 目次

- [特徴](#特徴)
- [環境構築](#環境構築)
- [セットアップ手順](#セットアップ手順)
- [APIキーの設定](#apikeyの設定)
- [ボットの起動方法](#ボットの起動方法)
- [開発メモ](#開発メモ)
- [参考文献](#参考文献)
- [主な技術・バージョン情報](#主な技術バージョン情報)
- [注意事項](#注意事項)

---

## 特徴

- **Node.js v18以降** 推奨
- **discord.js** によるBot開発
- **Google Gemini API** など外部API連携
- シンプルなセットアップ手順
- `.env`によるセキュアなトークン管理

---

## 環境構築

### 必須

- **Node.js**（[公式サイト](https://nodejs.org/)からLTSバージョン推奨）
- **npm**（Node.jsに同梱）

---

## セットアップ手順

1. **Node.jsインストール**  
   [Node.js公式サイト](https://nodejs.org/)からLTS版をインストールしてください。

2. **リポジトリをクローン**  
   ```bash
   git clone <repository-URL>
   cd discord_bot_js-node.js
   ```

3. **プロジェクト初期化**  
   ```bash
   npm init -y
   ```

4. **依存ライブラリのインストール**  
   ```bash
   npm install discord.js dotenv axios
   ```
   - Geminiや外部API連携が必要な場合は
     ```bash
     npm install @google/genai
     ```

5. **APIキーの設定**  
   `.env` ファイルを作成し、下記を記載してください：

   ```env
   DISCORD_TOKEN=あなたのDiscordBotトークン
   GEMINI_API_KEY=あなたのGeminiAPIキー
   ```

   - Discord Bot Tokenは [Discord Developer Portal](https://discord.com/developers/applications) でアプリ作成＆Bot追加後に取得
   - Gemini API Keyは [Google AI Studio](https://aistudio.google.com/app/apikey) から取得

6. **.envファイルは必ず`.gitignore`に追加し、バージョン管理に含めないでください。**

---

## ボットの起動方法

```bash
node index.js
```

---

## 開発メモ

- 依存ファイルの作成:
  ```bash
  npm init -y
  ```
- 依存関係のインストール:
  ```bash
  npm install
  ```
- todo: 環境構築自動化ツールの導入検討

---

## 参考文献

- [discord.js公式ドキュメント](https://discord.js.org/docs/packages/discord.js/14.19.3)
- [Google AI Studio（Gemini API）](https://aistudio.google.com/app/apikey)

---

## 主な技術・バージョン情報

- **言語:** JavaScript (Node.js v18以降推奨)
- **パッケージ管理:** npm
- **主なライブラリ:**
  - discord.js（推奨バージョン: 14.19.3）
  - dotenv
  - axios
  - @google/genai（必要に応じて）

---

## 注意事項

- `.env`ファイルにはAPIキー等の機密情報を記載します。  
  **絶対にバージョン管理（GitHub等）へアップロードしないでください。**
- 依存関係のバージョン固定が必要な場合は `package.json` を編集してください。

---

## ライセンス

このプロジェクトのライセンスはリポジトリ内の `LICENSE` ファイルを参照してください。

---

### まとめ

- Node.js（v18以降）、discord.js（14.19.3）、dotenv、axios、@google/genai が主な構成要素です。
- 公式ドキュメントやREADMEの指示に従うことで、推奨環境で動作します。

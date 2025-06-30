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
# todo
- 環境構築自動更新Toolの導入


---

## 参考文献

- [discord.js公式ドキュメント](https://discord.js.org/docs/packages/discord.js/14.19.3)(https://discord.js.org/docs/packages/discord.js/14.19.3)

---

## このリポジトリで使用されている主なフレームワーク・言語・バージョン情報

### プログラミング言語
- **JavaScript (Node.js)**
  - Node.js v18以降が推奨されています（README.mdの「必須環境」より）。

### パッケージ管理
- **npm**
  - Node.jsに同梱されています。

### 主な利用フレームワーク・ライブラリ
- **discord.js**
  - バージョン: 公式ドキュメントのリンクより【14.19.3】が推奨・参照されています。
  - インストールコマンド例（README.md記載）:  
    ```
    npm install discord.js dotenv axios
    ```

- **dotenv**
  - バージョン記載なし（一般的に最新版で問題ない）。

- **axios**
  - バージョン記載なし（一般的に最新版で問題ない）。

- **@google/genai**
  - Google Gemini用ライブラリとして利用されています（バージョン記載なし）。

---

### 参考
- インストール例や実行例はREADME.mdに詳しく記載されています。
- 依存関係のバージョン固定が必要な場合は `package.json` を参照してください（ただし、現時点の情報では個別バージョン指定の記載は見当たりません）。

---

#### まとめ
- Node.js（v18以降）、discord.js（14.19.3）、dotenv、axios、@google/genai が主な構成要素です。
- 公式ドキュメントやREADMEの指示に従ってセットアップすることで、推奨環境で動作します。

# ゲームギャラリー

自作ゲームを展示・公開するためのReactウェブサイトです。

## 機能

- ゲーム一覧表示
- ゲーム詳細ページ
- ゲームをブラウザで直接プレイ
- レスポンシブデザイン

## 開発環境のセットアップ

### 必要なもの

- Node.js (v18以降推奨)
- npm

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173/` にアクセスしてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## ゲームの追加方法

### 1. ゲームファイルの配置

`public/games/` ディレクトリに新しいゲームフォルダを作成します。

```
public/
  games/
    your-game-name/
      index.html    # ゲームのメインファイル
      thumbnail.png # サムネイル画像（推奨サイズ: 300x200px）
      ...           # その他のゲームファイル
```

### 2. ゲームデータの追加

`src/data/games.js` を開いて、新しいゲーム情報を追加します。

```javascript
{
  id: 4, // 一意のID
  title: "あなたのゲーム名",
  description: "ゲームの説明文",
  thumbnail: "/games/your-game-name/thumbnail.png",
  gamePath: "/games/your-game-name/index.html",
  tags: ["ジャンル1", "ジャンル2"],
  releaseDate: "2024-04-01",
}
```

### 3. 確認

開発サーバーを起動して、ゲームが正しく表示されるか確認してください。

## プロジェクト構成

```
src/
  components/      # 再利用可能なコンポーネント
    GameCard.jsx   # ゲームカード
    Header.jsx     # ヘッダー
  pages/           # ページコンポーネント
    HomePage.jsx   # ホームページ（ゲーム一覧）
    GameDetailPage.jsx # ゲーム詳細ページ
  data/
    games.js       # ゲームデータ
  App.jsx          # メインアプリ
  main.jsx         # エントリーポイント
public/
  games/           # ゲームファイルの配置場所
```

## デプロイ

### GitHub Pagesへの自動デプロイ

このプロジェクトはGitHub Actionsで自動デプロイされます。

#### 初回設定

1. GitHubリポジトリの Settings > Pages に移動
2. Source を「GitHub Actions」に設定
3. mainブランチにプッシュすると自動的にデプロイされます

#### デプロイURL

デプロイ後、以下のURLでアクセスできます:
`https://iorafel.github.io/iorafel-playtime/`

#### 注意事項

- `vite.config.js` の `base` パスは既に設定済みです
- `.github/workflows/deploy.yml` でデプロイワークフローを確認できます
- mainブランチへのプッシュで自動的にビルド＆デプロイされます

### その他のホスティングサービス

- Vercel
- Netlify
- Firebase Hosting

など、静的サイトホスティングサービスにデプロイ可能です。

## 技術スタック

- React 18
- React Router v6
- Vite
- CSS3

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

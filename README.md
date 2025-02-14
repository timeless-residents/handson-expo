# handson-expo

このプロジェクトは、Expoを使用したクロスプラットフォームのReact Nativeアプリケーションです。

## 機能

- iOS、Android、Webに対応
- GitHub Pagesによる自動デプロイ
- 新しいExpo アーキテクチャの採用

## 必要要件

- Node.js (最新の安定版を推奨)
- npm または yarn
- iOSアプリの開発には、MacOSとXcodeが必要
- Androidアプリの開発には、Android Studioが必要

## インストール

```bash
# リポジトリのクローン
git clone https://github.com/timeless-residents/handson-expo.git

# 依存関係のインストール
npm install
```

## 使用方法

以下のnpmスクリプトが利用可能です：

```bash
# 開発サーバーの起動
npm start

# iOSシミュレーターでの起動
npm run ios

# Androidエミュレーターでの起動
npm run android

# Webブラウザでの起動
npm run web
```

## デプロイ

このプロジェクトはGitHub Pagesを使用してWebバージョンをデプロイします。

### デプロイの準備

1. GitHubにログインしていることを確認してください
2. リポジトリに対する書き込み権限があることを確認してください
3. Git認証情報が正しく設定されていることを確認してください：
   ```bash
   git config --global user.name "あなたのGitHubユーザー名"
   git config --global user.email "あなたのメールアドレス"
   ```

### デプロイの実行

```bash
# Webビルドの作成とデプロイ
npm run predeploy
npm run deploy
```

デプロイされたアプリケーションは以下のURLで確認できます：
https://timeless-residents.github.io/handson-expo

## プロジェクト構成

- `/assets` - アプリケーションのアイコンやスプラッシュ画面の画像
- `App.js` - メインのアプリケーションコンポーネント
- `index.js` - アプリケーションのエントリーポイント

## ライセンス

0BSD

## バージョン情報

現在のバージョン: 1.0.0

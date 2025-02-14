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

このプロジェクトはGitHub Pagesを使用してWebバージョンをデプロイします。デプロイは手動（ローカル）とGitHub Actionsの2つの方法で実行できます。

### ローカルからのデプロイ

1. GitHubにログインしていることを確認してください
2. リポジトリに対する書き込み権限があることを確認してください
3. Git認証情報が正しく設定されていることを確認してください：
   ```bash
   git config --global user.name "あなたのGitHubユーザー名"
   git config --global user.email "あなたのメールアドレス"
   ```
4. 以下のコマンドを実行してデプロイします：
   ```bash
   # Webビルドの作成とデプロイ
   npm run predeploy
   npm run deploy
   ```

### GitHub Actionsによる自動デプロイ

このプロジェクトはGitHub Actionsを使用して自動デプロイを行います。

1. リポジトリの`Settings` > `Pages`で、デプロイ元を`GitHub Actions`に設定してください
2. mainブランチにプッシュすると、自動的にデプロイが実行されます
3. デプロイの進行状況は`Actions`タブで確認できます

ワークフローの主な処理内容：
- Node.js 18.xのセットアップ
- 依存関係のインストール
- Expoプロジェクトのビルド
- `web-build`ディレクトリの内容を`gh-pages`ブランチにデプロイ

注意：GitHub Actionsでのデプロイには、以下の設定が必要です：
- リポジトリの`Settings` > `Actions` > `General`で、Workflowsの権限が有効になっていることを確認
- `GITHUB_TOKEN`のWrite権限が付与されていることを確認（`gh-pages`ブランチへの書き込みに必要）

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

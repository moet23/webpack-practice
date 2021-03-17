# webpackメモ
## 書き出し
npx webpack --mode development

## ローカルサーバの立ち上げ
https://ics.media/entry/12140/
```
npx webpack serve
```
### サーバでやってる時の注意点
distに書き出しされてるわけじゃないから、全部終わったらちゃんと
```
npx webpack --mode development
```
する

## npxとかが動かなくなったら
https://qiita.com/llr114/items/e7beb02d0bf461b3f8b8
```
source ~/.nvm/nvm.sh
```
## pugのドキュメント
https://pugjs.org/api/getting-started.html
繰り返し処理など、便利

## webpackドキュメント
https://webpack.js.org/concepts/

## なんかのドキュメント
https://lodash.com/docs/#templateSettings

## ローカルサーバ使えると
Live reload
auto reload 勝手に変更が反映される
絶対パス使える

## SASSの良さ
Nesting
@import
@mixin(@includeとセット)

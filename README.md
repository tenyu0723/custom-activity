# custom-activity
Discordで使えるカスタムアクテビティ設定用プログラムです。

## 【やらなきゃいけないこと】
**[index.js]**<br>
23~30行目:アクテビティに表示される各項目の情報を入力<br>
**[.env]**<br>
TOKENに自分のTOKENを代入してください

## 【画像設定時のリンク取得方法】
サンプルurl:<br>`https://media.discordapp.net/attachments/1138762211465117727/1140543857679937687/McVkTazCaveLwqoDuX_E7ayTgdK4DPbrKCGcPSIZT4b783j6HJvJYu0uxQAuzCw7BCs.png`<br>
① 設定したい画像をどこでもいいからDiscordに送信<br>
② 画像のプレビュー画面からブラウザで開くを選択<br>
③ リンクをコピーしてリンクの`https://cdn.discordapp.com/`または`https://media.discordapp.net/`の部分をmp:にして入力してください<br>
```diff
+ a
```

const {Client,RichPresence} = require("discord.js-selfbot-v13");
const http = require("http");
const cron = require('node-cron');
const client = new Client({
  syncStatus: false,
  checkUpdate: false,
});

http.createServer(async function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
    response.end(`${client.user.tag} is ready!`)
  })
  .listen(3000)

if (process.env.TOKEN == undefined) {
  console.error('tokenが設定されていません！')
  process.exit(0)
}

client.on("ready", () => {
  console.log(`${client.user.tag} is ready!`)
  const r = new RichPresence()
  .setApplicationId('817229550684471297')  //いじらないでね
  .setType('PLAYING') // PLAYING:プレイ中 WATCHING:視聴中 STREAMING:配信中
  .setName('Name') //アクティビティの名前(タイトル)
  .setDetails('Detail') //アクティビティの説明(長すぎない方がいい)
  .setStartTimestamp(Date.now())  //いじらないでね
  .setAssetsLargeImage('mp:attachments/1138762211465117727/1140543857679937687/McVkTazCaveLwqoDuX_E7ayTgdK4DPbrKCGcPSIZT4b783j6HJvJYu0uxQAuzCw7BCs.png') //画像の設定方法はreadme.mdを参照
  .setAssetsLargeText('Image txt') //画像に込める文字
  .addButton('ボタンの表示テキスト', '押したときのリンク') //ボタンを追加する処理(コピペすれば複数可能)
  client.user.setActivity(r);
});

client.login(process.env.TOKEN)

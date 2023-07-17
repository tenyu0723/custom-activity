const { Client,CustomStatus } = require("discord.js-selfbot-v13");
const http = require("http");
const client = new Client({
  syncStatus: false,
  checkUpdate: false,
});

const change_interval = 4 //変更する間隔(秒) 4以上推奨
const words = ["1","2","3","4"] //ステータスのワード(左から変更されて右までいったら一番左になります)

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
  let i = 0
  setInterval(() => {
    client.settings.setCustomStatus({ text: words[i] })
    i++
    if(i > words.length-1){
      i=0
    }
  },1000*change_interval)
});

client.login(process.env.TOKEN)

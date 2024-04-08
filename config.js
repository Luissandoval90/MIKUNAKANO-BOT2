import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
 
//⊱ ━━━━.⋅ Añada los numeros a ser Propietario/a ⋅.━━━ ⊰  

global.owner = [
  ['51902050745', 'おDanịel.xyz⁩', true],
  ['521813976062'],
  ['521861009198'],
  ['521821275256'],
  ['5066233781']
] //Numeros de owner 

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.mods = []
global.prems = []

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.packname = ''
global.author = '{\n "bot": {\n   "name": "Ai Hoshino",\n     "author": "おDaniel",\n   "status_bot": "active"\n }\n}'
global.desc = 'Simple WhatsApp Bot Multi Device'
global.namebot = '© Ai Hoshino - MD / Nakano - Team'
global.wait = '*↻ Espera soy lenta. . .*'
global.gcname = 'Ai Hoshino - MD'
global.wm = ''

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.imgmenu = fs.readFileSync('./storage/img/menu.png') 
global.ytlogo = fs.readFileSync('./storage/img/ytlogo.jpg') 
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg') 
global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.thumbnail = fs.readFileSync('./storage/img/thumbnail.jpg')

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios'] // ['BrunoSobrino_2']
global.skizo = ['konekocyz']
global.lann = 'p8ADYJib'
global.kiicode = 'usU5RWzmQq'
global.itsrose = ['4b146102c4d500809da9d1ff']
global.botcahxkey = ['NDM8oaRr', 'Gi8erBvz', 'SYUTqCrg', 'DcAWSMo9']
global.botcahx = botcahxkey[Math.floor(botcahxkey.length * Math.random())]

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  can: 'https://pnggilajacn.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://pnggilajacn.my.id': 'ItsukaChan',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
}

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Ai Hoshino - MD', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.group = 'https://chat.whatsapp.com/CqdWTXmS702JD31SQzr0Ph'

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.adanime = `🌸 | Anime By Ai Hoshino - MD 🈴` 
global.addescargas = `📤 | Descargas By Ai Hoshino - MD 🌸`
global.adimagen = `🌅 | Imágenes By Ai Hoshino - MD 🌿` 
global.adyoutube = `🍁 | Descargas de YouTube 📤` 
global.adsticker = `🏞️ | Stickers By Ai Hoshino - MD 🌺` 
global.adsearch  = `🔎 | Busquedas By Ai Hoshino - MD 🐢` 
global.adnsfw = `🔞 | Nsfw By Ai Hoshino - MD ⭐`

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//━━━━━━━━━━━ ฅ^•ﻌ•^ฅ ━━━━━━━━━━━

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

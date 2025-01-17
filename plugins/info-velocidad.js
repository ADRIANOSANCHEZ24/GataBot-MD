import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🤖 𝚂𝚄𝙿𝙴𝚁 𝙼𝙰𝙺𝙰𝙽𝙰𝙺𝚈 - 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 🤖', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `${eg}🚀 𝙿𝚁𝚄𝙴𝙱𝙰 𝙳𝙴 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳...`, fkontak,  m)
//await conn.sendButton(m.chat, wm, `${eg}🚀 𝙿𝚁𝚄𝙴𝙱𝙰 𝙳𝙴 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳...\n🚀 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏...`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)  
let neww = performance.now()
let speed = neww - old
let caption = `*${htki} 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃 : ${htka}*

🚄 *${Math.round(neww - old)}* ms
🚄 *${speed}* ms

*${htjava}* 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐉𝐄𝐂𝐔𝐂𝐈𝐎𝐍 :
${muptime}
${readMore}
*${htjava}* 𝐂𝐇𝐀𝐓(𝐒) :
• *${groupsIn.length}* \`\`\`𝙶𝚁𝚄𝙿𝙰𝙻𝙴𝚂\`\`\`
• *${groupsIn.length}* \`\`\`𝙶𝚁𝚄𝙿𝙾𝚂 𝚄𝙽𝙸𝙳𝙾𝚂\`\`\`
• *${groupsIn.length - groupsIn.length}* \`\`\`𝙶𝚁𝚄𝙿𝙾𝚂 𝚁𝙴𝚂𝚃𝙰𝙽𝚃𝙴𝚂\`\`\`
• *${chats.length - groupsIn.length}* \`\`\`𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂\`\`\`
• *${chats.length}* \`\`\`𝚃𝙾𝚃𝙰𝙻 𝙲𝙷𝙰𝚃(𝚂)\`\`\`

*${htjava}* 𝐒𝐄𝐑𝐕𝐈𝐃𝐎𝐑 :
🟢 𝚁𝙰𝙼: ${format(totalmem() - freemem())} / ${format(totalmem())}
🔵 𝚁𝙰𝙼 𝙻𝙸𝙱𝚁𝙴: ${format(freemem())}

💻 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰: \`\`\`${os.platform()}\`\`\`
📡 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁: ${os.hostname()}
${readMore}
𝐔𝐒𝐎 𝐃𝐄 𝐌𝐄𝐌𝐎𝐑𝐈𝐀 :
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
await conn.sendFile(m.chat, gataImg.getRandom(), 'gata.jpg', caption, fkontak)
//await conn.sendButton(m.chat, wm, caption, gata.getRandom(), [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
} catch (e) {
await conn.reply(m.chat, `${fg}𝙰𝙻𝙶𝙾 𝚂𝙰𝙻𝙸𝙾 𝙼𝙰𝙻.\n\n\`\`\`𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}reporte\`\`\``, m)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' 𝙳𝙸𝙰𝚂 ☀️\n ', h, ' 𝙷𝙾𝚁𝙰𝚂 🕐\n ', m, ' 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 ⏰\n ', s, ' 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂 ⏱️ '].map(v => v.toString().padStart(2, 0)).join('')
}

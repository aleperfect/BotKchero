let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `👨🏻‍💻Deseas un bot de doxeo ? (+51) INFO AL NUMERO ALEIZN-MD
*⺀👻𝐁𝐨𝐭 𝐤𝐜𝐡𝐞𝐫𝐨 𝐢𝐧𝐯𝐨𝐜𝐚 𝐚 𝐭𝐨𝐝𝐨𝐬 𝐥𝐨𝐬 𝐤𝐜𝐡𝐞𝐫𝐱𝐬⺀*\n\n🟩 ${oi}\n\n🟩 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┊🐲 @${mem.id.split('@')[0]}\n`}
teks += `➡️𝐁𝐎𝐓 𝐊𝐂𝐇𝐄𝐑𝐎`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler

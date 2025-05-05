let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;BRAYAN-GT⁩;;\nFN:BRAYAN-GT⁩\nORG:BRAYAN-GT⁩\nTITLE:\nitem1.TEL;waid=50248019799:50248019799\nitem1.X-ABLabel:BRAYAN-GT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:BRAYAN-GT⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'お🐉𝙉𝙚𝙤𝙏𝙤𝙠𝙮𝙤 𝘽𝙚𝙖𝙩𝙨🐲.OFICIAL', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'cr', 'creator', 'creador', 'dueño'] 

export default handler
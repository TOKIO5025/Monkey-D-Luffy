let handler = async (m, { conn, usedPrefix, command }) => {
  let grupos = `*¡Hola! Te invito a unirte a los grupos oficiales del bot para convivir con la comunidad...*

   ╭─━━───╼◈◉◈╾───━━─╮
   │ *『 1. Grupo Oficial 』*
   ├─ ❏ 💥 https://chat.whatsapp.com/DmaLM7iLSFKKi7RkqUkv71
   ╰─━━────────────━━─╯

   ╭─━━───╼◈◉◈╾───━━─╮
   │ *『 Canal Oficial 』*
   ├─ ❏  https://whatsapp.com/channel/0029Vaqe1Iv65yDAKBYr6z0A
   ╰─━━────────────━━─╯`

  const catalogo1 = 'https://qu.ax/QmXxc.jpg'

  await conn.sendFile(m.chat, catalogo1, 'NagiBot.jpg', grupos, m, rcanal)
  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler
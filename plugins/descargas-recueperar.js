import fs from 'fs';

const handler = async (m, { text }) => {
  if (!text) return m.reply('🔐 Escribe tu clave para recuperar tu mensaje.\nEjemplo: *.recuperartext neotokio*');

  let claves = {};
  let mensajes = {};

  if (fs.existsSync('./src/JSON/claves.json')) {
    claves = JSON.parse(fs.readFileSync('./src/JSON/claves.json'));
  }
  if (fs.existsSync('./src/JSON/mensajes.json')) {
    mensajes = JSON.parse(fs.readFileSync('./src/JSON/mensajes.json'));
  }

  const user = m.sender;
  const claveGuardada = claves[user]?.clave;

  if (!claveGuardada) return m.reply('❗ No tienes una clave creada. Usa *.crearclave [clave]* primero.');
  if (text !== claveGuardada) return m.reply('❌ Clave incorrecta. Intenta de nuevo.');

  const textos = mensajes[user] || [];
  if (!textos.length) return m.reply('📭 No tienes mensajes guardados.');

  let respuesta = `🔐 *Clave verificada*\n📦 *Aquí están tus mensajes guardados:*\n\n`;
  respuesta += textos.map((t, i) => `*${i + 1}.* ${t}`).join('\n');

  m.reply(respuesta);
};

handler.command = /^recuperartext$/i;
export default handler;
import fs from 'fs';

const handler = async (m, { text }) => {
  if (!text) return m.reply('✏️ Escribe el mensaje que quieres guardar.\nEjemplo: *.creartxt hola a todos*');

  let db = {};
  if (fs.existsSync('./src/JSON/claves.json')) {
    db = JSON.parse(fs.readFileSync('./src/JSON/claves.json'));
  }

  if (!db[m.sender]) return m.reply('❗ Primero necesitas crear tu clave usando *.crearclave [clave]*');

  if (!fs.existsSync('./src/JSON/mensajes.json')) fs.writeFileSync('./src/JSON/mensajes.json', '{}');
  const mensajes = JSON.parse(fs.readFileSync('./src/JSON/mensajes.json'));

  mensajes[m.sender] = mensajes[m.sender] || [];
  mensajes[m.sender].push(text);

  fs.writeFileSync('./src/JSON/mensajes.json', JSON.stringify(mensajes, null, 2));
  m.reply('✅ Tu mensaje fue guardado con éxito.');
};

handler.command = /^creartxt$/i;
export default handler;
import fs from 'fs';

const handler = async (m, { args }) => {
  const clave = args[0];
  if (!clave) return m.reply('🔐 Primero crea tu clave.\nEjemplo: *.crearclave neotokio*');

  let db = {};
  if (fs.existsSync('./src/JSON/claves.json')) {
    db = JSON.parse(fs.readFileSync('./src/JSON/claves.json'));
  }

  db[m.sender] = { clave };
  fs.writeFileSync('./src/JSON/claves.json', JSON.stringify(db, null, 2));
  m.reply('✅ ¡Genial! Creaste tu clave con éxito.');
};

handler.command = /^crearclave$/i;
export default handler;
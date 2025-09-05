const handler = async (m, { conn }) => {


  conn.sendMessage(m.chat, {
text: `Hola ${taguser} aquí tienes el contacto de mi dueño\nChinchu dzn: +5493855789747\n> escribe si quieres info del bot`,
}, { quoted: m });
};

handler.tags = ['info'];
handler.help = ['comprar'];
handler.command = ['Dueño', 'owner'];
export default handler;
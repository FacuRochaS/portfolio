// api/send-message.js
const fetch = require('node-fetch');

export default async function handler(req, res) {
  // Solo permitimos POST para mayor seguridad
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, message } = req.body;

  // Estas variables las configuraremos en el panel de Vercel
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const text = `📩 *Nuevo mensaje del Portfolio*\n👤 *De:* ${name || 'Anónimo'}\n💬 *Mensaje:* ${message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error sending to Telegram' });
  }
}

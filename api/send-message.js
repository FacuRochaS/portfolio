const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type, message, appName, name } = req.body;

  // Captura de datos técnicos desde los headers de Vercel
  const ip = req.headers['x-forwarded-for'] || 'Desconocida';
  const city = req.headers['x-vercel-ip-city'] || 'Ciudad desconocida';
  const country = req.headers['x-vercel-ip-country'] || 'País desconocido';
  const userAgent = req.headers['user-agent'] || 'Desconocido';
  const time = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  let text = '';
  if (type === 'event') {
    text = `🚀 *Evento del Portfolio*\n` +
      `👤 *Acción:* ${message}\n` +
      `📱 *App:* ${appName || 'N/A'}\n` +
      `📍 *Ubicación:* ${city}, ${country} (IP: ${ip})\n` +
      `📅 *Hora:* ${time}`;
  } else {
    text = `📩 *Nuevo mensaje*\n` +
      `👤 *De:* ${name || 'Anónimo'}\n` +
      `💬 *Mensaje:* ${message}\n` +
      `📍 *IP:* ${ip} (${city})\n` +
      `📅 *Hora:* ${time}`;
  }

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' })
    });
    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    return res.status(500).json({ error: 'Error' });
  }
};

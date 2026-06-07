module.exports = async (req, res) => {
  // 1. Aseguramos que solo permitimos POST por seguridad
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Extraemos los datos que envía Angular
  const { type, message, appName, name } = req.body;

  // 3. Capturamos los datos automáticos que Vercel inyecta (IP, Ciudad, País)
  const ip = req.headers['x-forwarded-for'] || 'Desconocida';
  const city = req.headers['x-vercel-ip-city'] || 'Ciudad desconocida';
  const country = req.headers['x-vercel-ip-country'] || 'País desconocido';

  // Forzamos la hora local para que no te llegue en horario UTC (Inglaterra)
  const time = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

  // 4. Variables de entorno configuradas en el panel de Vercel
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // 5. Armamos el texto dependiendo de si es un log interno o un mensaje del usuario
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
      `📍 *IP:* ${ip} (${city}, ${country})\n` +
      `📅 *Hora:* ${time}`;
  }

  // 6. Hacemos la petición a la API de Telegram usando el fetch nativo
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown' // Permite negritas y formato bonito
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al enviar a Telegram:", error);
    return res.status(500).json({ error: 'Error sending to Telegram' });
  }
};

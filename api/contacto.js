// Función privada de Vercel: recibe el formulario de Contacto y lo reenvía al WhatsApp del dueño.
// Los datos sensibles (TELEFONO y CALLMEBOT_KEY) viven en las variables de entorno de Vercel, no en el sitio.
module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "metodo" });

  // Solo acepta envíos hechos desde el propio sitio
  const origin = req.headers.origin || "";
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch (_) {}
    if (host !== req.headers.host) return res.status(403).json({ ok: false, error: "origen" });
  }

  let d = req.body;
  if (typeof d === "string") { try { d = JSON.parse(d); } catch (_) { d = null; } }
  if (!d || typeof d !== "object") return res.status(400).json({ ok: false, error: "datos" });

  const limpiar = (t, n) => String(t == null ? "" : t).replace(/[\u0000-\u001f]+/g, " ").trim().slice(0, n);
  const nombre = limpiar(d.nombre, 80), tel = limpiar(d.tel, 20), mail = limpiar(d.mail, 80), medio = limpiar(d.medio, 30), msg = limpiar(d.msg, 700);
  if (nombre.length < 3 || tel.replace(/\D/g, "").length < 10 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail) || !medio || msg.length < 5)
    return res.status(400).json({ ok: false, error: "validacion" });

  const TELEFONO = process.env.TELEFONO, CLAVE = process.env.CALLMEBOT_KEY;
  if (!TELEFONO || !CLAVE) return res.status(500).json({ ok: false, error: "sin_configurar" });

  const texto = `*Nuevo mensaje desde la página web*\nNombre: ${nombre}\nTeléfono: ${tel}\nCorreo: ${mail}\nNos conoció por: ${medio}\nMensaje: ${msg}`;
  try {
    const r = await fetch(`https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(TELEFONO)}&text=${encodeURIComponent(texto)}&apikey=${encodeURIComponent(CLAVE)}`);
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch (e) {
    return res.status(502).json({ ok: false, error: "envio" });
  }
};

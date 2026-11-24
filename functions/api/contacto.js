// Función privada de Cloudflare Pages: recibe el formulario de Contacto y lo reenvía al WhatsApp del dueño.
// TELEFONO y CALLMEBOT_KEY se guardan como variables en Cloudflare; no aparecen en el sitio.
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export async function onRequestPost({ request, env }) {
  // Solo acepta envíos hechos desde el propio sitio
  const origin = request.headers.get("Origin");
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch (_) {}
    if (host !== new URL(request.url).host) return json({ ok: false, error: "origen" }, 403);
  }

  let d;
  try { d = await request.json(); } catch (_) { return json({ ok: false, error: "datos" }, 400); }
  if (!d || typeof d !== "object") return json({ ok: false, error: "datos" }, 400);

  const limpiar = (t, n) => String(t == null ? "" : t).replace(/[\u0000-\u001f]+/g, " ").trim().slice(0, n);
  const nombre = limpiar(d.nombre, 80), tel = limpiar(d.tel, 20), mail = limpiar(d.mail, 80), medio = limpiar(d.medio, 30), msg = limpiar(d.msg, 700);
  if (nombre.length < 3 || tel.replace(/\D/g, "").length < 10 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail) || !medio || msg.length < 5)
    return json({ ok: false, error: "validacion" }, 400);

  if (!env.TELEFONO || !env.CALLMEBOT_KEY) return json({ ok: false, error: "sin_configurar" }, 500);

  const texto = `*Nuevo mensaje desde la página web*\nNombre: ${nombre}\nTeléfono: ${tel}\nCorreo: ${mail}\nNos conoció por: ${medio}\nMensaje: ${msg}`;
  try {
    const r = await fetch(`https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(env.TELEFONO)}&text=${encodeURIComponent(texto)}&apikey=${encodeURIComponent(env.CALLMEBOT_KEY)}`);
    return json({ ok: r.ok }, r.ok ? 200 : 502);
  } catch (_) {
    return json({ ok: false, error: "envio" }, 502);
  }
}

// Cualquier otro método (GET, etc.) no está permitido
export async function onRequest() { return json({ ok: false, error: "metodo" }, 405); }

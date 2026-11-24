// ====== CONFIGURA AQUÍ TUS DATOS ======
const WHATSAPP  = "525522150137";   // Número con lada del país (52 = México)
const CORREO    = "tavozick@gmail.com";
const WEB3FORMS_KEY = "bd93021b-196c-4870-a6b1-051480962800";   // Clave gratis de web3forms.com (te llega a tu correo)
const MAPA_COORD = "19.4603444,-99.2137661";                  // Ubicación de LUSALEN
const MAPA_LINK  = "https://www.google.com/maps/place/Lusalen/@19.4603165,-99.213802,21z/data=!4m12!1m5!3m4!2zMTnCsDI3JzM3LjIiTiA5OcKwMTInNDkuNiJX!8m2!3d19.4603444!4d-99.2137661!3m5!1s0x85d2024240c6e0c7:0x4a32fb29d865454b!8m2!3d19.4603444!4d-99.2137661!16s%2Fg%2F1tzlz9jc?hl=es-419"; // Enlace de Google Maps
const DIRECCION  = "Ingenieros Militares 70, Argentina Poniente, Miguel Hidalgo, 11230 Ciudad de México";
// Contacto y cotizaciones se envían por Web3Forms a tu correo (ver LEEME.txt)

// ====== PRODUCTOS: [imagen (carpeta /images), nombre, categoría, PRECIO] ======
// Los precios son de ejemplo: cámbialos por los reales.
const DATOS = [
    ["cotonelle.png", "Papel higiénico Cottonelle Elegance", "Papel y toallas", 120],
    ["papelScott.png", "Papel higiénico Scott jumbo", "Papel y toallas", 95],
    ["cajaPetalo.png", "Papel higiénico Pétalo jumbo", "Papel y toallas", 90],
    ["dispensadorPapel.png", "Papel Marli jumbo", "Papel y toallas", 98],
    ["TOALLA ROLLO.png", "Toalla en rollo Greymoon", "Papel y toallas", 85],
    ["rolloKleneex.png", "Toalla en rollo Kleenex", "Papel y toallas", 110],
    ["toallaKleneex.png", "Servitoalla Kleenex", "Papel y toallas", 60],
    ["torkToallas.png", "Toalla interdoblada Tork Xpress", "Papel y toallas", 140],
    ["cajaKleneex.png", "Facial Kleenex cubo", "Papel y toallas", 75],
    ["despachadorkimberly.png", "Despachador de toalla Kimberly-Clark", "Dispensadores", 950],
    ["despachadorKimberly2.png", "Despachador papel jumbo Kimberly-Clark", "Dispensadores", 650],
    ["despachadorJabonKimberly.png", "Despachador de jabón Kimberly-Clark", "Dispensadores", 480],
    ["dispensadorKimBlanco.png", "Despachador jumbo blanco", "Dispensadores", 420],
    ["despachador.png", "Despachador Marli Jr.", "Dispensadores", 380],
    ["dispensadorTORK.png", "Despachador Tork de toalla", "Dispensadores", 890],
    ["dispensadorTORK2.png", "Despachador Tork SmartOne", "Dispensadores", 780],
    ["dispensadorTORK3.png", "Despachador de jabón Tork", "Dispensadores", 520],
    ["dispensandor tork.png", "Despachador Tork con rollo", "Dispensadores", 910],
    ["pinol.png", "Pinol limpiador", "Limpieza", 45],
    ["cloralex.png", "Cloralex", "Limpieza", 40],
    ["ajax.png", "Ajax amoniaco", "Limpieza", 38],
    ["axion.png", "Axion lavatrastes", "Limpieza", 42],
    ["3en1.png", "3 en 1 aceite", "Limpieza", 55],
    ["jArcoiris.png", "Detergente Arcoíris", "Limpieza", 130],
    ["jRoma.png", "Detergente Roma 10 kg", "Limpieza", 230],
    ["wiesePastilla.png", "Tapete para mingitorio Wiese", "Limpieza", 65],
    ["airwick.png", "Air Wick aerosol", "Ambiental e insecticidas", 70],
    ["wiese.png", "Aromatizante Wiese Ocean Mist", "Ambiental e insecticidas", 80],
    ["raid.png", "Raid casa y jardín", "Ambiental e insecticidas", 85],
    ["escoba1.png", "Escoba", "Accesorios", 60],
    ["jalador1.png", "Jalador de piso", "Accesorios", 90],
    ["microfibras.png", "Mop de microfibra", "Accesorios", 150]
];
const EXTRA = {
    "cotonelle.png": ["Cottonelle", "Papel higiénico de fibra virgen, suave, resistente y absorbente."],
    "papelScott.png": ["Scott", "Papel higiénico jumbo para baños de alto tránsito; higiene y ahorro."],
    "cajaPetalo.png": ["Pétalo", "Papel higiénico jumbo con fibras recicladas; buen rendimiento y absorción."],
    "dispensadorPapel.png": ["Marli", "Papel higiénico jumbo de bajo costo, suave y resistente."],
    "TOALLA ROLLO.png": ["Greymoon", "Toalla en rollo para secado de manos en baños y cocinas."],
    "rolloKleneex.png": ["Kleenex", "Toalla en rollo para dispensador; absorbente y de calidad premium."],
    "toallaKleneex.png": ["Kleenex", "Servitoalla multiusos para cocina y limpieza ligera."],
    "torkToallas.png": ["Tork", "Toalla interdoblada para dispensador de mano."],
    "cajaKleneex.png": ["Kleenex", "Pañuelos faciales en cubo; suaves y prácticos para oficinas y recepciones."],
    "despachadorkimberly.png": ["Kimberly-Clark", "Despachador de toalla para baños institucionales."],
    "despachadorKimberly2.png": ["Kimberly-Clark", "Despachador de papel higiénico jumbo; resistente y de fácil recarga."],
    "despachadorJabonKimberly.png": ["Kimberly-Clark", "Despachador de jabón para baños de uso institucional."],
    "dispensadorKimBlanco.png": ["Kimberly-Clark", "Despachador de papel higiénico jumbo en color blanco."],
    "despachador.png": ["Marli", "Despachador de papel higiénico jumbo Jr."],
    "dispensadorTORK.png": ["Tork", "Despachador de toalla para baños y áreas de servicio."],
    "dispensadorTORK2.png": ["Tork", "Despachador Tork SmartOne para papel higiénico."],
    "dispensadorTORK3.png": ["Tork", "Despachador de jabón para baños institucionales."],
    "dispensandor tork.png": ["Tork", "Despachador con rollo de toalla."],
    "pinol.png": ["Pinol", "Limpiador líquido aromatizante para pisos y superficies."],
    "cloralex.png": ["Cloralex", "Blanqueador y desinfectante para ropa, pisos y baños."],
    "ajax.png": ["Ajax", "Limpiador de uso doméstico y comercial para pisos y superficies."],
    "axion.png": ["Axion", "Lavatrastes concentrado para cocinas y comedores."],
    "3en1.png": ["3 en 1", "Aceite lubricante multiusos para el hogar y talleres."],
    "jArcoiris.png": ["Arcoíris", "Detergente en polvo para lavandería."],
    "jRoma.png": ["Roma", "Detergente en polvo en presentación de 10 kg."],
    "wiesePastilla.png": ["Wiese", "Tapete aromatizante para mingitorio."],
    "airwick.png": ["Air Wick", "Aromatizante en aerosol para ambientes."],
    "wiese.png": ["Wiese", "Aromatizante Ocean Mist para baños y oficinas."],
    "raid.png": ["Raid", "Insecticida en aerosol para casa y jardín."],
    "escoba1.png": ["Genérica", "Escoba para barrido de uso diario."],
    "jalador1.png": ["Genérica", "Jalador de piso para retirar agua y líquidos."],
    "microfibras.png": ["Genérica", "Mop de microfibra para trapeado."]
};
const PRODUCTOS = DATOS.map((p, i) => {
    const e = EXTRA[p[0]] || ["—", ""];
    return { id: i, img: "images/" + encodeURI(p[0]), claro: typeof CLAROS_ORIG !== "undefined" && CLAROS_ORIG.includes("images/" + p[0]), nombre: p[1], cat: p[2], precio: null, marca: e[0], modelo: "", desc: e[1],
             specs: [["Marca", e[0]], ["Categoría", p[2]]], fuente: "" };
}).concat((typeof NUEVOS !== "undefined" ? NUEVOS : []).map((p, j) => ({ id: DATOS.length + j, img: encodeURI(p.img), nombre: p.titulo || p.nombre, claro: p.claro, cat: p.cat,
    precio: null, marca: p.marca, modelo: p.modelo, desc: p.desc, specs: p.specs, fuente: p.fuente, dif: p.dif, variante: p.variante })));
PRODUCTOS.forEach(p => { p.marca = (p.marca || "Otras").replace("Kimberly-Clark Professional", "Kimberly-Clark").replace("Genérica", "Otras"); });
PRODUCTOS.forEach(p => { if (p.cat === "Limpieza" || p.cat === "Ambiental e insecticidas") p.cat = "Productos de Limpieza"; });
const MARCAS_ORD = ["Kleenex", "Cottonelle", "Scott", "Pétalo", "Marli", "Kimlark", "Sanitas", "Wypall", "Kimtech", "Escudo", "Kimcare", "Kimberly-Clark", "Vileda Professional", "3M", "Castor", "Tork"];
const marcas = [...new Set(PRODUCTOS.map(p => p.marca))].sort((a, b) => (MARCAS_ORD.indexOf(a) + 1 || 99) - (MARCAS_ORD.indexOf(b) + 1 || 99) || a.localeCompare(b));
let marcaF = "Todas";
const ORDEN = ["Papel y toallas", "Dispensadores", "Higiene de manos", "Productos de Limpieza", "Bayetas y estropajos", "Wipers y paños",
    "Fregonas y mopas", "Cepillos y recogedores", "Accesorios", "Guantes y protección", "Carros y contenedores", "Tapetes y discos", "Bolsas y film"];
const categorias = [...new Set(PRODUCTOS.map(p => p.cat))].sort((a, b) => (ORDEN.indexOf(a) + 1 || 99) - (ORDEN.indexOf(b) + 1 || 99));

const $ = id => document.getElementById(id);
const dinero = n => n == null ? "Por cotización" : "$" + n.toLocaleString("es-MX", { minimumFractionDigits: 2 });
let filtro = "Todos";
let carrito = {}; // id -> cantidad
try { carrito = JSON.parse(localStorage.getItem("lusalen_carrito")) || {}; } catch (e) {}
function guardar() { try { localStorage.setItem("lusalen_carrito", JSON.stringify(carrito)); } catch (e) {} }

/* ---------- Navegación entre apartados ---------- */
const VISTAS = ["inicio", "productos", "cotizaciones", "contacto"];
function mostrar() {
    let v = location.hash.replace("#", "");
    if (!VISTAS.includes(v)) v = "inicio";            // al abrir la página: Inicio
    document.body.dataset.vista = v;
    document.querySelectorAll(".vista").forEach(s => s.classList.remove("activa"));
    document.querySelectorAll(".navbar a").forEach(a => a.classList.toggle("activo", a.dataset.v === v));
    if (v === "productos") { pintarTabs(); pintarCatalogo(); }
    if (v === "cotizaciones") pintarCarrito();
    if (v === "inicio") { pintarCategorias(); iniciarCarrusel(); } else detenerCarrusel();
    if (v === "contacto") cargarMapa();
    const el = $("v-" + v);
    void el.offsetWidth;                               // reinicia la animación de entrada
    el.classList.add("activa");
    window.scrollTo(0, 0);
}
window.addEventListener("hashchange", mostrar);

/* ---------- Inicio: categorías del catálogo ---------- */
function pintarCategorias() {
    const TOP = ["Papel y toallas", "Dispensadores", "Productos de Limpieza", "Cepillos y recogedores", "Fregonas y mopas", "Higiene de manos"];
    $("cats").innerHTML = TOP.filter(c => categorias.includes(c)).map((c, i) => {
        const lista = PRODUCTOS.filter(p => p.cat === c);
        return `<div class="cat" data-c="${c}" style="animation-delay:${i * .1}s">
            <div class="im"><img src="${lista[0].img}" alt="${c}"></div>
            <h3>${c}</h3></div>`;
    }).join("");
}
$("cats").addEventListener("click", e => {
    const c = e.target.closest(".cat");
    if (!c) return;
    filtro = c.dataset.c; marcaF = "Todas"; consulta = "";
    location.hash = "#productos";
    if (location.hash === "#productos") mostrar();
});

/* ---------- Carrusel de Inicio: cambia de ventana cada 8 segundos ---------- */
const SEGUNDOS = 8;
const TOTAL_SLIDES = 3;
let slide = 0, reloj = null;
$("dots").innerHTML = Array.from({ length: TOTAL_SLIDES }, (_, i) => `<button data-i="${i}" aria-label="Ventana ${i + 1}"></button>`).join("");
function irSlide(n) {
    slide = (n + TOTAL_SLIDES) % TOTAL_SLIDES;
    $("track").style.transform = `translateX(-${slide * 100}%)`;
    [...$("dots").children].forEach((d, i) => d.classList.toggle("on", i === slide));
    const b = $("barra"); b.classList.remove("corre"); void b.offsetWidth; b.classList.add("corre");
}
function iniciarCarrusel() {
    detenerCarrusel();
    irSlide(slide);
    reloj = setInterval(() => irSlide(slide + 1), SEGUNDOS * 1000);
}
function detenerCarrusel() { clearInterval(reloj); reloj = null; }
$("next").addEventListener("click", () => { irSlide(slide + 1); iniciarCarrusel(); });
$("prev").addEventListener("click", () => { irSlide(slide - 1); iniciarCarrusel(); });
/* Deslizar con el dedo (celular) para cambiar de ventana en Inicio */
(function () {
    const c = $("carrusel"); let x0 = null, y0 = 0;
    c.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    c.addEventListener("touchend", e => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) { irSlide(slide + (dx < 0 ? 1 : -1)); iniciarCarrusel(); }
    }, { passive: true });
})();
$("dots").addEventListener("click", e => { if (e.target.dataset.i !== undefined) { irSlide(Number(e.target.dataset.i)); iniciarCarrusel(); } });

/* ---------- Productos separados por categoría ---------- */
function pintarTabs() {
    $("tabs").innerHTML = `
        <div class="sel-col"><div class="sel-tit">Categorías</div><div class="sel-grid">
            <button class="sel ${filtro === "Todos" && marcaF === "Todas" ? "on" : ""}" data-c="Todos">Todas</button>` +
        categorias.map(c => `<button class="sel ${c === filtro ? "on" : ""}" data-c="${c}">${c}</button>`).join("") + `</div></div>
        <div class="sel-col"><div class="sel-tit">Marcas</div><div class="sel-grid">` +
        marcas.map(m => `<button class="sel ${m === marcaF ? "on" : ""}" data-m="${m}">${m}</button>`).join("") + `</div></div>`;
}
function tarjeta(p, n) {
    return `<div class="card" tabindex="0" role="button" data-d="${p.id}" style="animation-delay:${Math.min(n, 14) * .05}s">
        <div class="im ${p.claro ? "claro" : ""}"><img loading="lazy" src="${p.img}" alt="${p.nombre}"></div>
        <div class="tx"><h4>${p.nombre}</h4>${p.dif ? `<div class="difs">${p.dif.slice(0, 3).map(d => `<span><em>${d[0].replace(" (clave)", "")}</em>${d[1]}</span>`).join("")}</div>` : ""}<span class="precio cot">PRECIO POR COTIZACIÓN</span>
        <button class="${carrito[p.id] ? "ok" : ""}" data-a="${p.id}">${carrito[p.id] ? "✓ En cotización" : "Agregar a cotización"}</button></div></div>`;
}
let consulta = "", listaActual = [];
function pintarCatalogo() {
    let n = 0, html = ""; listaActual = [];
    if (consulta) {
        const r = buscar(consulta); listaActual = r.map(p => p.id);
        html = `<div class="bloque"><h3>Resultados para “${consulta.replace(/</g, "")}”</h3>` + (r.length ? `<div class="grid">${r.map(p => tarjeta(p, n++)).join("")}</div>` : '<div class="vacio">No encontramos productos con esa búsqueda. Prueba con otra palabra o una marca.</div>') + `</div>`;
        $("catalogo").innerHTML = html; return;
    }
    categorias.filter(c => filtro === "Todos" || c === filtro).forEach(c => {
        const lista = PRODUCTOS.filter(p => p.cat === c && (marcaF === "Todas" || p.marca === marcaF));
        if (!lista.length) return;
        const ms = marcas.filter(m => lista.some(p => p.marca === m));
        html += `<div class="bloque"><h3>${c}</h3>` + ms.map(m => {
            const g = lista.filter(p => p.marca === m).sort((a, b) => a.nombre.localeCompare(b.nombre, "es", { numeric: true }) || String(a.variante || a.modelo).localeCompare(String(b.variante || b.modelo), "es", { numeric: true }));
            g.forEach(p => listaActual.push(p.id));
            return `<div class="marca-bloque">${ms.length > 1 || marcaF !== "Todas" ? `<h5 class="marca-t"><span>${m}</span></h5>` : ""}<div class="grid">${g.map(p => tarjeta(p, n++)).join("")}</div></div>`;
        }).join("") + `</div>`;
    });
    $("catalogo").innerHTML = html || '<div class="vacio">No hay productos en esta selección.</div>';
}
$("tabs").addEventListener("click", e => {
    const b = e.target.closest(".sel"); if (!b) return;
    consulta = ""; $("q").value = ""; $("q2").value = "";
    if (b.dataset.m) { marcaF = b.dataset.m; filtro = "Todos"; } else { filtro = b.dataset.c; marcaF = "Todas"; }
    pintarTabs(); pintarCatalogo();
    $("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("catalogo").addEventListener("click", e => {
    const id = e.target.dataset.a;
    if (id === undefined) { const c = e.target.closest(".card"); if (c) abrirDetalle(Number(c.dataset.d)); return; }
    if (carrito[id]) delete carrito[id]; else carrito[id] = 1;
    guardar(); actualizarContador(true);
    e.target.className = carrito[id] ? "ok" : "";
    e.target.textContent = carrito[id] ? "✓ En cotización" : "Agregar a cotización";
    e.target.classList.remove("pop"); void e.target.offsetWidth; e.target.classList.add("pop");
    toast(carrito[id] ? "✓ Agregado a tu cotización: " + PRODUCTOS[id].nombre : "Quitado de tu cotización");
});

/* ---------- Cotizaciones (carrito) ---------- */
function actualizarContador(animar) {
    const c = $("contador");
    c.textContent = Object.values(carrito).reduce((a, b) => a + b, 0);
    if (animar) { c.classList.remove("salto"); void c.offsetWidth; c.classList.add("salto"); }
}
function pintarCarrito() {
    const ids = Object.keys(carrito);
    $("items").innerHTML = ids.length ? ids.map((i, k) => {
        const p = PRODUCTOS[i];
        return `<div class="it" style="animation-delay:${k * .07}s">
            <img src="${p.img}" alt="">
            <div><div class="nom">${p.nombre}</div><div class="pu">${p.precio == null ? "Precio por cotización" : dinero(p.precio) + " c/u"}</div></div>
            <div class="cant"><button data-m="${i}" data-d="-1">−</button><b>${carrito[i]}</b><button data-m="${i}" data-d="1">+</button></div>
            <div class="sub-t">${p.precio == null ? "—" : dinero(p.precio * carrito[i])}</div>
            <button class="quitar" data-q="${i}" title="Quitar">🗑️</button></div>`;
    }).join("") : '<div class="vacio">Tu carrito está vacío. <a href="#productos">Ver productos</a></div>';
    $("total").textContent = "";
    actualizarContador(false); actualizarEnlaces();
}
function totalCarrito() { return Object.keys(carrito).reduce((s, i) => s + (PRODUCTOS[i].precio || 0) * carrito[i], 0); }
$("items").addEventListener("click", e => {
    const d = e.target.dataset;
    if (d.m !== undefined) { carrito[d.m] += Number(d.d); if (carrito[d.m] < 1) delete carrito[d.m]; }
    else if (d.q !== undefined) delete carrito[d.q];
    else return;
    guardar(); pintarCarrito();
});
function textoCotizacion() {
    let t = "Hola, solicito cotización a LUSALEN.\n";
    t += `Nombre: ${$("nom").value}\nTeléfono: ${$("tel").value}\nCorreo: ${$("mail").value}\n\nProductos:\n`;
    Object.keys(carrito).forEach(i => { t += `- ${carrito[i]} x ${PRODUCTOS[i].nombre} ${PRODUCTOS[i].modelo ? "[" + PRODUCTOS[i].modelo + "] " : ""}${PRODUCTOS[i].precio == null ? "(precio por cotización)" : "(" + dinero(PRODUCTOS[i].precio * carrito[i]) + ")"}\n`; });
    return t + `\n${$("msg").value}`;
}
function actualizarEnlaces() {
    const t = encodeURIComponent(textoCotizacion());
    $("wa").href = `https://wa.me/${WHATSAPP}?text=${t}`;
}
["nom", "tel", "mail", "msg"].forEach(id => $(id).addEventListener("input", actualizarEnlaces));

/* ---------- Contacto: mapa de Google Maps ---------- */
function cargarMapa() {
    const f = $("mapa");
  if (!f.src) f.src = `https://www.google.com/maps?q=Lusalen&ll=${MAPA_COORD}&z=18&output=embed`;
    $("verMapa").href = MAPA_LINK;
}

actualizarContador(false);
mostrar();

/* ---------- Efectos de clic: onda y mensaje de confirmación ---------- */
document.addEventListener("click", e => {
    const host = e.target.closest(".btn, .btn-hero, .tab, .card button, .cat, .flecha, .cant button, .quitar, .navbar a");
    if (!host) return;
    host.classList.add("ripple-host");
    const r = host.getBoundingClientRect(), d = Math.max(r.width, r.height);
    const s = document.createElement("span");
    s.className = "ripple";
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    host.appendChild(s);
    setTimeout(() => s.remove(), 700);
});
let toastTimer;
function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; void t.offsetWidth; t.classList.add("ver");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("ver"), 2200);
}
$("wa").addEventListener("click", () => toast("✓ Abriendo WhatsApp con tu cotización…"));


/* ---------- Detalle del producto (ventana animada) ---------- */
let detId = null;
function abrirDetalle(id, dir) {
    detId = id; const p = PRODUCTOS[id]; if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    if (!listaActual.includes(id)) listaActual = [id];
    const pos = listaActual.indexOf(id), tot = listaActual.length;
    let m = document.getElementById("detalle");
    if (!m) { m = document.createElement("div"); m.id = "detalle"; document.body.appendChild(m);
        m.addEventListener("click", e => {
            if (e.target === m || e.target.closest(".dt-x")) cerrarDetalle();
            else if (e.target.closest(".dt-nav.prev")) navegarDetalle(-1);
            else if (e.target.closest(".dt-nav.next")) navegarDetalle(1);
        });
        document.addEventListener("keydown", e => { if (!m.classList.contains("ver")) return;
            if (e.key === "Escape") cerrarDetalle(); if (e.key === "ArrowLeft") navegarDetalle(-1); if (e.key === "ArrowRight") navegarDetalle(1); });
        let tx = null;
        m.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
        m.addEventListener("touchend", e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
            if (Math.abs(dx) > 70) navegarDetalle(dx < 0 ? 1 : -1); }, { passive: true });
    }
    const esDif = r => p.dif && p.dif.some(d => d[0] === r[0]);
    const filas = p.specs.map((r, k) => `<div class="dt-fila ${esDif(r) ? "dif" : ""}" style="animation-delay:${.2 + k * .04}s"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
    m.classList.remove("nav-sig", "nav-ant"); void m.offsetWidth;
    if (dir) m.classList.add(dir > 0 ? "nav-sig" : "nav-ant");
    m.innerHTML = `<button class="dt-nav prev" aria-label="Producto anterior"${tot < 2 ? " hidden" : ""}>‹</button>
        <div class="dt-panel" role="dialog" aria-modal="true">
        <button class="dt-x" aria-label="Cerrar">✕</button>
        <div class="dt-img ${p.claro ? "claro" : ""}"><img src="${p.img}" alt="${p.nombre}">${tot > 1 ? `<span class="dt-cnt">${pos + 1} / ${tot}</span>` : ""}</div>
        <div class="dt-info">
            <span class="dt-cat">${p.cat}</span>
            <h3>${p.nombre}</h3>
            <div class="dt-tags"><span>Marca: <b>${p.marca}</b></span>${p.modelo ? `<span>Modelo: <b>${p.modelo}</b></span>` : ""}</div>
            <p class="dt-desc">${p.desc || ""}</p>
            ${p.dif ? `<div class="dt-nota">Producto con variantes: lo que lo distingue está resaltado.</div>` : ""}
            <div class="dt-specs">${filas}</div>
            <div class="dt-precio cot">PRECIO POR COTIZACIÓN</div>
            <button class="dt-add ${carrito[id] ? "ok" : ""}" id="dtAdd">${carrito[id] ? "✓ En cotización" : "Agregar a cotización"}</button>
        </div></div>
        <button class="dt-nav next" aria-label="Producto siguiente"${tot < 2 ? " hidden" : ""}>›</button>`;
    m.classList.add("ver"); document.body.classList.add("sin-scroll");
    $("dtAdd").addEventListener("click", () => {
        if (carrito[id]) delete carrito[id]; else carrito[id] = 1;
        guardar(); actualizarContador(true);
        $("dtAdd").className = "dt-add pop " + (carrito[id] ? "ok" : "");
        $("dtAdd").textContent = carrito[id] ? "✓ En cotización" : "Agregar a cotización";
        toast(carrito[id] ? "✓ Agregado a tu cotización: " + p.nombre : "Quitado de tu cotización");
        const act = document.querySelector(`[data-a="${id}"]`); if (act) { act.className = carrito[id] ? "ok" : ""; act.textContent = carrito[id] ? "✓ En cotización" : "Agregar a cotización"; }
    });
}
function navegarDetalle(d) {
    if (listaActual.length < 2) return;
    const i = (listaActual.indexOf(detId) + d + listaActual.length) % listaActual.length;
    abrirDetalle(listaActual[i], d);
}
function cerrarDetalle() {
    const m = document.getElementById("detalle"); if (!m || !m.classList.contains("ver")) return;
    m.classList.remove("ver"); document.body.classList.remove("sin-scroll");
}

/* ---------- Buscador ---------- */
const norm = t => (t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const INDICE = PRODUCTOS.map(p => ({ p, n: norm(p.nombre), h: norm([p.nombre, p.marca, p.cat, p.modelo, p.desc, (p.specs || []).map(s => s[1]).join(" ")].join(" ")) }));
function buscar(q) {
    const t = norm(q).split(/\s+/).filter(Boolean); if (!t.length) return [];
    return INDICE.map(x => {
        if (!t.every(w => x.h.includes(w))) return null;
        let sc = 0; t.forEach(w => { if (x.n.startsWith(w)) sc += 5; else if (x.n.includes(w)) sc += 3; if (norm(x.p.marca).includes(w)) sc += 2; if (norm(x.p.modelo || "").includes(w)) sc += 4; });
        return { p: x.p, sc };
    }).filter(Boolean).sort((a, b) => b.sc - a.sc || a.p.nombre.localeCompare(b.p.nombre, "es")).map(x => x.p);
}
function irAProductos(fn) { consulta = ""; fn(); $("q").value = ""; $("q2").value = ""; document.body.classList.remove("nav-open");
    if (location.hash === "#productos") mostrar(); else location.hash = "#productos"; }
function initBuscador(inp, res) {
    const cerrar = () => res.classList.remove("ver");
    inp.addEventListener("input", () => {
        const q = inp.value.trim(); if (q.length < 2) return cerrar();
        const r = buscar(q), nq = norm(q);
        const ms = marcas.filter(m => norm(m).includes(nq)).slice(0, 3), cs = categorias.filter(c => norm(c).includes(nq)).slice(0, 3);
        let html = ms.map(m => `<button class="qr-chip" data-m="${m}"><b>Marca</b> ${m}</button>`).join("") + cs.map(c => `<button class="qr-chip" data-c="${c}"><b>Categoría</b> ${c}</button>`).join("");
        html += r.slice(0, 6).map(p => `<button class="qr-it" data-p="${p.id}"><img src="${p.img}" alt=""><span><b>${p.nombre}</b><em>${p.marca} · ${p.cat}</em></span></button>`).join("");
        if (r.length > 6) html += `<button class="qr-todos" data-all="1">Ver los ${r.length} resultados</button>`;
        if (!html) html = '<div class="qr-vacio">Sin resultados. Prueba con otra palabra o una marca.</div>';
        res.innerHTML = html; res.classList.add("ver");
    });
    inp.addEventListener("keydown", e => {
        const items = [...res.querySelectorAll("button")], act = res.querySelector(".qr-act"), abierto = res.classList.contains("ver");
        if ((e.key === "ArrowDown" || e.key === "ArrowUp") && abierto && items.length) {
            e.preventDefault(); let i = items.indexOf(act);
            i = e.key === "ArrowDown" ? (i + 1) % items.length : (i <= 0 ? items.length - 1 : i - 1);
            items.forEach(x => x.classList.remove("qr-act")); items[i].classList.add("qr-act"); items[i].scrollIntoView({ block: "nearest" }); return;
        }
        if (e.key === "Enter") {
            if (act && abierto) { e.preventDefault(); act.click(); return; }
            if (inp.value.trim().length > 1) { const q = inp.value.trim(); irAProductos(() => { consulta = q; }); consulta = q; mostrar(); inp.value = q; cerrar(); inp.blur(); }
        }
        if (e.key === "Escape") cerrar();
    });
    res.addEventListener("click", e => {
        const b = e.target.closest("button"); if (!b) return; cerrar();
        if (b.dataset.p) { const id = Number(b.dataset.p), p = PRODUCTOS[id]; irAProductos(() => { filtro = p.cat; marcaF = "Todas"; }); setTimeout(() => abrirDetalle(id), 150); }
        else if (b.dataset.m) irAProductos(() => { marcaF = b.dataset.m; filtro = "Todos"; });
        else if (b.dataset.c) irAProductos(() => { filtro = b.dataset.c; marcaF = "Todas"; });
        else if (b.dataset.all) { const q = inp.value.trim(); irAProductos(() => {}); consulta = q; mostrar(); $("q").value = q; }
    });
    document.addEventListener("click", e => { if (!e.target.closest(".buscador") && !e.target.closest(".nav-bus")) cerrar(); });
}
initBuscador($("q"), $("qres")); initBuscador($("q2"), $("qres2"));
$("burger").addEventListener("click", () => document.body.classList.toggle("nav-open"));
document.querySelectorAll(".navbar a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
$("filtBtn").addEventListener("click", () => $("tabs").classList.toggle("abierto"));

/* ---------- Menú desplegable de Productos ---------- */
function pintarMenuProductos() {
    $("menuProd").innerHTML = `<div class="mp-tit">Categorías</div><div class="mp-grid">` +
        categorias.map(c => `<button class="mp-item" data-c="${c}"><span>${c}</span></button>`).join("") + `</div>`;
}
$("menuProd").addEventListener("click", e => {
    const b = e.target.closest(".mp-item, .mp-chip"); if (!b) return;
    consulta = ""; $("q").value = ""; $("q2").value = "";
    if (b.dataset.m) { marcaF = b.dataset.m; filtro = "Todos"; } else { filtro = b.dataset.c; marcaF = "Todas"; }
    document.activeElement && document.activeElement.blur();
    if (location.hash === "#productos") mostrar(); else location.hash = "#productos";
});
pintarMenuProductos();

document.querySelectorAll(".q-x").forEach(b => {
    const inp = b.parentElement.querySelector("input");
    b.addEventListener("click", e => { e.preventDefault(); e.stopPropagation(); inp.value = ""; b.parentElement.querySelector(".qres").classList.remove("ver");
        if (consulta) { consulta = ""; pintarCatalogo(); } inp.focus(); });
});

$("catalogo").addEventListener("keydown", e => {
    const card = e.target.closest(".card"); if (!card || e.target !== card) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirDetalle(Number(card.dataset.d)); return; }
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const cards = [...$("catalogo").querySelectorAll(".card")], i = cards.indexOf(card), r = card.getBoundingClientRect();
    let j = i;
    if (e.key === "ArrowLeft") j = i - 1; else if (e.key === "ArrowRight") j = i + 1;
    else {
        const dir = e.key === "ArrowDown" ? 1 : -1;
        const c = cards.map((x, k) => { const q = x.getBoundingClientRect(); return { k, dy: (q.top - r.top) * dir, dx: Math.abs(q.left - r.left) }; }).filter(o => o.dy > 20);
        if (c.length) j = c.sort((a, b) => (a.dy * 1000 + a.dx) - (b.dy * 1000 + b.dx))[0].k;
    }
    if (cards[j]) { cards[j].focus(); cards[j].scrollIntoView({ block: "center", behavior: "smooth" }); }
});


/* ---------- Envío por API (Web3Forms) a tu correo ---------- */
async function enviarAPI(asunto, nombre, mail, tel, mensaje) {
    const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: asunto, from_name: "LUSALEN Web", name: nombre, email: mail, phone: tel, message: mensaje })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.success) throw new Error("envio");
}

/* ---------- Contacto: formulario de mensaje directo ---------- */
(function () {
    const f = $("formContacto"); if (!f) return;
    const est = $("cf-estado"), btn = $("cf-btn");
    const ver = (t, ok) => { est.textContent = t; est.className = "cf-estado ver " + (ok ? "ok" : "err"); };
    f.addEventListener("submit", async e => {
        e.preventDefault();
        if ($("cf-web").value) return;                                   // anti-spam (campo oculto)
        const d = { nombre: $("cf-nombre").value.trim(), tel: $("cf-tel").value.trim(), mail: $("cf-mail").value.trim(), medio: $("cf-medio").value, msg: $("cf-msg").value.trim() };
        f.querySelectorAll("input, select, textarea").forEach(x => x.classList.remove("mal"));
        const malos = [];
        if (d.nombre.length < 3) malos.push("cf-nombre");
        if (d.tel.replace(/\D/g, "").length < 10) malos.push("cf-tel");
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.mail)) malos.push("cf-mail");
        if (!d.medio) malos.push("cf-medio");
        if (d.msg.length < 5) malos.push("cf-msg");
        if (malos.length) { malos.forEach(id => $(id).classList.add("mal")); $(malos[0]).focus(); return ver("Revisa los campos marcados: todos son obligatorios.", false); }
        try { const u = Number(localStorage.getItem("ultimoMensaje") || 0); if (Date.now() - u < 45000) return ver("Ya enviaste un mensaje hace un momento. Espera unos segundos e inténtalo de nuevo.", false); } catch (_) {}
                btn.disabled = true; btn.classList.add("cargando"); btn.firstElementChild.textContent = "Enviando…";
        try {
            await enviarAPI("Nuevo mensaje desde la página web", d.nombre, d.mail, d.tel, "Nos conoció por: " + d.medio + "\n\n" + d.msg);
            try { localStorage.setItem("ultimoMensaje", String(Date.now())); } catch (_) {}
            f.reset(); ver("¡Mensaje enviado correctamente! Gracias por escribirnos, nos pondremos en contacto contigo muy pronto.", true);
        } catch (err) {
            ver("No pudimos enviar tu mensaje. Inténtalo de nuevo o llámanos al 55 2215 0137.", false);
        }
        btn.disabled = false; btn.classList.remove("cargando"); btn.firstElementChild.textContent = "Enviar mensaje";
    });
    f.addEventListener("input", e => e.target.classList.remove("mal"));
})();


/* ---------- Cotización / pedido: envío automático por API (correo, Web3Forms) ---------- */
(function () {
    const b = $("enviarCot"), est = $("cot-estado"); if (!b) return;
    const ver = (t, ok) => { est.textContent = t; est.className = "cf-estado ver " + (ok ? "ok" : "err"); };
    b.addEventListener("click", async () => {
        const ids = Object.keys(carrito);
        const d = { tipo: "pedido", nombre: $("nom").value.trim(), tel: $("tel").value.trim(), mail: $("mail").value.trim(), msg: $("msg").value.trim(),
            items: ids.map(i => ({ c: carrito[i], n: PRODUCTOS[i].nombre, m: PRODUCTOS[i].modelo || "", p: PRODUCTOS[i].precio == null ? "precio por cotización" : dinero(PRODUCTOS[i].precio * carrito[i]) })) };
        ["nom", "tel", "mail"].forEach(id => $(id).classList.remove("mal"));
        if (!ids.length) return ver("Tu carrito está vacío. Agrega productos primero.", false);
        const malos = [];
        if (d.nombre.length < 3) malos.push("nom");
        if (d.tel.replace(/\D/g, "").length < 10) malos.push("tel");
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.mail)) malos.push("mail");
        if (malos.length) { malos.forEach(id => $(id).classList.add("mal")); $(malos[0]).focus(); return ver("Completa tu nombre, teléfono (10 dígitos) y correo.", false); }
        try { const u = Number(localStorage.getItem("ultimoPedido") || 0); if (Date.now() - u < 30000) return ver("Ya enviaste una solicitud hace un momento. Espera unos segundos.", false); } catch (_) {}
        b.disabled = true; b.textContent = "Enviando…";
        try {
            const lista = d.items.map(i => `- ${i.c} x ${i.n}${i.m ? " [" + i.m + "] " : " "}(${i.p})`).join("\n");
            await enviarAPI("Nueva cotización / pedido", d.nombre, d.mail, d.tel, "Productos:\n" + lista + (d.msg ? "\n\nComentarios: " + d.msg : ""));
            try { localStorage.setItem("ultimoPedido", String(Date.now())); } catch (_) {}
            carrito = {}; guardar(); pintarCarrito();
            ver("¡Solicitud enviada correctamente! Nos pondremos en contacto contigo muy pronto.", true);
        } catch (err) {
            ver("No pudimos enviar tu solicitud. Usa los botones de WhatsApp o correo, o llámanos al 55 2215 0137.", false);
        }
        b.disabled = false; b.textContent = "Enviar a correo";
    });
})();


/* ---------- Contacto: enviar el mensaje por WhatsApp ---------- */
(function () {
    const b = $("cf-wa"); if (!b) return;
    b.addEventListener("click", () => {
        const d = { nombre: $("cf-nombre").value.trim(), tel: $("cf-tel").value.trim(), mail: $("cf-mail").value.trim(), medio: $("cf-medio").value, msg: $("cf-msg").value.trim() };
        ["cf-nombre", "cf-tel", "cf-mail", "cf-medio", "cf-msg"].forEach(id => $(id).classList.remove("mal"));
        const malos = [];
        if (d.nombre.length < 3) malos.push("cf-nombre");
        if (d.tel.replace(/\D/g, "").length < 10) malos.push("cf-tel");
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.mail)) malos.push("cf-mail");
        if (!d.medio) malos.push("cf-medio");
        if (d.msg.length < 5) malos.push("cf-msg");
        const est = $("cf-estado");
        if (malos.length) { malos.forEach(id => $(id).classList.add("mal")); $(malos[0]).focus(); est.textContent = "Revisa los campos marcados: todos son obligatorios."; est.className = "cf-estado ver err"; return; }
        const t = `Hola, quiero ponerme en contacto con LUSALEN.\nNombre: ${d.nombre}\nTeléfono: ${d.tel}\nCorreo: ${d.mail}\nNos conoció por: ${d.medio}\n\n${d.msg}`;
        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`, "_blank");
        toast("✓ Abriendo WhatsApp con tu mensaje…");
    });
})();

/* ---------- Deslizar con el dedo para pasar entre apartados (celular) ---------- */
(function () {
    let x0 = null, y0 = 0, ok = false;
    const NO = "input, textarea, select, iframe, .tabs, .qres, .dt-panel, #carrusel";
    document.addEventListener("touchstart", e => {
        ok = !document.body.classList.contains("sin-scroll") && !e.target.closest(NO);
        x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener("touchend", e => {
        if (x0 === null || !ok) { x0 = null; return; }
        const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
        if (Math.abs(dx) < 80 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
        const i = VISTAS.indexOf(document.body.dataset.vista || "inicio") + (dx < 0 ? 1 : -1);
        if (i >= 0 && i < VISTAS.length) location.hash = "#" + VISTAS[i];
    }, { passive: true });
})();

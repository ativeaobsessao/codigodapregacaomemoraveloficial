/* Código da Pregação Memorável — comportamento da página (sem framework).
   Cada bloco abaixo corresponde a um comportamento da página original. */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Fim da promoção: quando passa o prazo (data-fim no <html>), a página vira "preço cheio" sozinha ---- */
  var root = document.documentElement;
  var fim = new Date(root.getAttribute("data-fim")).getTime();
  if (!root.classList.contains("fim")) {
    var fimId = setInterval(function () {
      if (Date.now() >= fim) { root.classList.add("fim"); clearInterval(fimId); }
    }, 15000);
  }

  /* ---- Rastreamento: evento de checkout nos 2 pixels ---- */
  function track() {
    if (window.fbq) window.fbq("track", "InitiateCheckout");
    if (window.loadMetaPixels) window.loadMetaPixels();
  }
  $$("[data-track]").forEach(function (a) { a.addEventListener("click", track); });

  /* ---- FAQ (uma pergunta aberta por vez) ---- */
  var faqItems = $$("[data-faq] > div");
  faqItems.forEach(function (item) {
    var btn = $("button", item), ans = $("p", item), icon = $("svg", item);
    btn.addEventListener("click", function () {
      var willOpen = ans.hasAttribute("hidden");
      faqItems.forEach(function (o) {
        $("p", o).setAttribute("hidden", "");
        $("button", o).setAttribute("aria-expanded", "false");
        $("svg", o).classList.remove("rotate-180");
      });
      if (willOpen) {
        ans.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        icon.classList.add("rotate-180");
      }
    });
  });

  /* ---- Depoimento em vídeo: só baixa o MP4 depois do toque (com som) ---- */
  $$("[data-testimonial]").forEach(function (box) {
    var btn = $("button", box);
    btn.addEventListener("click", function () {
      var v = document.createElement("video");
      v.src = box.getAttribute("data-src");
      v.poster = box.getAttribute("data-poster");
      v.controls = true; v.playsInline = true; v.preload = "auto";
      v.setAttribute("playsinline", ""); v.setAttribute("webkit-playsinline", "");
      v.className = "h-full w-full object-cover";
      box.replaceChild(v, btn);
      var p = v.play(); if (p && p.catch) p.catch(function () {});
      pixel("DepoimentoPlay");
    });
  });

  /* ---- Carrosséis (1 slide por vez / vários por vez) ---- */
  $$("[data-carousel]").forEach(function (root) {
    var track = $("[data-track]", root);
    var dots = $$("[data-dots] button", root);
    var total = dots.length;
    var multi = root.getAttribute("data-carousel") === "multi";
    var interval = parseInt(root.getAttribute("data-interval"), 10) || 4000;
    var active = 0;

    function slideW() {
      return multi && track.firstElementChild ? track.firstElementChild.offsetWidth : track.clientWidth;
    }
    function paint() {
      dots.forEach(function (d, i) {
        d.className = "h-2 rounded-full transition-all " + (i === active ? "w-6 bg-gold" : "w-2 bg-muted");
      });
    }
    function go(i) {
      var next = i >= total ? 0 : i < 0 ? total - 1 : i;
      track.scrollTo({ left: slideW() * next, behavior: "smooth" });
      active = next;
      paint();
    }
    track.addEventListener("scroll", function () {
      var a = Math.min(total - 1, Math.round(track.scrollLeft / Math.max(1, slideW())));
      if (a !== active) { active = a; paint(); }
    }, { passive: true });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { go(i); }); });

    /* autoplay só enquanto o carrossel está visível na tela */
    var visible = true;
    if ("IntersectionObserver" in window) {
      visible = false;
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(root);
    }
    setInterval(function () { if (visible) go(active + 1); }, interval);
  });
  /* ---- Carrossel: as imagens já carregam sozinhas (loading="lazy" nativo). Este reforço é opcional:
     1,5 s depois da página abrir, libera as dos outros slides em segundo plano (evita cartão branco ao deslizar). ---- */
  function warmCarousel() { $$("#carousel-esbocos img").forEach(function (i) { i.loading = "eager"; }); }
  if (document.readyState === "complete") setTimeout(warmCarousel, 1500);
  else window.addEventListener("load", function () { setTimeout(warmCarousel, 1500); });

  /* ---- Primeira tela: altura = área visível do celular (o botão nunca é cortado) ----
     window.innerHeight é a altura real visível, inclusive nos navegadores do Instagram/Facebook,
     onde 100vh costuma ser maior que a tela. Só recalcula se a largura mudar (girar o aparelho),
     para a página não "pular" quando a barra do navegador some ao rolar. */
  function fit() {
    var r = document.documentElement.style, f = $("#faixa");
    r.setProperty("--app-h", window.innerHeight + "px");
    r.setProperty("--banner-h", (f ? f.offsetHeight : 0) + "px");
  }
  fit();
  var lastW = window.innerWidth;
  window.addEventListener("resize", function () { if (window.innerWidth !== lastW) { lastW = window.innerWidth; fit(); } });
  window.addEventListener("orientationchange", function () { setTimeout(fit, 250); });
  window.addEventListener("load", fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  /* ---- Vídeo (VSL) em tela cheia: só baixa o MP4 depois do toque; fecha sozinho ao terminar ---- */
  var vslModal = $("#vsl-modal"), vslStage = $("[data-vsl-stage]"), vsl = null, vslOpen = false;
  function pixel(name) {
    if (window.fbq) window.fbq("trackCustom", name);
    if (window.loadMetaPixels) window.loadMetaPixels();
  }
  function openVsl() {
    if (!vslModal || vslOpen) return;
    vslOpen = true;
    vsl = document.createElement("video");
    vsl.src = "media/opt-vsl.mp4";
    vsl.poster = "media/opt-vsl-poster.webp";
    vsl.controls = true; vsl.playsInline = true; vsl.preload = "auto";
    vsl.setAttribute("playsinline", ""); vsl.setAttribute("webkit-playsinline", "");
    vsl.className = "h-full w-full object-contain";
    vsl.addEventListener("ended", function () { closeVsl(false, true); });
    vslStage.appendChild(vsl);
    vslModal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    try { history.pushState({ vsl: 1 }, ""); } catch (e) {}
    var p = vsl.play(); if (p && p.catch) p.catch(function () {});
    pixel("VSLPlay");
  }
  function closeVsl(fromPop, ended) {
    if (!vslOpen) return;
    vslOpen = false;
    if (vsl) { vsl.pause(); vsl.removeAttribute("src"); vsl.load(); vsl.remove(); vsl = null; }
    vslModal.setAttribute("hidden", "");
    document.body.style.overflow = "";
    if (!fromPop) { try { if (history.state && history.state.vsl) history.back(); } catch (e) {} }
    if (ended) {
      pixel("VSLEnd");
      var cta = $("#cta-topo");
      if (cta) { cta.classList.add("ring-4", "ring-cta-hover"); setTimeout(function () { cta.classList.remove("ring-4", "ring-cta-hover"); }, 3500); }
    }
  }
  $$("[data-vsl-open]").forEach(function (b) { b.addEventListener("click", openVsl); });
  $$("[data-vsl-close]").forEach(function (b) { b.addEventListener("click", function () { closeVsl(false, false); }); });
  window.addEventListener("popstate", function () { if (vslOpen) closeVsl(true, false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeVsl(false, false); });
})();

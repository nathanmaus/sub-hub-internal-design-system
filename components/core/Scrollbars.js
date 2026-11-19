/* Overlay scrollbars. The native scrollbars are hidden (the script adds the CSS for that) so they never take layout space,
   and this draws a thumb on a fixed layer above the page instead: no track, nothing shifts when it
   appears. The thumb shows instantly when an element starts scrolling, stays while it scrolls,
   and fades out over 500ms once scrolling has stopped for 2000ms. It works for the page and for any
   scrolling element, vertical and horizontal, with no setup. Put `data-native-scrollbar` on an
   element to keep the browser's own scrollbar there instead. */
export const Scrollbars = (function () {
  const HOLD = 2000; // ms of no scrolling before the fade starts
  const FADE = 500; // fade-out duration
  const SIZE = 8; // thumb thickness
  const INSET = 4; // gap between thumb and the scroller's edge
  const MIN = 32; // shortest thumb
  if (typeof window === "undefined" || typeof document === "undefined") return { refresh() {}, destroy() {} };
  if (window.__dsScrollbars) return window.__dsScrollbars;

  let layer = null;
  const live = new Map(); // scroller -> { v, h, timer, raf, dragging }

  function getLayer() {
    if (layer && layer.isConnected) return layer;
    layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.setAttribute("data-ds-scrollbars", "");
    layer.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000;contain:strict;";
    document.body.appendChild(layer);
    return layer;
  }

  function scrollerOf(target) {
    if (target === document || target === document.documentElement || target === document.body) {
      return document.scrollingElement || document.documentElement;
    }
    return target && target.nodeType === 1 ? target : null;
  }

  function makeThumb(axis, el) {
    const t = document.createElement("div");
    t.style.cssText =
      "position:absolute;left:0;top:0;border-radius:" + SIZE / 2 + "px;background:var(--scrollbar-thumb, rgba(127,127,127,.6));" +
      "opacity:0;transition:none;pointer-events:none;touch-action:none;will-change:transform,opacity;" +
      (axis === "v" ? "width:" + SIZE + "px;" : "height:" + SIZE + "px;");
    // Dragging the thumb scrolls its element, for mouse users who grab it while it is visible.
    t.addEventListener("pointerdown", (e) => {
      const s = live.get(el);
      if (!s) return;
      e.preventDefault();
      t.setPointerCapture(e.pointerId);
      s.dragging = { axis, start: axis === "v" ? e.clientY : e.clientX, from: axis === "v" ? el.scrollTop : el.scrollLeft };
      show(el);
    });
    t.addEventListener("pointermove", (e) => {
      const s = live.get(el);
      if (!s || !s.dragging || s.dragging.axis !== axis) return;
      const g = geometry(el);
      const track = axis === "v" ? g.trackV : g.trackH;
      const len = axis === "v" ? g.thumbV : g.thumbH;
      const range = axis === "v" ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
      const delta = (axis === "v" ? e.clientY : e.clientX) - s.dragging.start;
      const next = s.dragging.from + (delta / Math.max(1, track - len)) * range;
      if (axis === "v") el.scrollTop = next; else el.scrollLeft = next;
    });
    const end = () => { const s = live.get(el); if (s) { s.dragging = null; scheduleHide(el); } };
    t.addEventListener("pointerup", end);
    t.addEventListener("pointercancel", end);
    getLayer().appendChild(t);
    return t;
  }

  function geometry(el) {
    const isPage = el === (document.scrollingElement || document.documentElement);
    const r = isPage ? { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight } : el.getBoundingClientRect();
    const vScroll = el.scrollHeight > el.clientHeight + 1;
    const hScroll = el.scrollWidth > el.clientWidth + 1;
    const both = vScroll && hScroll;
    const trackV = r.height - INSET * 2 - (both ? SIZE + INSET : 0);
    const trackH = r.width - INSET * 2 - (both ? SIZE + INSET : 0);
    const thumbV = Math.max(MIN, (el.clientHeight / el.scrollHeight) * trackV);
    const thumbH = Math.max(MIN, (el.clientWidth / el.scrollWidth) * trackH);
    return { r, vScroll, hScroll, trackV, trackH, thumbV, thumbH };
  }

  function place(el) {
    const s = live.get(el);
    if (!s) return;
    const g = geometry(el);
    if (g.vScroll) {
      if (!s.v) s.v = makeThumb("v", el);
      const range = el.scrollHeight - el.clientHeight;
      const y = g.r.top + INSET + (range > 0 ? (el.scrollTop / range) * (g.trackV - g.thumbV) : 0);
      s.v.style.height = g.thumbV + "px";
      s.v.style.transform = "translate(" + (g.r.left + g.r.width - INSET - SIZE) + "px," + y + "px)";
    }
    if (g.hScroll) {
      if (!s.h) s.h = makeThumb("h", el);
      const range = el.scrollWidth - el.clientWidth;
      const x = g.r.left + INSET + (range > 0 ? (el.scrollLeft / range) * (g.trackH - g.thumbH) : 0);
      s.h.style.width = g.thumbH + "px";
      s.h.style.transform = "translate(" + x + "px," + (g.r.top + g.r.height - INSET - SIZE) + "px)";
    }
    if (s.v) s.v.style.display = g.vScroll ? "" : "none";
    if (s.h) s.h.style.display = g.hScroll ? "" : "none";
  }

  function each(s, fn) { if (s.v) fn(s.v); if (s.h) fn(s.h); }

  function show(el) {
    const s = live.get(el);
    each(s, (t) => { t.style.transition = "none"; t.style.opacity = "1"; t.style.pointerEvents = "auto"; });
    clearTimeout(s.timer);
  }

  function scheduleHide(el) {
    const s = live.get(el);
    if (!s) return;
    clearTimeout(s.timer);
    s.timer = setTimeout(() => {
      if (s.dragging) return;
      each(s, (t) => { t.style.transition = "opacity " + FADE + "ms cubic-bezier(0.2, 0, 0.2, 1)"; t.style.opacity = "0"; t.style.pointerEvents = "none"; });
      s.timer = setTimeout(() => forget(el), FADE + 50);
    }, HOLD);
  }

  function forget(el) {
    const s = live.get(el);
    if (!s) return;
    clearTimeout(s.timer);
    cancelAnimationFrame(s.raf);
    each(s, (t) => t.remove());
    live.delete(el);
  }

  function onScroll(e) {
    const el = scrollerOf(e.target);
    if (!el || (el.closest && el.closest("[data-native-scrollbar]"))) return;
    let s = live.get(el);
    if (!s) { s = { v: null, h: null, timer: 0, raf: 0, dragging: null }; live.set(el, s); }
    cancelAnimationFrame(s.raf);
    place(el); // position first, so the thumb appears in the right place on the very first frame
    show(el);
    scheduleHide(el);
  }

  function onResize() { live.forEach((_, el) => (el.isConnected ? place(el) : forget(el))); }

  // bundle.css hides the native scrollbars only while this attribute is present, so a page that
  // loads the stylesheet without this script keeps its normal scrollbars.
  document.documentElement.setAttribute("data-ds-scrollbars", "");
  // The rules that hide the native scrollbars ship with the script, so pages that link only
  // tokens.css still get them.
  const style = document.createElement("style");
  style.setAttribute("data-ds-scrollbars", "");
  style.textContent =
    "html[data-ds-scrollbars],html[data-ds-scrollbars] :where(*):not([data-native-scrollbar]){scrollbar-width:none}" +
    "html[data-ds-scrollbars]::-webkit-scrollbar,html[data-ds-scrollbars] :where(*):not([data-native-scrollbar])::-webkit-scrollbar{display:none;width:0;height:0}";
  (document.head || document.documentElement).appendChild(style);
  window.addEventListener("scroll", onScroll, { capture: true, passive: true });
  window.addEventListener("resize", onResize, { passive: true });

  const api = {
    /** Re-measure every visible thumb, e.g. after content changes size without scrolling. */
    refresh: onResize,
    /** Remove the listeners and every thumb. */
    destroy() {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize);
      live.forEach((_, el) => forget(el));
      if (layer) layer.remove();
      document.documentElement.removeAttribute("data-ds-scrollbars");
      style.remove();
      window.__dsScrollbars = null;
    },
  };
  window.__dsScrollbars = api;
  return api;
})();

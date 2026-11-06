(() => {
  let lastState = { layer: "off", mounted: false };

  function fallbackLang() {
    try {
      const l = (navigator.language || "en").toLowerCase();
      if (l.startsWith("vi")) return "vi";
      if (l.startsWith("zh")) return "zh";
    } catch (e) {}
    return "en";
  }

  function push(layer, lang) {
    try {
      if (layer == null)  layer  = document.documentElement.getAttribute("data-gapt-layer") || "12m";
      if (lang == null)   lang   = document.documentElement.getAttribute("data-gapt-lang") || fallbackLang();
      document.documentElement.setAttribute("data-gapt-layer", layer || "off");
      document.documentElement.setAttribute("data-gapt-lang", lang || fallbackLang());
    } catch (e) {}
    window.postMessage({ __gapt: 1, type: "cfg", layer: layer || "off", lang: lang || fallbackLang() }, "*");
  }

  function loadAndPush() {
    try {
      chrome.storage.local.get(["gapt_layer", "gapt_lang"], (r) =>
        push(r && r.gapt_layer ? r.gapt_layer : "12m", r && r.gapt_lang ? r.gapt_lang : null)
      );
    } catch (e) {
      push("12m", null);
    }
  }


  window.addEventListener("message", (ev) => {
    const d = ev.data;
    if (d && d.__gapt === 1 && d.type === "state" && d.state) lastState = d.state;
  });

  try {
    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      if (!msg) return;
      if (msg.type === "getState") {
        window.postMessage({ __gapt: 1, type: "ping" }, "*");
        setTimeout(() => sendResponse(lastState), 150);
        return true;
      }
      if (msg.type === "setLayer") {
        push(msg.layer, null);
        setTimeout(() => sendResponse({ ok: true, state: lastState }), 150);
        return true;
      }
    });
    chrome.storage.onChanged.addListener((ch) => {
      if (ch && ch.gapt_layer) push(ch.gapt_layer.newValue || "off", null);
      if (ch && ch.gapt_lang) push(null, ch.gapt_lang.newValue);
    });
  } catch (e) {}

  loadAndPush();

  setTimeout(loadAndPush, 800);
  setTimeout(loadAndPush, 2500);
})();

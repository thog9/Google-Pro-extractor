(() => {
  let sent = "";
  function send(lang) {
    lang = lang || "";
    if (lang === sent) return;
    sent = lang;
    try { document.documentElement.setAttribute("data-gapt-lang", lang); } catch (e) {}
    try { window.postMessage({ __gapt: 1, type: "lang", lang: lang }, "*"); } catch (e) {}
  }

  try {
    chrome.storage.local.get(["gapt_lang"], (r) => {
      if (r && r.gapt_lang) send(r.gapt_lang);
    });
    chrome.storage.onChanged.addListener((ch) => {
      if (ch && ch.gapt_lang) send(ch.gapt_lang.newValue);
    });
  } catch (e) {}
})();

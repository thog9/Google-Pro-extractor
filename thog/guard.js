(() => {
  if (window.__GAPT_GUARD || window.top === window) return; // 只在子框架里跑
  window.__GAPT_GUARD = true;

  const FREE_WORDS = ["free trial", "start your free trial", "免费试用", "US$0.00", "$0.00", "0,00", "€0.00", "won't be charged", "不会向您收费", "不会收费"];
  const PAID_WORDS = ["/mo after", "/month after", "per month after", "立即付款", "pay now", "今日扣款", "charged today"];


  const LANGS = {
    en: {
      ok:   "✅ Free trial detected — this popup is safe to subscribe (still double-check the amount is $0.00)",
      bad:  "❌ No free trial detected — this could charge you for real. Do NOT subscribe, go back and switch plans",
      warn2:"⚠️ Free and paid terms both appear — check the amount yourself before you subscribe",
      wait: "… price terms not found yet (still loading)"
    },
    vi: {
      ok:   "✅ Phát hiện dùng thử miễn phí —— khung này đăng ký an toàn (kiểm tra lại số tiền là $0.00)",
      bad:  "❌ Không thấy dùng thử miễn phí —— có thể bị trừ tiền thật. Đừng đăng ký, quay lại chọn gói khác rồi thử",
      warn2:"⚠️ Có cả điều khoản miễn phí lẫn tính phí —— kiểm tra số tiền rồi mới đăng ký",
      wait: "… chưa tìm thấy điều khoản giá (có thể đang tải)"
    },
    zh: {
      ok:   "✅ 检测到免费试用 —— 此弹窗可以安全订阅（仍请自行核对金额为 $0.00）",
      bad:  "❌ 没有检测到免费试用 —— 可能真的会扣费。先别订阅，退回去换一个方案",
      warn2:"⚠️ 免费和付费条款同时出现 —— 订阅前请自己确认金额",
      wait: "… 还没识别到价格条款（可能在加载中）"
    }
  };
  let uiLang = "en";
  function i18n() { return LANGS[uiLang] || LANGS.en; }

  window.addEventListener("message", (ev) => {
    const d = ev.data;
    if (d && d.__gapt === 1 && d.type === "lang" && LANGS[d.lang]) {
      uiLang = d.lang;
      judge();
    }
  });
  try {
    const attr = document.documentElement.getAttribute("data-gapt-lang");
    if (attr && LANGS[attr]) uiLang = attr;
  } catch (e) {}

  let bar = null;
  function paint(kind, text) {
    if (!document.body) return;
    if (!bar) {
      bar = document.createElement("div");
      bar.style.cssText = "position:fixed;left:0;right:0;top:0;z-index:2147483647;padding:10px 14px;" +
        "font:13px/1.5 -apple-system,Segoe UI,Roboto,'Microsoft YaHei','Segoe UI',sans-serif;text-align:center;font-weight:600;";
      document.body.appendChild(bar);
    }
    bar.style.background = kind === "ok" ? "#1a7f37" : (kind === "bad" ? "#c62828" : "#616161");
    bar.style.color = "#fff";
    bar.textContent = text;
  }

  function judge() {
    const L = i18n();
    let t = "";
    try {
      t = (document.body && document.body.innerText || "").toLowerCase();
    } catch (e) {
      return;
    }
    if (!t || t.length < 5) return;
    const free = FREE_WORDS.some((w) => t.includes(w.toLowerCase()));
    const paid = PAID_WORDS.some((w) => t.includes(w.toLowerCase()));

    if (free && !paid) {
      paint("ok", L.ok);
    } else if (paid && !free) {
      paint("bad", L.bad);
    } else if (free && paid) {
      paint("warn", L.warn2);
    } else {
      paint("warn", L.wait);
    }
  }

  setTimeout(judge, 1200);
  setTimeout(judge, 3000);
  setTimeout(judge, 6000);
  try {
    const mo = new MutationObserver(() => judge());
    document.addEventListener("DOMContentLoaded", () => mo.observe(document.body, { childList: true, subtree: true, characterData: true }));
  } catch (e) {}
})();

const I18N = {
  en: {
    logoSub:   "Google AI Pro Assistant",
    layerHint: "Select a plan, then refresh the page",
    layers: {
      off:   "Disabled",
      "12m": "Plan 1 · 12 months",
      "6m_ss": "Plan 2 · 6 months (SS)",
      "6m":  "Plan 3 · 6 months",
      "6m_2": "Backup plan · 6 months"
    },
    tags: { "12m": "first", "6m_ss": "stack", "6m": "stack", "6m_2": "backup" },
    layerLabels: {
      off: "DISABLED", "12m": "12 months (Plan 1)", "6m_ss": "6 months (Plan 2 · SS)",
      "6m": "6 months (Plan 3)", "6m_2": "6 months (Backup plan)"
    },
    stateWarn:    "Not activated — open one.google.com/plans and refresh",
    stateOk:      "Activated · {layer}",
    subIdNote:    "Subscription stacking",
    howTitle: "How to use",
    steps: [
      { t: "Open Google AI Plans and verify your account",
        d: "Go to <b>one.google.com/plans</b> and confirm the top-left email is the account you want to use." },
      { t: "Select a plan, then refresh the page",
        d: "In this extension choose Plan 1 → 3 (or the Backup plan) → refresh the page. If Google One asks for a billing cycle, pick the <b>Yearly/Annual</b> option. The in-page badge at the bottom-right should show the active plan." },
      { t: "Check the activation status",
        d: "This popup turns <b>green</b> when a plan is active. The bottom-right badge also shows which plan is currently applied." },
      { t: "Review the offer terms and final price on Google Play",
        d: "Click <b>Get discount</b> to open Play checkout. Verify the <b>official offer terms</b> and the <b>final price ($0.00)</b> directly on the checkout page — do not rely on banner colors alone. If you would be charged, do not subscribe: return, switch plan and retry." },
      { t: "Manage your subscription on Google Play",
        d: "When finished, open <b>play.google.com</b> → check your subscription → manage or turn off auto-renewal." }
    ]
  },
  vi: {
    logoSub:   "Công cụ hỗ trợ Google AI Pro",
    layerHint: "Chọn gói muốn áp dụng, sau đó tải lại trang",
    layers: {
      off:   "Tắt tính năng",
      "12m": "Gói 1 · 12 tháng",
      "6m_ss": "Gói 2 · 6 tháng (SS)",
      "6m":  "Gói 3 · 6 tháng",
      "6m_2": "Gói dự phòng · 6 tháng"
    },
    tags: { "12m": "đầu tiên", "6m_ss": "gia hạn", "6m": "gia hạn", "6m_2": "dự phòng" },
    layerLabels: {
      off: "ĐÃ TẮT", "12m": "12 tháng (Gói 1)", "6m_ss": "6 tháng (Gói 2 · SS)",
      "6m": "6 tháng (Gói 3)", "6m_2": "6 tháng (Gói dự phòng)"
    },
    stateWarn:    "Chưa kích hoạt — hãy mở one.google.com/plans rồi tải lại trang",
    stateOk:      "Đã kích hoạt · {layer}",
    subIdNote:    "Gia hạn và cộng dồn thời gian",
    howTitle: "Hướng dẫn sử dụng",
    steps: [
      { t: "Mở trang Google AI Pro, kiểm tra đúng tài khoản",
        d: "Truy cập <b>one.google.com/plans</b>, đảm bảo email ở góc trên bên trái chính là tài khoản bạn muốn dùng." },
      { t: "Chọn gói và tải lại trang",
        d: "Trong tiện ích này chọn Gói 1 → 3 (hoặc Gói dự phòng) → tải lại trang. Nếu Google One hỏi chu kỳ thanh toán, chọn <b>Năm (Annual)</b>. Badge ở góc dưới bên phải sẽ hiện gói đang được áp dụng." },
      { t: "Kiểm tra trạng thái kích hoạt",
        d: "Popup này chuyển <b>xanh</b> khi đã có gói kích hoạt. Badge trên trang (góc dưới bên phải) cũng cho biết gói nào đang áp dụng." },
      { t: "Kiểm tra điều kiện ưu đãi và giá thanh toán trên Google Play",
        d: "Nhấn <b>Get discount</b> để mở cửa sổ thanh toán Play. Xác nhận <b>điều kiện ưu đãi chính thức</b> và <b>giá cuối cùng ($0.00)</b> ngay trên trang thanh toán — không chỉ dựa vào màu banner. Nếu bị tính phí thì không đăng ký: quay lại, đổi gói rồi thử lại." },
      { t: "Quản lý đăng ký trên Google Play",
        d: "Sau khi hoàn tất, mở <b>play.google.com</b> → kiểm tra đăng ký → quản lý hoặc tắt tự động gia hạn." }
    ]
  },
  zh: {
    logoSub:   "AI Pro 辅助工具",
    layerHint: "选择要应用的方案，然后刷新页面",
    layers: {
      off:   "关闭功能",
      "12m": "方案一 · 12 个月",
      "6m_ss": "方案二 · 6 个月（SS）",
      "6m":  "方案三 · 6 个月",
      "6m_2": "备用方案 · 6 个月"
    },
    tags: { "12m": "首订", "6m_ss": "续期叠加", "6m": "续期叠加", "6m_2": "备用" },
    layerLabels: {
      off: "已关闭", "12m": "12 个月（方案一）", "6m_ss": "6 个月（方案二·SS）",
      "6m": "6 个月（方案三）", "6m_2": "6 个月（备用方案）"
    },
    stateWarn:    "未激活 —— 请打开 one.google.com/plans 并刷新",
    stateOk:      "已激活 · {layer}",
    subIdNote:    "订阅期限叠加",
    howTitle: "使用方法",
    steps: [
      { t: "打开 Google AI 方案页，确认账号",
        d: "打开 <b>one.google.com/plans</b>，确认左上角邮箱就是你要使用的账号。" },
      { t: "选择方案并刷新页面",
        d: "在扩展里选方案一至三（或备用方案）→ 刷新页面。如果 Google One 询问账单周期，请选择<b>按年（Annual）</b>。页面右下角的徽标会显示当前方案。" },
      { t: "检查启用状态",
        d: "本弹窗变<b>绿</b>表示方案已启用，页面右下角徽标也会显示当前方案。" },
      { t: "在 Google Play 核对优惠条款与最终价格",
        d: "点 <b>Get discount</b> 打开 Play 结账。请直接在结账页面核对<b>官方优惠条款</b>和<b>最终价格（$0.00）</b> — 不要只看横幅颜色。如果会扣费，先别订阅：回去换个方案再试。" },
      { t: "在 Google Play 管理订阅",
        d: "完成后，打开 <b>play.google.com</b> → 查看订阅 → 管理或关闭自动续订。" }
    ]
  }
};

function detectLang() {
  try {
    const l = (navigator.language || "en").toLowerCase();
    if (l.startsWith("vi")) return "vi";
    if (l.startsWith("zh")) return "zh";
  } catch (e) {}
  return "en";
}

let currentLang = "en";

const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
let savedTheme = "dark";
try { savedTheme = localStorage.getItem("gapt_theme") || "dark"; } catch (e) {}
html.setAttribute("data-theme", savedTheme);

themeBtn.addEventListener("click", () => {
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  try { localStorage.setItem("gapt_theme", next); } catch (e) {}
});

function T(key) {
  const pack = I18N[currentLang] || I18N.en;
  return (pack[key] !== undefined) ? pack[key] : I18N.en[key];
}

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : detectLang();
  document.documentElement.setAttribute("lang", currentLang);
  document.title = "Thog · Google AI Pro Injector";

  document.getElementById("logoSub").textContent  = T("logoSub");
  document.getElementById("layerHint").textContent = T("layerHint");

  document.querySelectorAll("[data-label]").forEach((el) => {
    el.textContent = T("layers")[el.getAttribute("data-label")] || "";
  });
  document.querySelectorAll("[data-tag]").forEach((el) => {
    const v = T("tags")[el.getAttribute("data-tag")];
    el.textContent = v || "";
    el.style.display = v ? "" : "none";
  });

  document.getElementById("howTitle").textContent = T("howTitle");
  const steps = document.getElementById("steps");
  steps.innerHTML = T("steps").map((s, i) => `
    <div class="step">
      <div class="step-head" data-step="${i}">
        <span class="step-num"></span>
        <span class="step-title">${s.t}</span>
        <span class="chev"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></span>
      </div>
      <div class="step-body"><span class="step-txt">${s.d}</span></div>
    </div>`).join("");

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang") === currentLang);
  });

  paintState(lastState, true);
}

const howToggle = document.getElementById("howToggle");
howToggle.addEventListener("click", () => {
  const open = !howToggle.classList.contains("open");
  howToggle.classList.toggle("open", open);
  howToggle.setAttribute("aria-expanded", String(open));
  document.getElementById("steps").hidden = !open;
});

document.getElementById("steps").addEventListener("click", (e) => {
  const head = e.target.closest(".step-head");
  if (head) head.parentElement.classList.toggle("open");
});

const langSwitch = document.getElementById("langSwitch");
langSwitch.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (!btn) return;
  const lang = btn.getAttribute("data-lang");
  applyLang(lang);
  try { chrome.storage.local.set({ gapt_lang: lang }); } catch (err) {}
});

const stateEl  = document.getElementById("state");
const stateTxt = document.getElementById("stateText");
let lastState = null;

function paintState(st, keep) {
  // keep=true (from applyLang): repaint stored state in the new language
  if (st) lastState = st;
  if (!keep) lastState = st || null;
  const layer   = (lastState && lastState.layer) || "off";
  const mounted = !!(lastState && lastState.mounted) && layer !== "off";
  stateEl.className = mounted ? "status-row ok" : "status-row";
  const label = T("layerLabels")[layer] || layer;
  stateTxt.textContent = mounted
    ? T("stateOk").replace("{layer}", label)
    : T("stateWarn");
}

const hasChrome = typeof chrome !== "undefined" && !!(chrome.storage && chrome.tabs);

function queryTab() {
  if (!hasChrome) return;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const t = tabs && tabs[0];
    if (!t) return paintState(null);
    chrome.tabs.sendMessage(t.id, { type: "getState" }, (resp) => {
      if (chrome.runtime.lastError || !resp) return paintState(null);
      paintState(resp);
    });
  });
}

function initLayers(r) {
  applyLang((r && r.gapt_lang) || null);
  const layer = (r && r.gapt_layer) || "off";
  document.querySelectorAll('input[name="layer"]').forEach((el) => {
    el.checked = el.value === layer;
    el.addEventListener("change", () => {
      if (!el.checked || !hasChrome) return;
      chrome.storage.local.set({ gapt_layer: el.value }, () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const t = tabs && tabs[0];
          if (!t) return queryTab();
          chrome.tabs.sendMessage(t.id, { type: "setLayer", layer: el.value }, () => {
            void chrome.runtime.lastError;
            setTimeout(queryTab, 350);
          });
        });
      });
    });
  });
  queryTab();
  setTimeout(queryTab, 800);
}

if (hasChrome) {
  chrome.storage.local.get(["gapt_layer", "gapt_lang"], initLayers);
  setInterval(queryTab, 1500);
} else {
  initLayers({ gapt_lang: detectLang() });
}

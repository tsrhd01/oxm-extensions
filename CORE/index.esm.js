// index.js
var clock = document.createElement("div");
clock.id = "top-left-clock";
clock.setAttribute("aria-live", "polite");
clock.style.position = "fixed";
clock.style.top = "0";
clock.style.left = "0";
clock.style.padding = "6px 10px";
clock.style.fontFamily = "system-ui, sans-serif";
clock.style.fontSize = "14px";
clock.style.background = "rgba(0,0,0,0.6)";
clock.style.color = "white";
clock.style.borderBottomRightRadius = "8px";
clock.style.zIndex = "9999";
clock.style.userSelect = "none";
clock.onclick = function() {
  window.oxm.openSeachBar();
};
document.body.appendChild(clock);
function two(n) {
  return n < 10 ? "0" + n : String(n);
}
function updateClock() {
  const now2 = /* @__PURE__ */ new Date();
  const hh = two(now2.getHours());
  const mm = two(now2.getMinutes());
  clock.textContent = `${hh}:${mm}`;
}
updateClock();
var now = /* @__PURE__ */ new Date();
var msToNextMinute = (60 - now.getSeconds()) * 1e3 - now.getMilliseconds();
var alignTimeout = setTimeout(() => {
  updateClock();
  const intervalId = setInterval(updateClock, 60 * 1e3);
  window._topLeftClockInterval = intervalId;
}, msToNextMinute);
window._topLeftClockAlignTimeout = alignTimeout;

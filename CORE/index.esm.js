// btnClick.js
var clock = document.createElement("div");
clock.id = "btn_click";
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
clock.textContent = "Search";
clock.onclick = () => {
  window.oxm.openSeachBar();
};

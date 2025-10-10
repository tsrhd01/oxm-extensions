// btnClick.js
var observer = new MutationObserver(() => {
  const elm = document.getElementById("daily_note_svg");
  if (elm) {
    runFunction();
    observer.disconnect();
  }
});
observer.observe(document.body, { childList: true, subtree: true });
function runFunction() {
  console.log("Running after element loaded");
  window.oxm.openSearchBar();
}

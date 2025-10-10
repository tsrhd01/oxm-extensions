// btnClick.js
var dom = document.createElement("div");
dom.innerHTML = `
  <div  class="count_container" >
    <div class="total_count" id="the_x_btn">Hello World</div>
  </div>
`;
dom.id = "top-left-clock";
dom.setAttribute("aria-live", "polite");
dom.style.position = "fixed";
dom.style.top = "300px";
dom.style.left = "0";
dom.style.padding = "6px 10px";
dom.style.fontFamily = "system-ui, sans-serif";
dom.style.fontSize = "14px";
dom.style.background = "rgba(0,0,0,0.6)";
dom.style.color = "white";
dom.style.borderBottomRightRadius = "8px";
dom.style.zIndex = "9999";
console.log(dom);
dom.querySelector("#the_x_btn").addEventListener("click", () => {
  console.log("hello");
});
document.body.appendChild(dom);

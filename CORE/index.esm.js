// btnClick.js
var dom = document.createElement("div");
dom.innerHTML = `
  <div class="count_container" style="position: fixed, top:0, left:0, z-index: 99999;">
    <div class="total_count" id="the_x_btn">Hello World</div>
  </div>
`;
function bust() {
  console.log("hello");
}
dom.querySelector("#the_x_btn").addEventListener("click", () => {
  if (typeof getPos === "function") {
    bust();
  }
});
document.body.appendChild(dom);

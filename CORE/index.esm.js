// btnClick.js
var dom = document.createElement("div");
dom.innerHTML = `
  <div onclick="bust()" class="count_container" style="position: fixed, top:0, left:0, z-index: 99999;">
    <div class="total_count" id="the_x_btn">Hello World</div>
  </div>
`;
document.body.appendChild(dom);





const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");
const btnHtml = document.getElementById('btnhtml');
const btnCss = document.getElementById('btncss');
const btnJs = document.getElementById('btnjs');


// Hide all inputs
function hideAllInputs() {
  inp1.style.display = "none";
  inp2.style.display = "none";
  inp3.style.display = "none";
}

// Reset all button colors
function resetButtons() {
  btnHtml.style.backgroundColor = "";
  btnCss.style.backgroundColor = "";
  btnJs.style.backgroundColor = "";
}

// HTML Click
btnHtml.addEventListener("click", () => {
  hideAllInputs();
  resetButtons();

  inp1.style.display = "block";
  btnHtml.style.backgroundColor = "#EE3435";
});

// CSS Click
btnCss.addEventListener("click", () => {
  hideAllInputs();
  resetButtons();

  inp2.style.display = "block";
  btnCss.style.backgroundColor = "#0491DC";
});

// JS Click
btnJs.addEventListener("click", () => {
  hideAllInputs();
  resetButtons();

  inp3.style.display = "block";
  btnJs.style.backgroundColor = "#EA9C2F";
});





//  console.log("hello")
//   let output = document.querySelector("#outou");
//   let allinput = document.querySelectorAll("#left #arop ")
//   let htmlcode, csscode, jscode = "";
//   allinput.forEach((el, index) => {
//     el.addEventListener("keyup", () => {
//       if (index == 0) {
//         htmlcode = el.value;
//       }
//       if (index == 1) {
//         csscode = el.value;
//       }
//       if (index == 1) {
//         jscode = el.value;
//       }
//       output.contentDocument.body.innerHTML = htmlcode;
//       output.contentDocument.head.innerHTML = `<style>${csscode}</style>`;
//       output.contentWindow.eval(jscode);
//     })
//   })


const htmlArea = document.getElementById("htmlCode");
const cssArea = document.getElementById("cssCode");
const jsArea = document.getElementById("jsCode");
const output = document.getElementById("outou");

function updateOutput() {
  output.srcdoc = `
    ${htmlArea.value}
    <style>${cssArea.value}</style>
    <script>${jsArea.value}<\/script>
  `;
}

htmlArea.addEventListener("keyup", updateOutput);
cssArea.addEventListener("keyup", updateOutput);
jsArea.addEventListener("keyup", updateOutput);
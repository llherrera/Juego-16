const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");
const btn10 = document.querySelector("#btn-10");
const btn11 = document.querySelector("#btn-11");
const btn12 = document.querySelector("#btn-12");
const btn13 = document.querySelector("#btn-13");
const btn14 = document.querySelector("#btn-14");
const btn15 = document.querySelector("#btn-15");
const btnV = document.querySelector("#btn-void");

const btns = [[btn1,btn2,btn3,btn4],
              [btn5,btn6,btn7,btn8],
              [btn9,btn10,btn11,btn12],
              [btn13,btn14,btn15,btnV]]

btns.forEach((btn, indice) => {
  btn.forEach((b, index) => {
    b.addEventListener('click', () => {
      if (index == 0 && indice == 0) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
      }else
      if (index == 0 && indice == 3) {
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
      }else
      if (index == 3 && indice == 0) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }else
      if (index == 3 && indice == 3) {
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }else
      if (index == 0 && indice > 0 && indice < 3) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
      }else
      if (index == 3 && indice > 0 && indice < 3) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }else
      if (indice == 0 && index > 0 && index < 3) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }else
      if (indice == 3 && index > 0 && index < 3) {
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }else
      if (index > 0 && index < 3 && indice > 0 && indice < 3) {
        if (btns[indice + 1][index].textContent == '') cambiar(btns[indice][index], btns[indice + 1][index]);
        if (btns[indice - 1][index].textContent == '') cambiar(btns[indice][index], btns[indice - 1][index]);
        if (btns[indice][index + 1].textContent == '') cambiar(btns[indice][index], btns[indice][index + 1]);
        if (btns[indice][index - 1].textContent == '') cambiar(btns[indice][index], btns[indice][index - 1]);
      }
    })
  })
})

const cambiar = (btnO, btnD) => {
  btnD.textContent = btnO.textContent;
  btnO.textContent = '';
}
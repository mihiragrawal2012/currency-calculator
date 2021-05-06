let btnGo = document.querySelector("#btn1");
let amount = document.querySelector("#text1");
let rate = document.querySelector("#text2");
let result = document.querySelector("#result");
btnGo.addEventListener('click', () => {
  result.innerText = "The total amount is " + rate.value * amount.value + " in currency Y";
});

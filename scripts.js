const generate = document.getElementById("generate");
const lookAlike = document.getElementById("look-alike");
const blue = document.getElementById("blue");
const light = document.getElementById("light");
const blonde = document.getElementById("blonde");
const addToCart = document.getElementsByClassName("add-to-cart");

let wbb = [
  "./images/wbb1.jpg",
  "./images/wbb2.jpg",
  "./images/wbb3.jpg",
  // "./images/wbb4.jpg",
  // "./images/wbb5.jpg",
  // "./images/wbb6.jpg",
];
let previous = lookAlike.src;

addToCart.onclick = function (e) {
  console.log("yes");
};

generate.onclick = function (e) {
  lookAlike.src = pickRandom(wbb);
  // lookAlike.innerHTML = `<img src="${pickRandom(wbb)}" height="300">`;
  // blue.innerHTML = `<input type="radio" name="eye" id="blue" checked="checked" />`;
  blue.checked = "checked";
  light.checked = "checked";
  blonde.checked = "checked";
};

function pickRandom(list) {
  let next = list[Math.floor(Math.random() * list.length)];
  while (next === previous) {
    next = list[Math.floor(Math.random() * list.length)];
  }
  previous = next;
  console.log(lookAlike.src);
  return next;
}

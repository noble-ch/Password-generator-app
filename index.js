const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let pswdEl = document.getElementById("pswd-el");
let randomindex;
function pswdGenerator() {
  let randompswd = "";
  for (let i = 0; i < 10; i++) {
    randomindex = Math.floor(Math.random() * characters.length);
    randompswd += characters[randomindex];
  }
  pswdEl.textContent = randompswd;
}

let container = document.querySelector(".container");
let h1 = document.querySelector("h1");
let moto = document.querySelector(".moto");
let themeIcon = document.querySelector(".material-symbols-outlined");
let body = document.querySelector("body");
let greenh1 = document.querySelector(".green-h1");
click = 0;
function themeMode() {
  click += 1;
  if (click % 2 == 0) {
    container.style.background = "#0c3042";
    h1.style.color = "whitesmoke";
    moto.style.color = "whitesmoke";
    themeIcon.textContent = "dark_mode";
    themeIcon.style.color = "whitesmoke";
    body.style.backgroundColor = "#1a1a1a";
  } else {
    container.style.background = "#dbebd8";
    h1.style.color = "#0c3042";
    moto.style.color = "#0c3042";
    themeIcon.textContent = "sunny";
    themeIcon.style.color = "#0c3042";
    body.style.backgroundColor = "#999";
    greenh1.style.color = "#00c264";
  }
}

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", onClick);

function onClick() {
  container.style.backgroundColor = `rgb(${getRandomColor()})`;
}

function getRandomColor() {
  const arr = [];
  for (let index = 0; index < 3; index++) {
    const randomNum = Math.floor(Math.random() * 255);
    arr.push(randomNum);
  }
  return arr;
}

console.log();

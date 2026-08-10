const main = document.querySelector("main");
const btn = document.querySelector("button");

const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
const overlay = document.querySelector(".overlay");
const parent = document.querySelector(".parent");

const box = document.createElement("div");
box.classList.add("box");
let interval;
let timeout;
let time = 0;
let count = 0;
let timeLeft;
let state = "idle";
let click = true;

let setIntervalFunc = () => {
  interval = setInterval(() => {
    randomBox();
    time += 1;
    timer.textContent = `Timer : ${time}`;
  }, 1000);
};

let setTimeoutFunc = (t) => {
  timeout = setTimeout(() => {
    btn.textContent = "Re-Start";
    state = "end";
    clearInterval(interval);
    overlay.style.display = "block";
    parent.classList.add("opacity");
  }, t);
};

let randomBox = () => {
  main.append(box);
  box.style.backgroundColor = randomColor();
  let mainW = main.clientWidth - (box.offsetWidth + 10);
  let mainH = main.clientHeight - (box.offsetHeight + 10);
  let rX = Math.random() * mainW;
  let rY = Math.random() * mainH;
  box.style.top = `${rY}px`;
  box.style.left = `${rX}px`;
};

let randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", () => {
  if (state === "idle" || state === "end") {
    time = 0;
    count = 0;
    score.textContent = `Score : ${count}`;
    btn.textContent = "Pause";
    state = "running";
    timer.textContent = `Timer : 0`;
    setIntervalFunc();
    setTimeoutFunc(10000);
    overlay.style.display = "none";
    parent.classList.remove("opacity");
  } else if (state === "running") {
    btn.textContent = "Resume";
    state = "paused";
    clearInterval(interval);
    clearTimeout(timeout);
    timeLeft = (10 - time) * 1000;
  } else if (state === "paused") {
    btn.textContent = "Pause";
    state = "running";
    setIntervalFunc();
    setTimeoutFunc(timeLeft);
  }
});

box.addEventListener("click", () => {
  if (state === "running" || state === "ending") {
    if (click) {
      count += 1;
      click = false;
      setTimeout(() => {
        click = true;
      }, 900);
    }
  }
  score.textContent = `Score : ${count}`;
});

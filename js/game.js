const q = questions;
let count = 0;
const counter = document.querySelector(".counter");
const ans1 = document.querySelector("#option1");
const ans2 = document.querySelector("#option2");
const screen = document.querySelector("#screen");
const options = document.querySelector(".options");
let randomnumber = Math.floor(Math.random() * q.length);
let temp = randomnumber;
const slider = document.querySelector("#timeSlider");

counter.innerText = count;
ans1.innerText = q[randomnumber].ans1;
ans2.innerText = q[randomnumber].ans2;
screen.innerText = q[randomnumber].q;

function randomize() {
  randomnumber = Math.floor(Math.random() * q.length);
  while (randomnumber == temp) {
    randomnumber = Math.floor(Math.random() * q.length);
  }
  temp = randomnumber;
}

function ifTrue() {
  count++;
  counter.innerText = count;
  randomize();
  ans1.innerText = q[randomnumber].ans1;
  ans2.innerText = q[randomnumber].ans2;
  screen.innerText = q[randomnumber].q;
  slider.classList.remove("round-time-bar");
  slider.offsetWidth;
  slider.classList.add("round-time-bar");
  clearTimeout(myVar);
  myTimer();
  document.title = "חשוב מהר| ניקוד: " + counter.innerText;
}

function isFalse() {
  clearTimeout(myVar);

  if (
    confirm(
      "Game Over! your score is: " +
        counter.innerText +
        ". do you want to play again?"
    )
  ) {
    ifTrue();
    count = 0;
    counter.innerText = count;
    document.title = "חשוב מהר| ניקוד: " + counter.innerText;
  } else {
    window.location.pathname = "/think-fast/";
  }
}
options.addEventListener("click", (e) => {
  if (e.target.id == q[randomnumber].true && e.target.value != null) {
    ifTrue();
  } else if (e.target.id != q[randomnumber].true && e.target.value != null) {
    isFalse();
  }
});
function myTimer() {
  myVar = setTimeout(isFalse, 1500);
}
myTimer();

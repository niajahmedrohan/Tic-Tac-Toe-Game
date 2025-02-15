let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#resetbtn");
let newgame = document.querySelector("#newgame");
let winmsg = document.querySelector(".win-msg");
let msg = document.querySelector("#msg");

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Clicked");
    if (turn === true) {
      box.innerText = "0";
      box.style.color = "#03045e";

      turn = false;
    } else {
      box.innerText = "X";
      box.style.color = "#9a031e";
      turn = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congralations, Winner ${winner}`;
  winmsg.classList.remove("hide");
  newgame.classList.remove("hide");
  resetbtn.classList.add("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    let box1 = boxes[pattern[0]];
    let box2 = boxes[pattern[1]];
    let box3 = boxes[pattern[2]];
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        boxes[pattern[0]].style.backgroundColor= "#03045e";
        boxes[pattern[1]].style.backgroundColor= "#03045e";
        boxes[pattern[2]].style.backgroundColor= "#03045e";

        boxes[pattern[0]].style.color= "#ffffff";
        boxes[pattern[1]].style.color= "#ffffff";
        boxes[pattern[2]].style.color= "#ffffff";
        console.log("winner", pos1);
        showWinner(pos1);
        return true;
      }
    }
  }
};

const resetgame = () => {
  turn = true;
  enableBoxes();
  winmsg.classList.add("hide");
  newgame.classList.add("hide");
  resetbtn.classList.remove("hide");
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.style.color="#03045e";
    box.style.backgroundColor="#ffffff"
    box.disabled = false;
    box.innerText = "";
  }
};

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

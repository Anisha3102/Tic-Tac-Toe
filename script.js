let sqs = document.querySelectorAll(".sq");
let msg = document.querySelector("#text");
let reset = document.querySelector("#reset");
let gifs = document.querySelectorAll("img");
let popup = document.querySelector("#win");

let turn = "O";
let game = "not-over";

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

sqs.forEach((sq) => {
  sq.addEventListener("click", () => {
    if (game != "over") {
      if (turn == "X") {
        if (sq.innerText == "") {
          sq.innerText = "X";
          turn = "O";
          msg.innerText = "O Turns";
        }
      } else {
        if (sq.innerText == "") {
          sq.innerText = "O";
          turn = "X";
          msg.innerText = "X Turns";
        }
      }
    }
    checkTie();
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1val = sqs[pattern[0]].innerText;
    let pos2val = sqs[pattern[1]].innerText;
    let pos3val = sqs[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        showWinner(pos1val);
      }
    } else {
      continue;
    }
  }
};

const showWinner = (val) => {
  msg.innerText = val + " is winner";
  game = "over";
  gifs.forEach((gif) => {
    gif.classList.remove("hide");
  });
  popup.classList.replace("win-hide", "win-show");
};

const checkTie = () => {
  pos1val = sqs[0].innerText;
  pos2val = sqs[1].innerText;
  pos3val = sqs[2].innerText;
  pos4val = sqs[3].innerText;
  pos5val = sqs[4].innerText;
  pos6val = sqs[5].innerText;
  pos7val = sqs[6].innerText;
  pos8val = sqs[7].innerText;
  pos9val = sqs[8].innerText;

  if (
    pos1val != "" &&
    pos2val != "" &&
    pos3val != "" &&
    pos4val != "" &&
    pos5val != "" &&
    pos6val != "" &&
    pos7val != "" &&
    pos8val != "" &&
    pos9val != ""
  ) {
    msg.innerText = "Game is Tied";
  }
};

reset.addEventListener("click", () => {
  turn = "O";
  game = "not-over";
  for (let sq of sqs) {
    sq.innerText = "";
  }
  gifs.forEach((gif) => {
    gif.classList.add("hide");
  });
  msg.innerText = "O turns";
  popup.classList.replace("win-show", "win-hide");
});

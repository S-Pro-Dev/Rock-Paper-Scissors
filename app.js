let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userBoard = document.querySelector("#user-board");
const computerBoard = document.querySelector("#computer-board");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomInd = Math.floor(Math.random() * 3);
  return options[randomInd];
};

const draw = () => {
  msg.innerText = "Game was draw. PLay again.";
  msg.style.color = "#FFD43B";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userBoard.innerText = ++userScore;
    msg.innerHTML = `You Win! ${userChoice} beats ${computerChoice}`;
    msg.style.color = "#2CA941";
  } else {
    computerBoard.innerText = ++comScore; // Fix typo here
    msg.innerHTML = `You Lose! ${computerChoice} beats ${userChoice}`;
    msg.style.color = "#FC2121";
  }
};

const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();
  //   console.log(computerChoice);

  if (userChoice === computerChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice); // Pass userWin as the first argument
  }
};

choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});

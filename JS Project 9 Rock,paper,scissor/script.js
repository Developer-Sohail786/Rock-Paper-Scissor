let userscore = 0;
let compscore = 0;
let game_draw = 0;
// for github purpose only
let player=1;
let player1=2
let player3="Sohail"
// ends here
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const gamedrawp = document.querySelector("#game-draw");
const Gencomp = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};
const Gamedraw = () => {
  game_draw++;
  gamedrawp.innerText = game_draw;
  console.log("Game was Draw ");
  msg.innerText = "Game was Draw 😐 ";
  msg.style.backgroundColor = "#081b31";
};
const playGame = (userChoice) => {
  console.log("User choice:", userChoice);
  const comp = Gencomp();
  console.log("Computer choice:", comp);
  if (userChoice === comp) {
    Gamedraw();
  } else if (
    (userChoice === "Rock" && comp === "Scissors") ||
    (userChoice === "Scissors" && comp === "Paper") ||
    (userChoice === "Paper" && comp === "Rock")
  ) {
    userscore++;
    userscorep.innerText = userscore;
    msg.innerText = `You win 😎, ${userChoice} beats ${comp}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorep.innerText = compscore;
    console.log("Computer Win");
    msg.innerText = `You Lose😞,${comp} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.fontSize = "2rem";
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

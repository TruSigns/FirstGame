//functions

const game = () => {
  let pScore = 0;
  let cScore = 0;
  //start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //start match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playHands = document.querySelector(".player-hand");
    const computerHands = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((options) => {
      options.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //call for compare hands
          compareHands(this.textContent, computerChoice);

          //update imagines
          playHands.src = `./Icons/${this.textContent}.png`;
          computerHands.src = `./Icons/${computerChoice}.png`;
        }, 2000);

        //animation
        playHands.style.animation = "shakePlayer 2s ease";
        computerHands.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //keeping up with score

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  ///Comparsion

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie...";
      return;
    }
    //Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  ///is call all inner function
  startGame();
  playMatch();
};

///start the game function

game();

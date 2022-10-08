
const players = (markChoose, playerTurn) => {
  const mark = markChoose;
  const boxsClicked = [];
  const turn = playerTurn;

  return {mark, boxsClicked, turn}
};


const Gameboard = (() => {

  const box = document.createElement("div");
  const gameboard = [box, box, box, box, box, box, box, box, box];
  const boxsContent = document.querySelector(".boxsContent");
  const playerO = document.querySelector(".playerO")
  const playerX = document.querySelector(".playerX")

  gameboard.forEach((box, index) => {
    box.classList.remove("box-" + (index - 1));
    box.classList.add("box", "box-" + index);
    boxsContent.appendChild(box.cloneNode(true));
  });


  const changeStatus = (boxClass) => {
    const boxToChange = document.querySelector("." + boxClass);
    if(boxToChange.classList.contains('clicked')) return
    if (player1.turn) {
      boxToChange.innerHTML = player1.mark;
      boxToChange.classList.add('clicked')
      player1.turn = false;
      player1.boxsClicked[boxClass[4]] = 1;
      playerO.classList.add('markSelected')
      playerX.classList.remove('markSelected')
      askPlayerWon(player1)
    } else {
      boxToChange.innerHTML = player2.mark;;
      boxToChange.classList.add('clicked')
      player1.turn = true;
      player2.boxsClicked[boxClass[4]] = 1;
      playerX.classList.add('markSelected')
      playerO.classList.remove('markSelected')
      askPlayerWon(player2)
    }
  };

  const askPlayerWon = (player) => {
    if (player.boxsClicked[0] && player.boxsClicked[1] && player.boxsClicked[2] ||
        player.boxsClicked[3] && player.boxsClicked[4] && player.boxsClicked[5] ||
        player.boxsClicked[6] && player.boxsClicked[7] && player.boxsClicked[8] ||
        player.boxsClicked[0] && player.boxsClicked[3] && player.boxsClicked[6] ||
        player.boxsClicked[1] && player.boxsClicked[4] && player.boxsClicked[7] ||
        player.boxsClicked[2] && player.boxsClicked[5] && player.boxsClicked[8] ||
        player.boxsClicked[0] && player.boxsClicked[4] && player.boxsClicked[8] ||
        player.boxsClicked[2] && player.boxsClicked[4] && player.boxsClicked[6]   
      ){
      playerWon(player)
    }
  }

  const playerWon = (player) =>{
    const winner = document.querySelector('.winner')
    winner.innerHTML = `Congratulations Player ${player.mark}, you won...!!!`
  }


  const boxs = document.querySelectorAll(".box");
  boxs.forEach((boxToChange) =>
    boxToChange.addEventListener("click", () => {
      changeStatus(boxToChange.classList[1]);
    })
  );
  
  const player1 = players('X', true)
  const player2 = players('O', false)

})();



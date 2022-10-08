const Gameboard = (() => {
  const box = document.createElement("div");
  const gameboard = [box, box, box, box, box, box, box, box, box];
  const boxsContent = document.querySelector(".boxsContent");

  gameboard.forEach((box, index) => {
    box.classList.remove("box-" + (index - 1));
    box.classList.add("box", "box-" + index);
    boxsContent.appendChild(box.cloneNode(true));
  });
  const boxs = document.querySelectorAll(".box");
  boxs.forEach((boxToChange) =>
    boxToChange.addEventListener("click", () => {
      changeStatus(boxToChange.classList[1]);
    })
  );
})();

let player1Trun = true

const changeStatus = (boxClass) => {
  const boxToChange = document.querySelector("." + boxClass);
  if(boxToChange.classList.contains('clicked')) return
  if (player1Trun) {
    boxToChange.innerHTML = "X";
    boxToChange.classList.add('clicked')
    player1Trun = false;
  } else {
    boxToChange.innerHTML = "O";
    boxToChange.classList.add('clicked')
    player1Trun = true;
  }
};

const players = () => {
  const simbol = "X";
  const boxsClicked = [];
  const turn = false;

  return {simbol, boxsClicked, turn}
};

/* to create a game of snake water and gun. 
The game should ask you to enter S, w, G.
The computer should be able to randdomly generate S, W, G and declare win or loss using alert 
.
Use confirm and prtompt wherever required.
*/
let player = prompt("Enter S P R");
let computer = Math.floor(Math.random() * 3);
let computer1 = ["S", "P", "R"][computer];

const match = (computer1, player) => {
  if (computer1 === player) return "Nobody";
  else if (computer1 === "S" && player === "R") {
    return "player";
  } else if (computer1 === "p" && player === "S") {
    return "player";
  } else if (computer1 === "R" && player === "S") {
    return "computer1";
  } else if (computer1 === "R" && player === "P") {
    return "computer1";
  } else if (computer1 === "R" && player === "S") {
    return "computer1";
  } else if (computer1 === "p" && player === "S") {
    return "player";
  }
};
let result = match(computer1, player);

console.log(
  `computer1:${computer1} player:${player} The winner is : ${result}`
);

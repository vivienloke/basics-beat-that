// Roll Dice helper function
var generateDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// Some global variables required
var currentMode = "P ONE ROLL";
var pOneDice = [];
var pTwoDice = [];
var numPOne;
var numPTwo;

// MAIN FUNCTION
var main = function (input) {
  //PLAYER ONE PLEASE
  // PLAYER ONE'S TURN TO ROLL DICE
  if (currentMode == "P ONE ROLL") {
    var oneCounter = 0;
    // INCLUDE THE LOOPIES HERE
    while (oneCounter < 2) {
      var valueDice = generateDice();
      pOneDice.push(valueDice);
      oneCounter += 1;
      console.log(`DICE ROLLED BY COM: ${valueDice}`);
    }
    currentMode = "P ONE CHOOSE";
    return `Player One has rolled ${pOneDice[0]} and ${pOneDice[1]}. Pls choose Dice 1 or Dice 2 as first numeral.`;
  }
  // PLAYER ONE'S TURN TO CHOOSE DICE 1
  if (currentMode == "P ONE CHOOSE" && input == 1) {
    currentMode = "P TWO ROLL";
    numPOne = `${pOneDice[0]}${pOneDice[1]}`;
    return `Player One chose Dice 1, and the number is ${pOneDice[0]}${pOneDice[1]}. <br><br>Player Two's turn to roll dice.`;
  }
  // PLAYER ONE'S TURN TO CHOOSE DICE 2
  if (currentMode == "P ONE CHOOSE" && input == 2) {
    currentMode = "P TWO ROLL";
    numPOne = `${pOneDice[1]}${pOneDice[0]}`;
    return `Player One chose Dice 1, and the number is ${pOneDice[1]}${pOneDice[0]}. <br><br>Player Two's turn to roll dice.`;
  }
  // OTHER REJECTED INPUTS
  else if (currentMode == "P TWO CHOOSE" && input != 2 && input != 1) {
    return `Please enter '1' or '2' to choose dice.`;
  }

  //PLAYER TWO PLEASE
  // PLAYER TWO'S TURN TO ROLL DICE
  if (currentMode == "P TWO ROLL") {
    var twoCounter = 0;
    // INCLUDE THE LOOPIES HERE
    while (twoCounter < 2) {
      valueDice = generateDice();
      pTwoDice.push(valueDice);
      twoCounter += 1;
      console.log(`DICE ROLLED BY COM: ${valueDice}`);
    }
    currentMode = "P TWO CHOOSE";
    return `Player Two has rolled ${pTwoDice[0]} and ${pTwoDice[1]}. Pls choose Dice 1 or Dice 2 as first numeral.`;
  }
  // PLAYER TWO'S TURN TO CHOOSE DICE 1
  if (currentMode == "P TWO CHOOSE" && input == 1) {
    currentMode = "P ONE ROLL";
    numPTwo = `${pTwoDice[0]}${pTwoDice[1]}`;
    return `Player Two chose Dice 1 and the number is ${pTwoDice[0]}${pTwoDice[1]}. <br><br>Player One: ${numPOne}.<br>Player Two: ${numPTwo}. <br><br>Who won? :)`;
  }
  // PLAYER TWO'S TURN TO CHOOSE DICE 2
  if (currentMode == "P TWO CHOOSE" && input == 2) {
    currentMode = "P ONE ROLL";
    numPTwo = `${pTwoDice[1]}${pTwoDice[0]}`;
    return `Player Two chose Dice 2 and the number is ${pTwoDice[1]}${pTwoDice[0]}. <br><br>Player One: ${numPOne}.<br>Player Two: ${numPTwo}. <br><br>Who won? :)`;
  }

  // OTHER REJECTED INPUTS
  else if (currentMode == "P TWO CHOOSE" && input != 2 && input != 1) {
    return `Please enter '1' or '2' to choose dice.`;
  }
};

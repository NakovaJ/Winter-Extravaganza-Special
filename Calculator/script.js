console.log("Calculator in progress...");

let numberOne = [];
let operator = "";
let calculatorDisplay = [];
let breakPointIndex;
let beepOnce = document.getElementById("beep");

let printer = document.querySelector("h1");
let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn7 = document.getElementById("seven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");
let btn0 = document.getElementById("zero");
let btnSum = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let btnMultiply = document.getElementById("multiply");
let btnDivide = document.getElementById("divide");
let btnRemain = document.getElementById("remain");
let btnCe = document.getElementById("delete");
let btnEquals = document.getElementById("equal");
let btnClear = document.getElementById("clear");
let btnBrackets = document.getElementById("brackets");
let btnDot = document.getElementById("dot");
let btnPlusMinus = document.getElementById("plusMinus");
let checkerIfSoundOn = false;

btnBrackets.addEventListener("click", function () {
  if (checkerIfSoundOn === false) {
    beepOnce.play();
    checkerIfSoundOn = true;
  } else {
    checkerIfSoundOn === true;
    checkerIfSoundOn = false;
  }
});

btn1.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(1);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});

btn2.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(2);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn3.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(3);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn4.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(4);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn5.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(5);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn6.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(6);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn7.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(7);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn8.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(8);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn9.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(9);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] != ".") {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btn0.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    calculatorDisplay.push(0);
    if (calculatorDisplay[0] === 0 && calculatorDisplay[1] === 0) {
      calculatorDisplay.shift();
    }
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
    printer.innerText = "error message";
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnDot.addEventListener("click", function () {
  if (calculatorDisplay.length < 15) {
    if (calculatorDisplay.length == 0) {
      printer.innerText += "0.";
      calculatorDisplay.push(0, ".");
    } else if (calculatorDisplay.includes(".")) {
    } else {
      printer.innerText += ".";
      calculatorDisplay.push(".");
    }
  } else {
    printer.innerText = "error message";
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});

btnClear.addEventListener("click", function () {
  printer.innerText = "";
  firstNumber = 0;
  secondNumber = 0;
  calculatorDisplay = [];
  numberOne = [];

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnCe.addEventListener("click", function () {
  calculatorDisplay.pop();
  printer.innerText = calculatorDisplay.join("");

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnSum.addEventListener("click", function () {
  if (numberOne.length > 0) {
  } else {
    if (calculatorDisplay.length > 0) {
      printer.innerText += "+";
      operator = "+";
      numberOne = calculatorDisplay;
      calculatorDisplay = [];
    }
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnMinus.addEventListener("click", function () {
  if (numberOne.length > 0) {
  } else {
    if (calculatorDisplay.length > 0) {
      printer.innerText += "-";
      operator = "-";
      numberOne = calculatorDisplay;
      calculatorDisplay = [];
    }
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnMultiply.addEventListener("click", function () {
  if (numberOne.length > 0) {
  } else {
    if (calculatorDisplay.length > 0) {
      printer.innerText += "*";
      operator = "*";
      numberOne = calculatorDisplay;
      calculatorDisplay = [];
    }
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnDivide.addEventListener("click", function () {
  if (numberOne.length > 0) {
  } else {
    if (calculatorDisplay.length > 0) {
      printer.innerText += "/";
      operator = "/";
      numberOne = calculatorDisplay;
      calculatorDisplay = [];
    }
  }
  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnRemain.addEventListener("click", function () {
  if (numberOne.length > 0) {
  } else {
    if (calculatorDisplay.length > 0) {
      printer.innerText += "%";
      operator = "%";
      numberOne = calculatorDisplay;
      calculatorDisplay = [];
    }
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});
btnEquals.addEventListener("click", function () {
  printer.innerText = "";
  let firstNumber = parseFloat(numberOne.join(""));
  let secondNumber = parseFloat(calculatorDisplay.join(""));
  let result = 0;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      printer.innerText = result;
      break;
    case "-":
      result = firstNumber - secondNumber;
      printer.innerText = result;
      break;

    case "*":
      result = firstNumber * secondNumber;
      printer.innerText = result;
      break;
    case "/":
      if (secondNumber === 0) {
        printer.innerText = "error message";
      } else {
        result = firstNumber / secondNumber;
        printer.innerText = result;
      }

      break;
    case "%":
      if (secondNumber === 0) {
        printer.innerText = "error message";
      } else {
        result = firstNumber % secondNumber;
        printer.innerText = result;
      }

      break;
  }
  firstNumber = 0;
  secondNumber = 0;
  calculatorDisplay = [];
  numberOne = [];
  operator = "";

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});

btnPlusMinus.addEventListener("click", function () {
  if (parseFloat(calculatorDisplay.join("")) > 0) {
    calculatorDisplay.unshift("-");
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else if (parseFloat(calculatorDisplay.join("")) < 0) {
    calculatorDisplay.shift();
    printer.innerText = `${calculatorDisplay.join("")}`;
  } else {
  }

  if (checkerIfSoundOn === true) {
    beepOnce.play();
  }
});

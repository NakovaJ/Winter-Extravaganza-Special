console.log("Connected...");

// Number to Words
// Create a web page that can convert a number entered in an input in digits to the same number in words. The result should be printed on the page. The converter should convert to at least a trillion.
// Ex:	Input: 0		Result: zero
// Input: 13		Result: thirteen
// Input: 345		Result: three hundred forty-five
// 	Input: 20056	Result: twenty thousand fifty-six
let printerConverter = document.getElementsByTagName("h3")[0];

let inputNumber = document.querySelector("input");
let btnConverter = document.querySelector("button");

function switchOneToNine(number, printer) {
  switch (number) {
    case 1:
      printer.innerText += " one";
      break;
    case 2:
      printer.innerText += " two";
      break;
    case 3:
      printer.innerText += " three";
      break;
    case 4:
      printer.innerText += " four";
      break;
    case 5:
      printer.innerText += " five";
      break;
    case 6:
      printer.innerText += " six";
      break;
    case 7:
      printer.innerText += " seven";
      break;
    case 8:
      printer.innerText += " eight";
      break;
    case 9:
      printer.innerText += " nine";
      break;
  }
}

function switchTenToNineteen(number, printer) {
  switch (number) {
    case 0:
      printer.innerText += " ten";
      break;
    case 1:
      printer.innerText += " eleven";
      break;
    case 2:
      printer.innerText += " twelve";
      break;
    case 3:
      printer.innerText += " thirteen";
      break;
    case 4:
      printer.innerText += " fourteen";
      break;
    case 5:
      printer.innerText += " fifteen";
      break;
    case 6:
      printer.innerText += " sixteen";
      break;
    case 7:
      printer.innerText += " seventeen";
      break;
    case 8:
      printerConverter.innerText += " eighteen";
      break;
    case 9:
      printer.innerText += " nineteen";
      break;
  }
}

function switchTwentyToNinety(number, printer) {
  switch (number) {
    case 2:
      printer.innerText += " twenty ";
      break;
    case 3:
      printer.innerText += " thirty ";
      break;
    case 4:
      printer.innerText += " forty ";
      break;
    case 5:
      printer.innerText += " fifty ";
      break;
    case 6:
      printer.innerText += " sixty ";
      break;
    case 7:
      printer.innerText += " seventy ";
      break;
    case 8:
      printer.innerText += " eighty ";
      break;
    case 9:
      printer.innerText += " ninety ";
      break;
  }
}

function threeNumbers(printer, array) {
  if (array.length < 2) {
    switchOneToNine(array[0], printer);
  } else {
    if (array.length < 3) {
      if (array[1] == 1) {
        switchTenToNineteen(array[0], printer);
      } else {
        switchTwentyToNinety(array[1], printer);
        if (array[0] != 0) {
          printer.innerText += "-";
          switchOneToNine(array[0], printer);
        }
      }
    } else {
      if (array.length < 4) {
        switchOneToNine(array[2], printer);
        if (array[2] !== 0) {
          printer.innerText += ` hundred`;
        }
        if (array[1] == 1) {
          switchTenToNineteen(array[0], printer);
        } else {
          switchTwentyToNinety(array[1], printer);
          if (array[0] != 0) {
            if (array[1] != 0) {
              printer.innerText += "-";
              switchOneToNine(array[0], printer);
            } else {
              switchOneToNine(array[0], printer);
            }
          }
        }
      }
    }
  }
}

btnConverter.addEventListener("click", function () {
  let numberToConvert = inputNumber.value;
  let arrayNumber = Array.from(numberToConvert);
  let arrayNumberInteger = [];
  for (element of arrayNumber) {
    arrayNumberInteger.unshift(parseInt(element));
  }
  console.log(arrayNumberInteger);
  array1 = arrayNumberInteger.slice(0, 3);
  array2 = arrayNumberInteger.slice(3, 6);
  array3 = arrayNumberInteger.slice(6, 9);
  array4 = arrayNumberInteger.slice(9, 12);
  array5 = arrayNumberInteger.slice(12, 15);

  if (arrayNumberInteger.length > 12) {
    threeNumbers(printerConverter, array5);
    if (array5[0] == 0 && array5[1] == 0 && array5[2] == 0) {
    } else {
      printerConverter.innerText += " trillion";
    }

    threeNumbers(printerConverter, array4);
    if (array4[0] == 0 && array4[1] == 0 && array4[2] == 0) {
    } else {
      printerConverter.innerText += " billion";
    }

    threeNumbers(printerConverter, array3);
    if (array3[0] == 0 && array3[1] == 0 && array3[2] == 0) {
    } else {
      printerConverter.innerText += " million";
    }

    threeNumbers(printerConverter, array2);
    if (array2[0] == 0 && array2[1] == 0 && array2[2] == 0) {
    } else {
      printerConverter.innerText += " thousand";
    }

    threeNumbers(printerConverter, array1);
  } else if (arrayNumberInteger.length > 9) {
    threeNumbers(printerConverter, array4);
    if (array4[0] == 0 && array4[1] == 0 && array4[2] == 0) {
    } else {
      printerConverter.innerText += " billion";
    }

    threeNumbers(printerConverter, array3);
    if (array3[0] == 0 && array3[1] == 0 && array3[2] == 0) {
    } else {
      printerConverter.innerText += " million";
    }

    threeNumbers(printerConverter, array2);
    if (array2[0] == 0 && array2[1] == 0 && array2[2] == 0) {
    } else {
      printerConverter.innerText += " thousand";
    }

    threeNumbers(printerConverter, array1);
  } else if (arrayNumberInteger.length > 6) {
    threeNumbers(printerConverter, array3);
    if (array3[0] == 0 && array3[1] == 0 && array3[2] == 0) {
    } else {
      printerConverter.innerText += " million";
    }

    threeNumbers(printerConverter, array2);
    if (array2[0] == 0 && array2[1] == 0 && array2[2] == 0) {
    } else {
      printerConverter.innerText += " thousand";
    }

    threeNumbers(printerConverter, array1);
  } else if (arrayNumberInteger.length > 3) {
    threeNumbers(printerConverter, array2);
    if (array2[0] == 0 && array2[1] == 0 && array2[2] == 0) {
    } else {
      printerConverter.innerText += " thousand";
    }

    threeNumbers(printerConverter, array1);
  }
  else{
    threeNumbers(printerConverter, array1);
  }
});

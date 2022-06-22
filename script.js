/*
Write a function called add7 that takes one number and returns that number + 7
*/

function add7(num1, num2, result) {
  num1 = document.getElementsByClassName("add7Input")[0].value;
  num2 = parseInt(num1) + 7;
  result = document.getElementById("add7Result");
  result.innerText = num2;
}

/*
Write a function called multiply that takes 2 numbers and returns their product.
*/

function multiply(num1, num2, num3, result) {
  num1 = document.getElementsByClassName("multiplyInput1")[0].value;
  num2 = document.getElementsByClassName("multiplyInput2")[0].value;
  num3 = parseInt(num1) * parseInt(num2);
  result = document.getElementById("multiplyResult");
  result.innerText = num3;
}

/*
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
*/

function capitalize(str, result) {
    str = document.getElementsByClassName("capitalizeInput")[0].value;
    result = document.getElementById("capitalizeOutput");
    result.innerText = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
  /*
    Below was a test of the capitalize function.. no idea what i was doing.

  firstLetter = str.charAt(0);
  uppercase = firstLetter.toUpperCase();

  output = firstLetter + 
  output = document.getElementById("capitalizeResult");
}

/*
    str = document.getElementsByClassName("capitalizeInput")[0].value;
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        result = str;
    } else {
            letter = str.charAt(0);
            uppercase = letter.toUpperCase();
            output = str.replace(letter, uppercase);
    }
    output = document.getElementById("capitalizeOutput");
    result.innerText = str.charAt(0).toUpperCase() + str.slice(1);
    */

/*
Write a function called lastLetter that takes a string and returns the very last letter of that string:
*/

function lastLetter(str, result) {
  str = document.getElementsByClassName("lastLetterInput")[0].value;
  result = document.getElementById("lastLetterResult");
  result.innerText = str.charAt(str.length - 1);
}

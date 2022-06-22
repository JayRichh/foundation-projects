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
    result.innerText =
        str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/*
Write a function called lastLetter that takes a string and returns the very last letter of that string:
*/

function lastLetter(str, result) {
    str = document.getElementsByClassName("lastLetterInput")[0].value;
    result = document.getElementById("lastLetterResult");
    result.innerText = str.charAt(str.length - 1);
}


//Write a program that takes a user's input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

function fizz(answer, result) {
    answer = document.getElementsByClassName("fizzInput")[0].value;
    result = document.getElementById("fizzResult");
    for (i = 1; i <= answer; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.innerText += "FizzBuzz ";
        } else if (i % 3 === 0) {
            result.innerText += "Fizz ";
        } else if (i % 5 === 0) {
            result.innerText += "Buzz ";
        } else {
            result.innerText += i + " ";
        }
    }
}
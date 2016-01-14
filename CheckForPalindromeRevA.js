"use strict";
function getShoppingList(message) {
  var groceryItem;
groceryItem = window.prompt(message);
console.log(groceryItem);
return groceryItem;
}

function getInput() {
var input = window.prompt("Input a word or a number to check for palindrome:");
var wordOrNumber = input;
return input;
}

function palindromeFunction(wordOrNumber, input) {
var input;
var wordOrNumber = input;
wordOrNumber = wordOrNumber.toLowerCase();
wordOrNumber = wordOrNumber.split(" ").join("");
var newWord = wordOrNumber.split("").reverse().join("");
if(newWord===wordOrNumber) {
return input + " is a palindrome";
	}else{
return input + " is not a palindrome";
	}
}

function main() {
var wordOrNumber;
var input;
input = getInput();
console.log(palindromeFunction(wordOrNumber, input));
console.log(input);
}
main()
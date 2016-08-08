// CHALLENGE 1.1
// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures? 

function uniqueChar(str) {
	if(typeof str !== "string") return false;
	var splittedInOrder = str.split("").sort();
	for(var i = 1; i < splittedInOrder.length; i++) {
		if(splittedInOrder[i] === splittedInOrder[i-1]) return false;
	}
	return true;
}

// CHALLENGE 1.2 
// Implement a function which reverses a string

function reverseString(str) {
	if(typeof str !== "string") return null;
	var reversed = "";
	var tempLetterHolder = "";
	for(var i = str.length-1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
}

// CHALLENGE 1.3
// Given two strings, write a method to decide if one is a permutation of the other.

function isPerm(str1, str2) {
	if(str1.length !== str2.length) return false;
	if(typeof str1 !== "string" || typeof str2 !== "string") return false;
	if(str1.split("").sort().join("") === str2.split("").sort().join("")) return true;
	return false;
}

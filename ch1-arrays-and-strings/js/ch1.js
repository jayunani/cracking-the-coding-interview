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
// Given two strings, write a method to decide if one is a permutation of the other.

function isPerm(str1, str2) {
	if(str1.length !== str2.length) return false;
	if(typeof str1 !== "string" || typeof str2 !== "string") return false;
	if(str1.split("").sort().join("") === str2.split("").sort().join("")) return true;
	return false;
}

// CHALLENGE 1.3
// Write a method to replace all spaces in a string with '%20'. You may assume that the
// string has sufficient space at the end to hold the additional characters, and that you 
// are given the 'true' length of the string.
// input: "Mr John Smith     ", 13
// output: "Mr%20John%20Smith"

function urlify(str, num) {

}

// CHALLENGE 1.4
// Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// input: 'tact coa'
// output: 'true' (permutations: 'taco cat', 'atco cta', etc.)

function palindromePerm(str) {

}

// CHALLENGE 1.5
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check 
// if they are one edit(or zero edits) away.
// pale, ple = true
// pales, pale = true
// pale, bake = false

function oneAway(str1, str2) {

}

// CHALLENGE 1.6 
// Implement a method to perform basic string compression using the counts of repeated characters/
// For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the compressed string 
// would not become smaller than the original string, the method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a-z).

function strCompression(str) {

}

// CHALLENGE 1.7
// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {

}

// CHALLENGE 1.8 
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row
// and column are set to 0.

function zeroMatrix(matrix) {

}

// CHALLENGE 1.9
// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, str1 and str2, write code to check if s2 is a rotation of s1 using only 
// one call to isSubstring.
// e.g. 'waterbottle' is a rotation of 'erbottlewat'

function stringRotation(str1, str2) {

}
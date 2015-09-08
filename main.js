var word = prompt("Please enter in a single word")
	console.log(word)

	var response = "The word you entered was: " + word
	var length = "The length of the word you entered is: "  + word.length
	var third = "The third letter in your word is: " + word.charAt(2)
	var lowerCase = "Lowercase: " + word.toLowerCase()
	var upperCase = "Uppercase: " + word.toUpperCase()
	var sentence = "I know that " + word + " is a word."
	var substring = "Subword: " + word.substring(1, 4)

console.log(response)
console.log(length)
console.log(third)
console.log(lowerCase)
console.log(upperCase)
console.log(sentence)
console.log(substring)
		
var alertish = response + "\n" + length + "\n" + third + "\n" + lowerCase + "\n" + upperCase + "\n" + sentence + "\n" + substring

alert ( alertish )
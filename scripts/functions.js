'use strict'

function letters(cadena) {
	return cadena.length
}

function words(cadena) {
	let cadenas = cadena.split(' ')
	return cadenas.length
}

function upperString(cadena) {
	return cadena.toLocaleUpperCase()
}

function titleString(cadena) {
	let cadenas = cadena.split(' ')
	let cadenaNueva = cadenas.map(cadena => cadena.charAt(0).toLocaleUpperCase() + cadena.slice(1))
	return cadenaNueva.join(' ')
}

function backwardsLetters(cadena) {
	return cadena.split('').reverse().join('')
}

function backwardsWords(cadena) {
	return cadena.split(' ').reverse().join(' ')
}

function palindrome(cadena) {
	cadena = cadena.toLowerCase().replace(/ /g, '')
	return cadena === cadena.split('').reverse().join('')
}

module.exports = {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}

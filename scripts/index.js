'use strict'

let cadena = prompt("Introduce el texto a analizar:")

if(cadena == null || !cadena.trim()){
    alert('No has introducido ningún texto')
}else{
    console.log('Frase: "' +cadena+'"')
    console.log(letters(cadena) + ' letras y ' + words(cadena) + ' palabras')
    console.log(upperString(cadena))
    console.log(titleString(cadena))
    console.log(backwardsLetters(cadena))
    console.log(backwardsWords(cadena))
    console.log((palindrome(cadena)?'Si':'No')+' es palíndromo')
}

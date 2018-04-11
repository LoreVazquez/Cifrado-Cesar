var text = "";

do {
  text = prompt("Ingresa una frase a cifrar. \n Por favor no ingreses: numeros, espacios y/o caracteres especiales"); // Se solicita al usuario el texto a cifrar, se repetira tantas veces hasta que el usuario ingrese una entrada valida
}
  while (!text|| !/^[a-zA-Z]*$/.test(text)); // Condicion de validacion de entrada de texto, se repetira mientras que sea diferente a un string,o si contiene caracteres diferentes de letras mayusculas o minusculas
  cipher(text);

function cipher(phrase){ // Funcion que devuelve el texto ingresado cifrado
  var textCipher = "";

  for(var i=0; i < phrase.length; i++){ // iteracion donde se obtiene el valor numerico de cada letra del texto ingresado
    var numAscii = phrase.charCodeAt(i);
    var numCipherAscii = 0

    if((numAscii >= 65) && (numAscii <= 90)){ // Condicion para diferenciar mayusculas de minusculas, Si no esta dentro del rango indicado se trata de una letra minuscula, si, si se encuentra es una letra mayuscula
      numCipherAscii = ((numAscii - 65 + 33) % 26) + 65;// Aplicacion del olgaritmo cifrado Cesar para cifrar el texto con un dezplamiento de 33 espacios hacia la derecha
    }else{
        numCipherAscii =((numAscii - 97 + 33) % 26) + 97;
      }
      var newLetter = String.fromCharCode(numCipherAscii);// Se obtiene la letra del valor numerico obtenido por el algoritmo de cifrado Cesar
      textCipher += newLetter; // Se agrega letra por letra para construir el texto cifrado
    }
    return document.getElementById("Cifrado").innerHTML = textCipher;;// Devuelve texto cifrado en consola
}

var phraseDecipher = confirm(" Deseas descifrar un texto? ");
if( phraseDecipher === true){
  do {
    text = prompt("Ingresa una frase a cifrar. \n Por favor no ingreses: numeros, espacios y/o caracteres especiales"); // Se solicita al usuario el texto a cifrar, se repetira tantas veces hasta que el usuario ingrese una entrada valida
  }
    while (!text|| !/^[a-zA-Z]*$/.test(text)); // Condicion de validacion de entrada de texto, se repetira mientras que sea diferente a un string,o si contiene caracteres diferentes de letras mayusculas o minusculas
    decipher(text);
  }
  function decipher(phrase){ // Funcion que decifra un texto
    var textDecipher = "";

    for(var i=0; i < phrase.length; i++){ // iteracion donde se obtiene el valor numerico de cada letra del texto ingresado
      var numAsciiDecipher = phrase.charCodeAt(i);
      var numDecipherAscii = 0;

      if((numAsciiDecipher >= 65) && (numAsciiDecipher <= 90)){ // Condicion para diferenciar mayusculas de minusculas, Si no esta dentro del rango indicado se trata de una letra minuscula, si, si se encuentra es una letra mayuscula
        numDecipherAscii = ((numAsciiDecipher + 65 - 33) % 26) + 65;// Aplicacion del olgaritmo cifrado Cesar, se cambian los simbolos para aplicar el descifrado del texto
      }else{
          numDecipherAscii =((numAsciiDecipher + 97 + 33) % 26) + 97;
        }
        var newLetterDecipher = String.fromCharCode(numDecipherAscii);// Se obtiene la letra del valor numerico obtenido por el algoritmo de cifrado Cesar
        textDecipher += newLetterDecipher; // Se agrega letra por letra para construir el texto descifrado
      }
      return document.getElementById("Decifrado").innerHTML = textDecipher;
;// Devuelve texto descifrado en consola
  }

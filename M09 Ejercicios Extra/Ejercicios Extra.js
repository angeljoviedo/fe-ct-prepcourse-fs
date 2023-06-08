/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arr = []

   for (let clave in  objeto) {
      arr.push([clave,objeto[clave]])
   }
   return arr
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letrasRep = {}

      for (var i= 0; i<string.length; i++) {
         var letras = string[i]
         
         if(letrasRep[letras] === undefined) {
            letrasRep[letras] = 1
         }
         else {
         // letrasRep[letra] =  letrasRep[letra] +1 //tambien se puede hacer de esta manera 
         // letrasRep[letra]  += 1 //tambien se puede hacer de esta manera 
         letrasRep[letras] ++
      }
   } 
   //console.log(letrasRep) //para ver el resultado 
   return letrasRep
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayúscula = ""
   var minúscula = ""

   for(var i = 0; i< string.length; i++) {
      if(string[i] === string[i].toUpperCase ()) {
         mayúscula = mayúscula + string[i]
      }else {
         minúscula = minúscula + string[i]
      }
   }
   //console.log(mayúscula + minúscula) // para ver el resultado
   return mayúscula + minúscula
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var stringArr = frase.split(" ")

   var reversed = stringArr.map(function(palabra) {
     return palabra.split("").reverse().join("")
   })
     return reversed.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero1 = numero.toString() //'636'
   var numeroAString = numero1.split("") //[6,3,6]
   numeroAString = numeroAString.reverse() //[6,3,6]
   numeroAString = numeroAString.join('') // '636

   //numeroAString = numeroAString.split().reverse().join('') 
   if(numero1 === numeroAString) {
      return "Es capicua"
   } 
   return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevostring= ''
   for (var i = 0; i < string.length; i++) {
      if(string[i] !== "a" &&  string[i] !== "b" && string[i] !== "c" ) {
         nuevostring += string[i];
      }
   }
   return nuevostring;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //arrayOfStrings.sort((a, b) => a.length - b.length)

   for (var i= 0; i < arrayOfStrings.length; i++) {
      var aux = arrayOfStrings[i]
      var j = i - 1;

      while (j>=0 && aux.length < arrayOfStrings[j].length) {
         arrayOfStrings[j+1] = arrayOfStrings[j]
         j--
      }
      arrayOfStrings[j+1] = aux
   }
    return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   //[0, 2 , 5 ]
   //[2, 5 ,3]

   //[2 , 5]
   var array = []

   for ( var i = 0; i < array1.length; i++) {
      for ( let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j] ) {
           array.push(array1[i])
         } 
      }
   }
   return array
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

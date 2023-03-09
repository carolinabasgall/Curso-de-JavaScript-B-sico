// Nombre
let str_nom = "Carolina"
console.log(str_nom)

// Apellido
let str_ape = "Basgall"
console.log(str_ape)

// Cadena texto concatenando nombre y apellido
let str_est = "estudiante"
console.log(str_est.concat(" ", str_nom, " ", str_ape))

// Cadena de texto con la palabra estudiante en MAYUSCULA
let estudianteMayus = "estudianTE"
console.log(estudianteMayus.toUpperCase())

// Cadena de texto con la palabra estudiante en Minuscula
let estudianteMinus = "ESTUdiante"
console.log(estudianteMinus.toLowerCase())

// Contar numero de letras mas los espacios de la de la cadena "estudiante"
let str_letras = " estudiantes  "
console.log(str_letras.length)

//La primer letra del nombre
console.log(str_nom.charAt(0))

//La primer letra del apellido 
console.log(str_ape.charAt(0))

// Elimino los espacios de la variable estudiantes
console.log(str_letras.trim().length)

// Variable booleana indica si la palabra nombre es en la variable "estudiante"
console.log(str_letras.includes("Nombre"))




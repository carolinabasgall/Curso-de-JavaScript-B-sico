// Objetos
// Objeto con tus datos personales
const obj = {
    nombre: "Carolina",
    apellido: "Basgall",
    edad: 31,
    altura: 1.62,
    isDeveloper: true,
}

// Variable que obtenga tu edad a partir del objeto anterior
const prop = "edad"
console.log(obj[prop]);

const obj2 = [
    {nombre: "Bruno", apellido: "Oviedo", edad: 38, altura: 1.75},
    {nombre: "Aquiles", apellido: "Laviano", edad: 45, altura: 1.69},
    {nombre: "Juana", apellido: "Basgall", edad: 35, altura: 1.65}
]

// lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const objeto3 = { ...obj, ...obj2}
console.log(objeto3);

// Nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
obj2.sort((a, b,) => b.edad - a.edad)
console.log(obj2);
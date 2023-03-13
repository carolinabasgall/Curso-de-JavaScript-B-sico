// Lista de la compra
const lista = ["arroz", "harina", "leche", "pan", "tomate", "gaseosa"]

// Añádele "Aceite de Girasol"
lista.splice(1, 0, "Aceite de Girasol")
console.log(lista)

// elimino "Aceite de Girasol
lista.splice(1, 1)
console.log(lista)

// Películas favoritas
const peli = [
    {titulo: "Un vecino Grunon", director: "Marc Forster", fecha: "2023, 01, 13"},
    {titulo: "En la mira", director: "Ricardo Bros", fecha: "2022, 04, 28"},
    {titulo: "Los infiltrados", director: "Martin Scorsese", fecha: "2006, 10, 06" }
]

// Películas posteriores al 1 de enero de 2010
const nuevaLista = peli.filter(obj => obj.fecha > "2010, 01, 10")
console.log(nuevaLista)

// Directores de la lista de películas
const newPeli = peli.map((obj) => obj.director)
console.log(newPeli)

// Títulos de la lista de películas
const newTitulo = peli.map((obj) => obj.titulo)
console.log(newTitulo)

// Concatene la lista de directores y la lista de los títulos
const titulo = ["Un vecino Grunon", "En la mira", "Los infiltrados"]
const director = ["Marc Forster", "Ricardo Bros", "Martin Scorsese"]
const newList = titulo.concat(director)
console.log(newList);

// Concatene la lista de directores y la lista de los títulos
const lista4 = [...director, ...titulo]
console.log(lista4)

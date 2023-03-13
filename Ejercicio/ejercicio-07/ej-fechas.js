// Fechas
// La fecha de hoy
const fecha = new Date()
console.log(fecha)

// La fecha de tu nacimiento
const fecha2 = new Date(1992, 0, 07)
console.log(fecha2)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fecha > fecha2)

// Variable que contenga el día de tu nacimiento
console.log(fecha2.getDate());

// Variable que contenga el mes de tu nacimiento
console.log(fecha2.getMonth())

// Variable que contenga el año de tu nacimiento
console.log(fecha2.getFullYear())
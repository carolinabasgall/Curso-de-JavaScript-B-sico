// Altura en centímetros (entero)
let altura = 1.6248;
console.log(parseInt(altura));

//Altura en metros (num de coma florante)
console.log(parseFloat(altura));

// Peso en kilogramos (número de coma flotante)
let peso = 49.579
console.log(parseFloat(peso))

// Altura en metros redondeada hacia arriba
console.log(altura.toFixed(2));

// Peso en kilogramos redondeado hacia abajo
console.log(Math.floor(peso));

//si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_JS = Number.MAX_VALUE;
let max_valor_JS_total = (max_valor_JS + 1);
console.log(max_valor_JS);
console.log(max_valor_JS_total + 1);



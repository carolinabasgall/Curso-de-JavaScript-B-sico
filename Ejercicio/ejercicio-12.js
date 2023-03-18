calcularFibonati(6);

function calcularFibonati(n) {
    let fibonacci = [1,1];
    while (fibonacci.length < n) {
    fibonacci.push( fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2]);
    }

console.log(fibonacci.toString());
}
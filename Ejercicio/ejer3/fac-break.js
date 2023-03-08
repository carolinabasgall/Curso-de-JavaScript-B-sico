let x = 10;
var i = x - 1;

while(i > 1) {
   x *= i; 
    i--;
    if (i === 1) {
    break;
    }
}

console.log(x);
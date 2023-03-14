// Una función sin parámetros que devuelva siempre "true"

devuelve()

function devuelve() {
    var respuesta = true;
    console.log(respuesta);
    return true
}

// Funciones asincronas

setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);

// Una función generadora de índices pares automáticos

generaIdPares(100);
function generaIdPares(num) {
    let id = 0;
    while(id <= num) {
        id++
        if (id % 2 == 0) {
            console.log(id);
        }
    }
}











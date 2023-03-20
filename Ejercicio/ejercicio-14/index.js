const boton = document.querySelector("#btn")
//console.log(boton)

boton.addEventListener("click", () => {
    confirm("Click en el botón") 
    ? console.log("Hola, estoy utilizando jQuery")
    : console.log(" ")
})

let nombre = "Carolina";
let apellido = "Basgall";

localStorage.setItem("persona", JSON.stringify( {nombre: "Carolina", apellido: "Basgall"}))

sessionStorage.setItem("persona", JSON.stringify( {nombre: "Carolina", apellido: "Basgall"}))

console.log(document.cookie)

let timeExpiration = new Date();
timeExpiration.setTime(timeExpiration.getTime()+(120*1000));

let expires ="; expires="+timeExpiration.toGMTString();

document.cookie = "nombrecaducidad-non¿mbre; expires=" + expires

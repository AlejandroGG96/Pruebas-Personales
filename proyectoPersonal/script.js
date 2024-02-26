let nombreUsuario;
let botonLogin = document.getElementById("btn-login");
const section1 = document.querySelector("bg-1");
botonLogin.addEventListener('click',()=> {nombreUsuario = prompt("Como nos Dirigimos a ti?");
alert(`Bienvenid@ ${nombreUsuario}, ya puedes entrar.`)});



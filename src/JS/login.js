//Login
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

btn.addEventListener("click",(e)=>{
  e.preventDefault;
})
//Obtenemos los datos y contrase'a ingresados por el usuario
const emailIngresado = email.value;
const passwordIngresado = password.value;

//obtenemos la info local storage
const perfiles= JSON.parse(localStorage.getItem("usuarios"))||[];
//para saber si encontro el perfil
let perfilEncontrado = false;

for (let index = 0; index < perfiles.length; index++) {
  if (perfiles[index].email===emailIngresado && perfiles[index.password===passwordIngresado]) {
  Window.location.href = "portafolio.html"
  perfilEncontrado = true;
  break;
  }}
  //si no encuentra perfil mostrar alerta
if (perfilEncontrado) {
  alert("acceso Invalido");
  
}
btnRegistrar.addEventListener("click", (e)=>){
  windoww.location.href = "index.html"
}




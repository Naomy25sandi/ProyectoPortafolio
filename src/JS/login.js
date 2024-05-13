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

let perfilEncontrado = false;
//para saber si encontro el perfil
// Recorremos los perfiles que son ingresados para buscar el perfil ingresado por el usuario
for (let i = 0; i < perfiles.length; i++) {
  if (perfiles[i].email===emailIngresado && perfiles[index].password===passwordIngresado) {
 // si encuentra el perfil, me envia a portafolio//
    Window.location.href = "portafolio.html"
  perfilEncontrado = true;
  break;
  // se detiene el ciclo de busqueda//
  }}
  //si no encuentra perfil mostrar alerta//
if (!perfilEncontrado) {
  alert("acceso Invalido");
  
}






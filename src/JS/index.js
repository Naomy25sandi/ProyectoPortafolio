const nombre = document.getElementById("name")
const email= document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const btnRegistrarse = document.getElementById("btnRegistrarse")

// crear funcion para acceso a mas usuarios con una lista//
function guardar_localStorage() {
    let usuarios  // nuevos usuarios//
   if (localStorage.getItem("usuarios")) {
    usuarios=JSON.parse(localStorage.getItem("usuarios"));
    }
 else{
    usuarios=[]
   }  
}
const nuevoUsuario=(nombre.value,email.value,password.value);
usuarios.push(nuevoUsuario);
localStorage.setItem("usuarios",JSON.stringify(usuarios));
alert("Usuario Registrado");
window.location.href="login.html"


btnRegistrarse.addEventListener("click",()=>{
    guardar_localStorage()
});




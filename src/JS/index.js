const nombre = document.getElementById("name")
const email= document.getElementById("email")
const password = document.getElementById("password")
const btnRegistrarse = document.getElementById("btnRegistrarse")
let usuarios 

function guardar_localStorage() {
    let usuarios 
   if (localStorage.getItem("usuarios")) {
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
    }
 else{
    usuarios=[]
   }  
}
const nuevoUsuario=(nombre.value,email.value,password.value)
usuarios.push(nuevoUsuario)
localStorage.getItem("usuarios",JSON.stringify('usuarios'))
alert("Usuario Registrado")
window.location.href="login.html"


btnRegistrarse.addEventListener("click",()=>{
    guardar_localStorage()
})




const inputNombre = document.getElementById("name")
const inputEmail= document.getElementById("email")
const inputPassword = document.getElementById("password")
const btnRegistrarse = document.getElementById("btnRegistrarse")

function guardar_localStorage() {
    let usuarios 
   if (localStorage.getItem("usuarios")) {
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
    }
 else{
    usuarios=[]
   }  
}
const nuevoUsuario=(nombre;nombre.value,email;email.value,password;password.value)
usuarios.push(nuevoUsuario)
localStorage.getItem("usuarios",JSON.stringify('usuarios'))
alert("Usuario Registrado")
window.location.href="login.html"


btnRegistrarse.addEventListener("click",()=>{
    guardar_localStorage()
})

//Registro

//const nombre = document.getElementById("name")
//const email = document.getElementById("email")
//const password = document.getElementById("password")
//const form = document.getElementById("form")
//const parrafo = document.getElementById("warnings")
//const btnRegistrarse = document.getElementById("btnRegistrarse")

//let listaEmail =[]

//localStorage.getItem("listaEmail")



//function guardar_localstorage() {
    //acceso a mas usuarios con una lista//
   // usuario = [nombre.value, email.value, password.value]

   // localStorage.setItem("usuario",usuario)
    
//}

//btnRegistrarse.addEventListener("click",()=>{   
    //alert("BOTON SUSCRIBIRSE")
   // guardar_localstorage()
//})



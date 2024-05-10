const inputNombre = document.getElementById("name")
const inputEmail= document.getElementById("email")
const inputPassword = document.getElementById("password")
const btnRegistrarse = document.getElementById("btnRegistrarse")

const users = JSON.parse(localStorage.getItem("users")) || []

function guardarDatos() {
    let registroUsuarios = {
        nombre: inputNombre.value,
        correo: inputEmail.value,
        clave: inputPassword.value   
    }

    users.push(registroUsuarios)

    localStorage.setItem("users",JSON.stringify(users))
}


btnRegistrarse.addEventListener("click",()=>{
    guardarDatos()
    Window.location.href="login.html"
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



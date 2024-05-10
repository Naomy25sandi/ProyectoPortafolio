//Registro

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const btnRegistrarse = document.getElementById("btnRegistrarse")

function guardar_localstorage() {
    //acceso a mas usuarios con una lista//
    usuario = [nombre.value, email.value, password.value]

    localStorage.setItem("usuario",usuario)
    
}

btnRegistrarse.addEventListener("click",()=>{   
    //alert("BOTON SUSCRIBIRSE")
    guardar_localstorage()
})



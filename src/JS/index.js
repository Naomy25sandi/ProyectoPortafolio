const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const btnRegistrarse = document.getElementById("btnRegistrarse")

btnRegistrarse.addEventListener("click",()=>{
    localStorage.setItem("nombre",nombre.value)
    localStorage.setItem("password",password.value)
    let nombreMostrar = localStorage.getItem("nombre")
    let claveMostrar = localStorage.getItem("password")
    alert(nombreMostrar)
    alert(claveMostrar)
})

email.addEventListener("click",()=>{
    localStorage.setItem("email",email.value)
})
password.addEventListener("click",()=>{
    localStorage.setItem("password",password.value)
})

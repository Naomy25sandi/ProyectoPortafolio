const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>){
    if ( nombre.ariaValueMax.length <6) {
        alert("Nombre muy corto")
    }
}
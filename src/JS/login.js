const email = document.getElementById("email")
const password = document.getElementById("password")
const btnIngresar = document.getElementById("btn")

const perfiles = JSON.parse(localStorage.getItem("registrados")) || []
function validarDatos() {
  for (let index = 0; index < perfiles.length; index++) {
    if (perfiles[index].email === email.value && perfiles[index].password === password.value) {
      alert("Registro exitoso")
      window.location.href="portafolio.html"
      return
    }
  }
  alert("DATOS INCORRECTOS ❌")
}
btnIngresar.addEventListener("click",()=>{
  validarDatos()
})



const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
  if (email.value === "naomysandi25@gmail.com" && password.value === "251087nsq") {
    e.preventDefault()
    window.location.href="portafolio.html"
  } else {
    alert("acceso invalido")
  }
 })


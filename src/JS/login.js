//Login
const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.getElementById("btn")

let emailLocalStorage = localStorage.getItem("usuario") ||"naomysandi25@gmail.com";
let claveLocalStorage = localStorage.getItem("password") || "251087nsq"

console.log(emailLocalStorage)
console.log(claveLocalStorage)

btn.addEventListener("click", (e) => {
for (let users = 0; users < array.length; users++) {
localStorage.getItem
  
}
  if (email.value === emailLocalStorage && password.value === claveLocalStorage) {
    e.preventDefault()
    window.location.href="portafolio.html"
  } else {
    alert("acceso invalido")
  }
 })



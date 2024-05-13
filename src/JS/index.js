const arregloUsuarios = JSON.parse(localStorage.getItem("registrados")) || [];
const nombre = document.getElementById("name")
const email= document.getElementById("email")
const password = document.getElementById("password")

btnRegistrarse.addEventListener("click",()=>{
    let usuarios = {
        nombre: nombre.value,
        email: email.value,
        password: password.value,
    }   
    arregloUsuarios.push(usuarios)

    localStorage.setItem("registrados", JSON.stringify(arregloUsuarios))
    alert("Registro existoso");
    window.location.href="login.html"
});




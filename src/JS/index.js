// const nombre = document.getElementById("name")
// const email= document.getElementById("email")
// const password = document.getElementById("password")
// const form = document.getElementById("form")
// const btnRegistrarse = document.getElementById("btnRegistrarse")

// let usuarios = [] // nuevos usuarios//
// // crear funcion para acceso a mas usuarios con una lista//
// function guardar_localStorage() {
//    if (localStorage.getItem("usuarios")) {
//     usuarios=JSON.parse(localStorage.getItem("usuarios"));
//     }
//  else{
//     usuarios=[]
//    }  
// }
//const nuevoUsuario=(nombre= nombre.value,email= email.value,password= password.value);
//usuarios.push(nuevoUsuario);
//localStorage.setItem("usuarios",JSON.stringify(usuarios));
//alert("Usuario Registrado");
//window.location.href="login.html"


btnRegistrarse.addEventListener("click",()=>{
    const nombre = document.getElementById("name").value
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value
    const btnRegistrarse = document.getElementById("btnRegistrarse").value
    let usuarios = {
        nombre : nombre,
        email : email,
        password : password,
    }
    localStorage.setItem("usuario", JSON.stringify(usuarios))
    alert("Registro existoso");
    window.Location.href="../login.html"
});




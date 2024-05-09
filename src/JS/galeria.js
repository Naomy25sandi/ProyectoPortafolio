const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")

function abrirFullImg(reference) {
    fullImgBox.style.display = "flex"
    fullImg.src = reference
    
}
function cerrarImg() {
    fullImgBox.style.display = "none"
}
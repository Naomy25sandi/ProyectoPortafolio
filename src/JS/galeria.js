const fullImgBox = document.getElementById("fullImgBox")
const fullimg = document.getElementById("fullimg")

function abrirFullImg(reference) {
    fullImgBox.style.display = "flex"
    fullimg.src = reference
    
}
function cerrarImg() {
    fullImgBox.style.display = "none"
}
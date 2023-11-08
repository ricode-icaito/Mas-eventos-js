var miBoton = document.getElementById('elboton');
miBoton.addEventListener('click', 
function() {
  alert('Has hecho clic!!')
})

var miImagen = document.getElementById('imagen');
miImagen.addEventListener('mouseover', 
function() {
  alert('Has pasado el ratón encima de la imagen')
})

document.write('<h2>subtitulo</h2>')

miImagen.addEventListener('mouseover', function(objetoEvento) {
  console.log(objetoEvento)
})

let miImg = document.getElementById("img");
miImg.addEventListener("mouseover",
function() {
                        alert("Este es mi blog")
                      })
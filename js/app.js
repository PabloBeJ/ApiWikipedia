//Coge las variables del titulo, descripción
var tituloElemento = document.querySelector(".articulo-titulo");
var descripcionElemento = document.querySelector(".articulo-descripcion");
var ImagenElemento = document.querySelector(".articulo-imagen");
//Cogo la ruta del navegafor
const queryString = window.location.search;
//Lo separo en parametros
const urlParams = new URLSearchParams(queryString);
//Cogo todo lo que esta en la url a partir de contenido
const buscar = urlParams.get('contenido');
//Cogo todo lo que esta en la url a partir de idioma
const idioma = urlParams.get('idioma');
//Condición con buscar
if(buscar){
  //Cogo la api e imprimo su idioma
  var api = "https://"+idioma+".wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + buscar;
  var imagen= "https://"+idioma+".wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles="+ buscar;
 //Cogo el api 
 fetch(api)
 //lo transformo en un json
  .then(respuesta => respuesta.json())
  .then(respuesta =>{
    //Cogo la página
    respuesta= respuesta.query.pages;
    //Cogo el id de lo que busco
    var paginaId = Object.keys(respuesta);
    //Extraigo el contenido del contenido
    var extract = respuesta[paginaId].extract;
    //Imprimo el titulo con la variable de buscar
    tituloElemento.innerHTML = buscar;
    //Imprimo el contenido de lo que hemos buscado y se imprime en el parrafo de <p>
    descripcionElemento.innerHTML= extract;
  })
  fetch(imagen)
  .then(respuesta => respuesta.json())
  .then(respuesta =>{
      //Cogo la página
     respuesta= respuesta.query.pages;
     //Cogo el id de lo que busco
     var paginaId = Object.keys(respuesta);
    //Cogo la pagina 
     var source = respuesta[paginaId].original.source;
     console.log("Id imagen: " +source);
     ImagenElemento.innerHTML = "<img src=\""+source + "\"  width=\" 150px;\" height=\" 150px \">";  
  })
  //Si no extiste el contenido o hemos introducido algo mal
  .catch(function() {
    document.write("No se ha encontrado el contenido");
});
} 
//Boton para que se vaya al menu principal
document.getElementById("atras").onclick = function () {
  window.location.href="index.html";
};
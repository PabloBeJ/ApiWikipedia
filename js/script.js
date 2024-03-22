//Cogo el contenido de los textviews de html
var  buscarInput = document.querySelector(".buscador-input");
var  buscarIdioma = document.querySelector(".idioma-input");
//Lo pongo en una función
function BuscarContenido() {
    //Los transformo en string el contenido que se busca y el idioma
    var valorInput = buscarInput.value;
    var valorIdioma = buscarIdioma.value;
    var Buscador = valorInput.toLowerCase().split(' ');
    for (var i = 0; i < Buscador.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        Buscador[i] = Buscador[i].charAt(0).toUpperCase() + Buscador[i].substring(1); 

        // Cogo las variables de lo que acabamos de crear.
    if(valorIdioma&& valorInput){
        //Muestro la url con contenido --> lo que queremos buscar y el idioma--> abreviatra de idioma
        window.location.href="leer.html?contenido="+ Buscador.join(" ")+"&idioma="+valorIdioma;
    }
    }
  }

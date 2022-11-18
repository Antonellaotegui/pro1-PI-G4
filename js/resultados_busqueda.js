setTimeout(function() {
    alert("Buscando...")
}, 6000);
function myStopFunction() {
    clearTimeout(setTimeout);
  }


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get('buscador');

const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=45d43a6901861343cdb188d4f3bafd7c&language=en-US&page=1&include_adult=false`

let loquebusco= document.querySelector('.loquebusco');
  loquebusco.innerText= query;

fetch(url)
.then(function(response) {
    return response.json();
}
).then(function(data) {
     //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
     console.log(data);
     let arrayPeliculas = data.results;

     //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
     let seccion = document.querySelector('#container');
     let allPeliculas = [];

     console.log(arrayPeliculas);
     //2 Qué: recorro la información de la api y la organizo para mostarla en el html
     if (allPeliculas == null || allPeliculas.length == 0) {
        /* Muestres no hay resultados */
        seccion.innerHTML = '<p>No hay resultado de busqueda</p>'}

    
        else { for(let i=0; i<arrayPeliculas.length; i++){
         //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
         allPeliculas += `<a href="./detalle.html?buscador=${arrayPeliculas[i].id}"><article class="cajas">
                             <img class="pelis" src=https://image.tmdb.org/t/p/w500/${arrayPeliculas[i].poster_path} alt='${arrayPeliculas[i].title}' />
                             <p class="titulo" >${arrayPeliculas[i].title} </p>
                             <p class="estreno" >${arrayPeliculas[i].release_date} </p>
                         </article></a>`
     }
     //Con toda la estructura html completa ahora la paso al DOM
<<<<<<< HEAD
     seccion.innerHTML = allPeliculas;}
    
    
=======
     seccion.innerHTML = allPeliculas;
     
>>>>>>> 407a809507a3a5f9b0fc3d3b902fc8d77a71d036
    return data;
}
).catch(function(error) {
    return error;
}
);





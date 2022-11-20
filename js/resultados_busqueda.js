// setTimeout(function() {
//     alert("Buscando...")
// }, 6000);
// function myStopFunction() {
//     clearTimeout(setTimeout);
//   }


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let query = queryStringObj.get("buscador");
let api_key = '81faef6942a31915ed87b416fbba64ba';

let url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}&language=en-US`;
let resultado = document.querySelector(".resultado")
//para que le aparezca al usuario lo que buscó:
resultado.innerText = `Resultado de tu busqueda: ${query}`;

fetch(url)
.then(function(response) {
    return response.json();
}
).then(function(data) {
     //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
     console.log(data);
     let arrayDePeliculas = data.results;

     //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
     let sectionP = document.querySelector('#secciones');
     let allPeliculas = [];

     console.log(arrayDePeliculas);
     //2 Qué: recorro la información de la api y la organizo para mostarla en el html
     if (arrayDePeliculas == null || arrayDePeliculas.length == 0) {
       /* Muestres no hay resultados */
       sectionP.innerHTML = '<p>No hay peliculas que correspondan con su  busqueda</p>'}
    else { 
        for(let i=0; i<arrayDePeliculas.length; i++){
         //Dentro del for voy acumulando en la variable una estructura html por cada pelicula del array.
         allPeliculas += `<a href="./detail-movie.html?idPelicula=${arrayDePeliculas[i].id} "><article class="cajas">
                             <img class="pelis" src=https://image.tmdb.org/t/p/w500/${arrayDePeliculas[i].poster_path} alt='${arrayDePeliculas[i].title}' />
                             <p class="titulo" >${arrayDePeliculas[i].title} </p>
                             <p class="estreno" >${arrayDePeliculas[i].release_date} </p>
                         </article></a>`
               
        
     }
     sectionP.innerHTML = allPeliculas;
    }
     //Con toda la estructura html completa ahora la paso al DOM
     
        return data;
}
).catch(function(error) {
    return error;
}
);

//lo mismo para series
let urlSerie = `https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${api_key}&language=en-US`
fetch(urlSerie)
.then(function(response) {
    return response.json();
}
).then(function(data) {
     //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
     console.log(data);
     let arrayDeSeries = data.results;

     //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
     let sectionS = document.querySelector('#seccionesSerie');
     let allSeries = [];

     console.log(arrayDeSeries);
     //2 Qué: recorro la información de la api y la organizo para mostarla en el html
     if (arrayDeSeries == null || arrayDeSeries.length == 0) {
       /* Muestres no hay resultados */
       sectionS.innerHTML = '<p>No hay series que correspondan con su  busqueda</p>'}
    else { 
        for(let i=0; i<arrayDeSeries.length; i++){
         //Dentro del for voy acumulando en la variable una estructura html por cada pelicula del array.
         allSeries += `<a href="./detail-serie.html?idPelicula=${arrayDeSeries[i].id}"><article class="cajas">
                             <img class="pelis" src=https://image.tmdb.org/t/p/w500/${arrayDeSeries[i].poster_path} alt='${arrayDeSeries[i].name}' />
                             <p class="titulo" >${arrayDeSeries[i].name} </p>
                             <p class="estreno" >${arrayDeSeries[i].firts_air_date} </p>
                         </article></a>`
               
        
     }
     sectionS.innerHTML = allSeries;
    }
     
        return data;
}
).catch(function(error) {
    return error;
}
);
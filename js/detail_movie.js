let qs = location.search;
let qsObj = new URLSearchParams(qs);

let idPelicula = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlMovieDet = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetail");
let titulo = document.querySelector(".tituloDetail");
let fav = document.querySelector(".añadirFav");
let rating= document.querySelector(".rating");
let estreno = document.querySelector("#estreno")
let genero = document.querySelector("#genero")

// Agarro los datos de la pelicula para el DOM
fetch(urlMovieDet)
.then(function(response) {
    return response.json();
}).then(function(data) {
    //Datos finales ya capturados
    console.log(data);
    // Seleccion de elemento a modificar
    titulo.innerText = data.title;
    descrip.innerText = data.overview;
    rating.innerText=`rating: ${data.vote_average}`;
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    estreno.innerText = data.release_date;
    genero.innerText = data.genre;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});
fetch (urlRecomendations).then (function(response) {
    return response.json()
}).then (function(data) {
    let arrayRecomendaciones = data.results
    console.log(data.results)
    let getRecom = document.querySelector('#getRecom')
    let recomendadas = ''
    for(let i=0; i<3; i++){
        recomendadas += `<article class= "recMovieSerie">
        <p class= "nameMovieSerie"> ${arrayRecomendaciones[i].title} </p>
        <img src= > /* Completar el src de la img */
        <a href="./detail-movie.html?id=${arrayRecomendaciones[i].id} class = "detalle""> Ver el detalle</a>
        </article>
        ` 
    }
    
})

/* Array donde se agregan los favoritos */
let favoritos=[]
/* recupero el storage */
let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}
/* Ver si el ID exsiste en favoritos */
if (favoritos.includes(idPelicula)) {
    fav.innerText = "Quitar de favoritos";
}
/* Agregarle una accion al boton de agregar a favoritos */
fav.addEventListener("click", function(e) {
    e.preventDefault();
    /* En caso de que incluya el ID, elimina el array y el boton tiene que contener "Agregar a favoritos" */
    if (favoritos.includes(idPelicula)) {
       let indice = favoritos.indexOf(idPelicula)
       favoritos.splice(indice, 1);
       fav.innerText = "Agregar a Fav";
    } /* Si no lo incluye, agregar el array y el boton pasa a contener "Quitar de favoritos" */
    else{
        favoritos.push(idPelicula)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString)
})


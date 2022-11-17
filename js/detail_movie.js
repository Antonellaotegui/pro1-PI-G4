let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlMovieDet = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetailSerie");
let titulo = document.querySelector(".tituloDetail");
let botonFav = document.querySelector(".añadirFav");


fetch(urlMovieDet)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    titulo.innerText = data.title;
    descrip.innerText = data.overview;
    img.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});
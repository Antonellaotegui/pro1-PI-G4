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
let lGen = ``;

fetch(urlMovieDet)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    titulo.innerText = data.title;
    descrip.innerText = data.overview;
    rating.innerText=`Rating: ${data.vote_average}`;
    img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    estreno.innerText = data.release_date;
    for(let i=0; i<data.genres.length; i++){
     lGen += ` <a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}, </a> `;
    }
    genero.innerHTML = `Géneros: \n ${lGen}`;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});

let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(idPelicula)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(idPelicula)) {
       let indice = favoritos.indexOf(idPelicula)
       favoritos.splice(indice, 1);
       fav.innerText = "Agregar a Fav";
    }else{
        favoritos.push(idPelicula)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString)
})


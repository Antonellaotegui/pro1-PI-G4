let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlSerieDet = `https://api.themoviedb.org/3/tv/${idPelicula}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetailserie");
let rating = document.querySelector(".rating")                              
let titulo = document.querySelector(".tituloDetail");
let fav = document.querySelector(".añadirFav");
let lGen = ``;
let urlRecomendationsSerie= `https://api.themoviedb.org/3/tv/${idPelicula}/recommendations?api_key=${api_key}&language=en-US`
let botonReco = document.querySelector(".recomendaciones");

fetch(urlSerieDet)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    titulo.innerText = data.name;
    descrip.innerText = data.overview;
    img.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    rating.innerText = `Rating: ${data.vote_average}`;
    for(let i=0; i<data.genres.length; i++){
        lGen += ` <a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}, </a> `;
    }
    //genero.innerText = `Géneros: \n ${lGen}`;
    genero.innerHTML = ` Géneros: \n ${lGen}`
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});


let favoritosSe=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritosSe =  JSON.parse(recuperoStorage)
}

if (favoritosSe.includes(idPelicula)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritosSe.includes(idPelicula)) {
       let indice = favoritos.indexOf(idPelicula)
       favoritosSe.splice(indice, 1);
       fav.innerText = "Agregar a Fav";
    }else{
        favoritosSe.push(idPelicula)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritosSe);
    localStorage.setItem("favoritosSe", favsToString)
})

//para recomendaciones
fetch (urlRecomendationsSerie)
 .then (function(response) {
     return response.json()
 }).then (function(data) {
     let arrayRecomendaciones = data.results
     console.log(data.results);
     let getRecom = document.querySelector("#getRecom")
     let recomendadas = ''
    for(let i=0; i<3; i++){
       recomendadas += `<article class= "cajas" id= "recom">
                             <p class= "titulo"> ${arrayRecomendaciones[i].name} </p>;
                              <img class="pelis" src= "https://image.tmdb.org/t/p/w500/${arrayRecomendaciones[i].poster_path}" >;
                            <a href = "./detail-movie.html?id=${arrayRecomendaciones[i].id}" class = "detalle"> </a>;
                        </article> `
    }
        
        
         getRecom.innerHTML = recomendadas
     })
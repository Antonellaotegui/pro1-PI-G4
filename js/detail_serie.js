let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idTv = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlSerieDet = `https://api.themoviedb.org/3/tv/${idTv}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetailserie");
let rating = document.querySelector(".rating")                              
let titulo = document.querySelector(".tituloDetail");
let fav = document.querySelector(".añadirFav");
let lGen = ``;
let urlRecomendationsSerie= `https://api.themoviedb.org/3/tv/${idTv}/recommendations?api_key=${api_key}&language=en-US`
let botonrec = document.querySelector(".botonrec");

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
    
    genero.innerHTML = ` Géneros: \n ${lGen}`
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});



/* Array donde se agregan los favoritos */
let favoritosSerie = []
/* recupero el storage */
let recuperoStorage = localStorage.getItem("favoritosSerie")

if (recuperoStorage != null) {
    favoritosSerie = JSON.parse(recuperoStorage)
}
/* Ver si el ID exsiste en favoritos */
if (favoritosSerie.includes(idTv)) {
    fav.innerText = "Quitar de favoritos";
}
/* Agregarle una accion al boton de agregar a favoritos */
fav.addEventListener("click", function (e) {
    e.preventDefault();
    /* En caso de que incluya el ID, elimina el array y el boton tiene que contener "Agregar a favoritos" */
    if (favoritosSerie.includes(idTv)) {
        let indice = favoritosSerie.indexOf(idTv);
        favoritosSerie.splice(indice, 1);
        fav.innerText = "Agregar a Fav";
    } /* Si no lo incluye, agregar el array y el boton pasa a contener "Quitar de favoritos" */
    else {
        favoritosSerie.push(idTv);
        fav.innerText = "Quitar de favoritos";
    }

    let favsToString = JSON.stringify(favoritosSerie);
    localStorage.setItem("favoritosSerie", favsToString);
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
       recomendadas += `<a class="estreno" href="./detail-serie.html?idPelicula=${arrayRecomendaciones[i].id}"><article class= "cajas" id= "recom">
                             <p class= "titulo"> ${arrayRecomendaciones[i].name} </p>
                              <img class="pelis" src= "https://image.tmdb.org/t/p/w500/${arrayRecomendaciones[i].poster_path}" >
                        </article> </a> `
    }
        
        
         getRecom.innerHTML = recomendadas
     })

let activo = true;
if (activo) {
    botonrec.innerText = "Ver recomendadas";
    getRecom.style.display="none";
}

botonrec.addEventListener("click", function (e) {
        e.preventDefault();
        if (activo) {
            botonrec.innerText = "Ver recomendadas";
            getRecom.style.display="none";
            activo = false;
        }
        else{
            botonrec.innerText = "Ocultar recomendadas";
            getRecom.style.display = "flex";
            activo = true;
        }
    
})


//para el trailer
let urlTraillersTV = `https://api.themoviedb.org/3/tv/${idTv}/videos?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`;
let seccionT = document.querySelector("#trailer")
fetch(urlTraillersTV)
   .then(function (response) {
            return response.json()
    }).then(function (data) {
                    let videos = data.results
                    if (videos == null | videos.length == 0){
                        seccionT.innerText = "No hay trailers disponibles"
                    }
                    else{
                    console.log(data.results);
                    for (let i = 0; i < 1; i++) {
                    if (videos[i].type == "Trailer"){
                        seccionT.innerHTML += `<a href="https://www.youtube.com/watch?v=${videos[i].key}"> Ver trailer </a>`
                    }}
                  }
                    
     }) . catch(function(error){
                    return error
                })
        
                

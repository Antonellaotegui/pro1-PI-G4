let qs = location.search;
let qsObj = new URLSearchParams(qs);

let idPelicula = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlMovieDet = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetail");
let titulo = document.querySelector(".tituloDetail");
let fav = document.querySelector(".añadirFav");
let rating = document.querySelector(".rating");
let estreno = document.querySelector("#estreno");
let genero = document.querySelector("#genero");
let duracion = document.querySelector(".duracion")
let lGen = '';
let urlRecomendations = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${api_key}&language=en-US`
let botonrec = document.querySelector(".botonrec");
let activo = true;

fetch(urlMovieDet)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        //Datos finales ya capturados
        console.log(data);
        // Seleccion de elemento a modificar
        titulo.innerText = data.title;
        descrip.innerText = data.overview;
        rating.innerText = `Rating: ${data.vote_average}`;
        duracion.innerText = `Duración: ${data.runtime}`;
        img.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        estreno.innerText = data.release_date;
        for (let i = 0; i < data.genres.length; i++) {
            lGen += ` <a href="./detail-genres.html?id=${data.genres[i].id}">${data.genres[i].name}, </a> `;
        }
        genero.innerHTML = `Géneros: \n ${lGen}`;
        //plataformas 
        let urlPlat = `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers?api_key=${api_key}`
        fetch(urlPlat)
        .then(function(response) {
            return response.json();
        }
        ).then(function(data) {
            let informacion = data.results;
            console.log(informacion)
            let secPlat = document.querySelector(".plataformas")
            if (informacion.US !== undefined){
                iconos = `${informacion.US.flatrate[0].provider_name}`
                secPlat.innerHTML = iconos;
            }
            else if (informacion.US !== undefined){
                nombre = `${informacion.US.buy[0].provider_name}`
                secPlat.innerHTML= nombre;
            }
            else{
                secPlat.innerText="Este titulo no está disponible en los Estados Unidos"
            }
                return data;
        }
        ).catch(function(error) {
            return error;
        })
        return data;
    }).catch(function (error) {
        console.log(error);
        return error;
    });

//para el boton de recomendaciones
fetch(urlRecomendations)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                let arrayRecomendaciones = data.results
                console.log(data.results);
                let getRecom = document.querySelector("#getRecom")
                let recomendadas = ''
                for (let i = 0; i < 3; i++) {
                    recomendadas += `<a class="estreno" href="./detail-movie.html?idPelicula=${arrayRecomendaciones[i].id}"><article class= "cajas" id= "recom">
                             <p class= "titulo"> ${arrayRecomendaciones[i].title} </p>
                              <img class="pelis" src= "https://image.tmdb.org/t/p/w500/${arrayRecomendaciones[i].poster_path}" >
                            <a href = "./detail-movie.html?id=${arrayRecomendaciones[i].id}" class = "detalle"> </a>
                        </article></a>`
                }
                getRecom.innerHTML = recomendadas
                
            })

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

//para los trailers
let urlTraillers = `https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`;
let seccionT = document.querySelector("#trailer")
fetch(urlTraillers)
            .then(function (response) {
                return response.json()
            }).then(function (data) {
                let videos = data.results
                if (videos == null | videos.length == 0){
                    seccionT.innerText = "No hay trailers disponibles"
                }
                else{
                console.log(data.results);
                let videoT = ''
                for (let i = 0; i < 1; i++) {
                if (videos[i].type == "Trailer"){
                    seccionT.innerHTML += `<a href="https://www.youtube.com/watch?v=${videos[i].key}"> Ver trailer </a>`
                }}
              }
                
            })

    //para agregar a favoritos
/* Array donde se agregan los favoritos */
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
    localStorage.setItem("favoritos", favsToString )
})



let api_key =`81faef6942a31915ed87b416fbba64ba`;
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
let section = document.querySelector("#lista");
let peliculasFavoritos = '';
//para series 
let sectionSeries = document.querySelector("#listaSerie");
let recuperoStorageFav = localStorage.getItem('favoritosSerie');
let seriesFavoritos = '';
let favoritosSerie = JSON.parse(recuperoStorageFav);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas o series en favoritos</p>'
} else {
    
        
        for (let i = 0; i < favoritos.length; i++) {
            let url =   `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=400f43d154bc968e0f7c02f3b9187c48`;
            fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                peliculasFavoritos += `<a href="./detail-movie.html?idPelicula=${data.id}"><article class="cajas">
                <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.title}">
                <p class="titulo">  ${data.title}</p>
                <p class="estreno"> ${data.release_date}</p>
            </article> </a>`
                section.innerHTML = peliculasFavoritos;
    
                return data;
            }).catch(function (error) {
                return error;
            });

   }}

if (favoritosSerie == null || favoritosSerie.length == 0) {
     /* Muestres no hay favoritos */
    sectionSeries.innerHTML = '<p>No hay peliculas o series en favoritos</p>'
} else {
    for (let i = 0; i < favoritosSerie.length; i++) {
    let urlSerie = `https://api.themoviedb.org/3/tv/${favoritosSerie[i]}?api_key=400f43d154bc968e0f7c02f3b9187c48` 
    
     fetch(urlSerie)
        .then(function (response) {
             return response.json();
        }).then(function (data) {
            console.log(data);
            seriesFavoritos += ` <a href="./detail-serie.html?idPelicula=${data.id}"><article class="cajas">
                 <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.name}">
                  <p class="titulo">  ${data.name}</p>
                 <p class="estreno"> ${data.first_air_date}</p>
             </article> </a>`
            sectionSeries.innerHTML = seriesFavoritos;
            return data;
        }).catch(function (error) {
            return error;
       })}}
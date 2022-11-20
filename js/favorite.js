let api_key = '81faef6942a31915ed87b416fbba64ba';
let recuperoStorage = localStorage.getItem('favoritos');
let recuperoStorageFav = localStorage.getItem('favoritosSe');
let favoritos = JSON.parse(recuperoStorage);
let section = document.querySelector("#lista");
let sectionSeries = document.querySelector("#listaSerie");
let peliculasFavoritos = '';
let seriesFavoritos = '';
let favoritosSerie = JSON.parse(recuperoStorageFav);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas en favoritos</p>'
} else {

    for (let i = 0; i < favoritos.length; i++) {
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${api_key}&language=en-US`;
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                peliculasFavoritos += `<article class="cajas">
                                        <a href="./detail-movies.html">
                                        <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="'${data.title}'">
                                        </a>
                                        <p class="titulo"> <a href="./detail-movie.html?idPelicula=${data.id}"> ${data.title}</a></p>
                                        <p class="estreno"> ${data.release_date}</p>
                                    </article>`
                section.innerHTML = peliculasFavoritos;

                return data;
            }).catch(function (error) {
                return error;
            });
    }
    for (let i = 0; i < favoritosSerie.length; i++) {
        let urlSerie = `https://api.themoviedb.org/3/tv/${favoritosSerie[i]}?api_key=${api_key}&language=en-US`;
        fetch(urlSerie)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                seriesFavoritos += `<article class="cajas">
                     <a href="./detail-movies.html">
                     <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="'${data.name}'">
                     </a>
                     <p class="titulo"> <a href="./detail-movie.html?idPelicula=${data.id}"> ${data.name}</a></p>
                     <p class="estreno"> ${data.first_air_date}</p>
                 </article>`
                sectionSeries.innerHTML = seriesFavoritos;
                return data;
            }).catch(function (error) {
                return error;
            })}}
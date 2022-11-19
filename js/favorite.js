let api_key = '81faef6942a31915ed87b416fbba64ba'

/* Recuperar localStorage */
let recuperoStorage = localStorage.getItem('favoritos');

/*  ["2"] */

let favoritos = JSON.parse(recuperoStorage);
/*  [2,4,6] */

let section = document.querySelector("#lista");
let peliculasFavoritos = ''; 

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay peliculas o series en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let url  = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${api_key}&language=en-US&page=1`;
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
    
        let urlSerie  = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=${api_key}&language=en-US`;
            fetch(urlSerie)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                peliculasFavoritos += `<article class="cajas">
                                            <a href="./detail-movies.html">
                                            <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="'${data.name}'">
                                            </a>
                                            <p class="titulo"> <a href="./detail-movie.html?idPelicula=${data.id}"> ${data.name}</a></p>
                                            <p class="estreno"> ${data.first_air_date}</p>
                                        </article>`
                section.innerHTML = peliculasFavoritos;

                return data;
            }).catch(function (error) {
                return error;
            }); 
            
        }}
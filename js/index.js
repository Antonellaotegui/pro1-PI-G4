let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlPop= `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
let urlValoradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
let urlSeriesPop = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
let listaPopulares = document.querySelector('#populares');
let listaSeries = document.querySelector("#series");
let listaValoradas = document.querySelector('#valoradas');

fetch(urlPop)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {

        console.log(data.results);
        for (let i = 0; i < 5; i++) {

            let pelicula = data.results[i];
            listaPopulares.innerHTML += `<a class="estreno" href="./detail-movie.html?idPelicula=${pelicula.id}"><article class="cajas">
                                            <img class="pelis" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="" >
                                                            <p class="titulo">${pelicula.title}</p>
                                                            <p class="estreno">${pelicula.release_date}</p>
                                                            
                                        </article > </a>`
        }
        return data;
    }).catch(function (error) {
        //console.log(error);
        return error;
    });

    fetch(urlSeriesPop)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        for (let i = 0; i < 5; i++) {
            let pelicula = data.results[i];
            console.log(data.results);
            listaSeries.innerHTML +=  ` <a class="estreno" href="./detail-serie.html?idPelicula=${pelicula.id}"><article class="cajas">
            <img class="pelis" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="" >
                            <p class="titulo">${pelicula.name}</p>
                            <p class="estreno">${pelicula.first_air_date}</p>
                            
        </article > </a> `
        }
   
        return data;
    }).catch(function (error) {
       // console.log(error);
        return error;
    });


    fetch(urlValoradas)
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function (data) {
        for (let i = 0; i < 5; i++) {
            let pelicula = data.results[i];
            //console.log(pelicula.poster_path);

            listaValoradas.innerHTML += `<article class="cajas">
                                                <img  class= "pelis" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" >
                                                    <p class="titulo"> ${pelicula.title} </p>
                                                    <p class="estreno">${pelicula.release_date}</p>
                                                <a class="estreno" href="./detail-movie.html?idPelicula=${pelicula.id}">Ver mas</a>
                                    </article>`
        
        }
        return data;
    }).catch(function (error) {
        //console.log(error);
        return error;
    });
/* comentario */
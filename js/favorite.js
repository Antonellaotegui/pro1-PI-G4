let api_key = '81faef6942a31915ed87b416fbba64ba'
let url  = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
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
    section.innerHTML = '<p>No hay personajes en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            peliculasFavoritos += `<article class="cajas">
                                        <a href="./detail-serie.html">
                                        <img  class= "pelis" src="${data.image}" alt="'${data.name}'">
                                        </a>
                                        <p class="titulo">Name: <a href="./detallePersonaje.html?idPersonaje=${data.id}"> ${data.name}</a></p>
                                        <p class="estreno">Status: ${data.status}</p>
                                    </article>`
            section.innerHTML = peliculasFavoritos;

            return data;
        }).catch(function (error) {
            return error;
        });

        
        
    }
}
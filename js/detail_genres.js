let api_key = "81faef6942a31915ed87b416fbba64ba";
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
let qs = location.search;
let objQs = new URLSearchParams(qs);
let idGen = objQs.get("id");
let nombreGen = objQs.get("name");

fetch(`${url}&with_genres=${idGen}&name=${nombreGen}`)
.then(function(response) {
    return response.json();
}
).then(function(data) {
     //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
     console.log(data);

     //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
     let seccion = document.querySelector('#container');
     let allDetailg = [];

     console.log(arrayPeliculas);
     //2 Qué: recorro la información de la api y la organizo para mostarla en el html
     for(let i=0; i<arrayPeliculas.length; i++){
         //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
         allDetailg += ``
     }
     //Con toda la estructura html completa ahora la paso al DOM
     seccion.innerHTML = allDetailg;
    return data;
}
).catch(function(error) {
    return error;
}
);





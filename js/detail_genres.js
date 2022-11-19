let api_key = "81faef6942a31915ed87b416fbba64ba";
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
let qs = location.search;
let objQs = new URLSearchParams(qs);
let idGen = objQs.get("id");
let nombreGen = objQs.get("name");

fetch(url)
.then(function(response) {
    return response.json();
}
).then(function(data) {
     console.log(data);

     let seccion = document.querySelector('#container');
     let allDetailg = [];

     console.log(arrayPeliculas);
     for(let i=0; i<arrayGeneros.length; i++){
         allDetailg += ``
     }
     seccion.innerHTML = allDetailg;
    return data;
}
).catch(function(error) {
    return error;
}
);





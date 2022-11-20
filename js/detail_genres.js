let api_key = "81faef6942a31915ed87b416fbba64ba";
let urlDetalleGen = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
let qs = location.search;
let objQs = new URLSearchParams(qs);
let idGen = objQs.get("id");
let nombreGen = objQs.get("name");
let tituloGen = document.querySelector('tituloGen')

fetch(url)
.then(function(response) {
    return response.json();
}
).then(function(data) {
    let arrayGeneros = data.results
     console.log(arrayGeneros);
     let detalleGen= ''
     let genero = document.querySelector('#generospeliculas')

// se recorre la info de la API y se selecciona para mostrarla al usuario
    for(let i=0; i<4; i++){
        urlDetalleGen += `<article class= "gen">
        <p class= "resultadoGen" ${arrayGeneros[i].poster_path} alt = <a href="./detail-genres.html?id=${arrayGeneros[i].id}" class= "detailLink"> </article>`
    }
    genero.innerHTML = urlDetalleGen;
}).catch(function (error) {
    console.log('el error es' + error)
})




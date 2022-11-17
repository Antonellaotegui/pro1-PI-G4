let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get('idPelicula');

let api_key = '81faef6942a31915ed87b416fbba64ba';
let urlSerieDet = `https://api.themoviedb.org/3/tv/${idPelicula}?api_key=${api_key}&language=en-US`;
let descrip = document.querySelector(".descrip");
let img = document.querySelector(".imgDetailSerie");
let titulo = document.querySelector(".tituloDetail");
let botonFav = document.querySelector(".añadirFav");


fetch(urlSerieDet)
.then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    titulo.innerText = data.title;
    descrip.innerText = data.overview;
    img.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});

//ver porque no me anda!
//

 let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(idpersonaje)) {
    botonFav.innerText = "Quitar de favoritos";
}

botonFav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(idpersonaje)) {
       let indice = favoritos.indexOf(idpersonaje)
       favoritos.splice(indice, 1);
       botonFav.innerText = "Agregar a Fav";
    }else{
        favoritos.push(idpersonaje)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})

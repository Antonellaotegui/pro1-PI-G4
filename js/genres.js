let api_key= `81faef6942a31915ed87b416fbba64ba`;
let url =` https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
let listaGen = document.querySelector(".listaGenero");
let listaGen2 = document.querySelector("#series")



fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
   for(let i = 0; i < data.genres.length; i++)
    {
        let genero = data.genres[i].name
           listaGen.innerHTML += `<article class="generoLi"> 
           <a class="genNum" href="./detail-genres.html?id=${data.genres[i].id}">${genero}</a>
           
           </article> `}
    console.log(data)
    return data
})
.catch(function(error){
    return error
})

let urlSeries= `https://api.themoviedb.org/3/discover/tv?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
fetch(urlSeries)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
   for(let i = 0; i < data.genres.length; i++)
    {
        let genero = data.genres[i].name
           listaGen2.innerHTML += `<article class="generoLi"> 
           <a class="genNum" href="./detail-genres.html?id=${data.genres[i].id}">${genero}</a>
           </article> `}
    console.log(data)
    return data
})
.catch(function(error){
    return error
})


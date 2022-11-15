let api_key= `81faef6942a31915ed87b416fbba64ba`;
let url =` https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
let listaGen = document.querySelector(".generoLi");
let item = document.querySelector(".genNum");
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    item.innerText = data.name
    
   // for(let i = 0; i < 3; i++)
   // {
   //         listaGen.innerHTML += `<article class="generoLi"> 
    //        <a class="genNum" href="./detail-genres.html">${data[i]}</a>
   //         </article> `}
    console.log(data)
    return data
})
.catch(function(error){
    return error
})

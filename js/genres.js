let api_key= `81faef6942a31915ed87b416fbba64ba`;
let url =` https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
let listaGen = document.querySelector(".generoLi");
let item = document.querySelector(".genNum");
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    for (let i = 0; i < 5; i++){
        let genero = data.name[i];
            item.innerText = genero;       
    }
    console.log(data.name)
    return data
})
.catch(function(error){
    return error
})

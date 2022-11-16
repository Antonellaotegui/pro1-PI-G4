let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
const query = queryStringObj.get('buscador');

const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=45d43a6901861343cdb188d4f3bafd7c&language=en-US&page=1&include_adult=false`



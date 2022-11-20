let form = document.querySelector('form');
let input = document.querySelector('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if ( input.value == '') {
        alert('Debes Ingresar una palabra');
    } else if( input.value.length < 2){
        alert('Palabra muy corta, deben ser 3 letras o más');
    }else {
        form.submit();
    }
})
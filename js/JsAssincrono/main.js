// Utilizando axios, o arquivo foi importado no script
axios.get('https://api.github.com/users/mathcard')
    .then(function(response){
        console.log(response);
    }).catch(function(error){
        console.warn(error);
    }); 


// CHAMADA API COM AJAX
/*var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/mathcard');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
} */


// CHAMADA API COM PROMISES
// RESOLVE quando a solição teve exito. REJECT quando houve alguma falha.
/*
var minhaPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/mathcard');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response);
    }).catch(function(error){
        console.warn(error);
    }); */


// REST - Pegar o resto das propriedades
const usuario = {
    nome: 'Matheus',
    idade: 25,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [ a, b, ...c] = arr;
/*console.log(a);
console.log(b);
console.log(c);*/

function somaRest(...params){
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));

function somaRest2(a, b, ...params){
    return params;
}

console.log(somaRest2(1, 3, 4, 5, 6, 7));

// SPREAD
//PAREI COM 5 MINUTOS
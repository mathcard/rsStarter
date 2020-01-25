// Classes

class List{
    constructor(){
        this.data = [];        
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Math';
    }
    monstraUsuario(){
        console.log(this.usuario);
    }

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.monstraUsuario();


// Class Static
class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

// Variaveis e Constantes
// Const não pode ser alterada.
//Mutação -> Objeto const pode ter o valor alterado

// Variavel de escopo
function varEscopo(x){
    let y = 2;
    if(x>5){
        y = 4;
        console.log(x, y);
    }
}

varEscopo(10);


// Trabalhando com Array
/* 
map: para percorrer o vetor. 1º valor, 2º posição    
reduce: realizar uma ação do primeiro para o proximo. (Soma total)
filter: retorna apenas item com a condição true (Número Par)
find: filtra um valor do vetor
*/
const arr = [1, 3, 5, 8, 11];

const newArr = arr.map(function(x){
    return x * 2;
});

const newArr2 = arr.map(function(item, index){
    return `Posição: ${index} = ${item}`;
});

const sum = arr.reduce(function(total, next){
    return total + next;
});

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

const find = arr.find(function(item){
    return item === 5;
});

console.log(newArr);
console.log(newArr2);
console.log(sum);
console.log(filter);
console.log(find);

// Arrow Function
const arrArrow = [1, 3, 4, 5, 6];

const newArrArrow = arrArrow.map(item => item * 2);

console.log(newArrArrow);

const teste = () => ({ nome :'Matheus' });

console.log(teste());


// Valores Padrão
const valDefault = (a=3, b=6) => a+b;
console.log(valDefault(1));
console.log(valDefault());

// Desestruturação
const usuario = {
    nome: 'Matheus',
    idade: 25,
    endereco: {
        cidade: 'Goiânia',
        estado: 'GO',
    },
}

const { nome, idade, endereco:{ cidade } } = usuario;
console.log(nome, idade, cidade);

function monstraNome({nome, idade}){
    console.log(nome, idade);
}





// REST - Pegar o resto das propriedades
const usuarioRest = {
    nome: 'Matheus',
    idade: 25,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuarioRest;
console.log(nome);
console.log(resto);
/*
const arr = [1, 2, 3, 4];
const [ a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c); */

function somaRest(...params){
    return params.reduce((total, next) => total + next);
}

console.log(somaRest(1, 3, 4));

function somaRest2(a, b, ...params){
    return params;
}

console.log(somaRest2(1, 3, 4, 5, 6, 7));

// SPREAD - Passa todos os valores de um array
const arrSpread1 = [1, 2, 3];
const arrSpread2 = [4, 5, 6];

const arrSpread3 = [...arrSpread1, ...arrSpread2];
console.log(arrSpread3);

const usuarioSpread = {
    nome: 'Matheus',
    idade: 25,
    empresa: 'Rocketseat'
};

const usuarioSpread2 = {...usuarioSpread, nome: 'iChangeNameWithSpread'};
console.log(usuarioSpread);
console.log(usuarioSpread2);


// OBJECT SHORT SYNTAX - 
//Quando o nome da propriedade é igual ao nome da variavel dentro do objeto
const nomeOSS = 'Suetham';
const idadeOSS = '26';

const usuarioOSS = {
    nomeOSS,
    idadeOSS,
    empresa: 'Devs',
};

console.log(usuarioOSS);
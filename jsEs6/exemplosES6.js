// Classes
class TodoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}

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

monstraNome(usuario);
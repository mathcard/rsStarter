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
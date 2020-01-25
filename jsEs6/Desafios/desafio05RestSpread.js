// 5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

// 5.2
function soma(...params){
    return params.reduce((a, b) => a + b);
} 

console.log(soma(1, 2, 3, 4, 5, 6)); 
console.log(soma(1, 2));

// 5.3
const userChange = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const userChange2 = {...userChange, nome:'Gabriel'};
const userChange3 = {...userChange, nome:'Lucas'};
console.log(userChange2);
console.log(userChange3);
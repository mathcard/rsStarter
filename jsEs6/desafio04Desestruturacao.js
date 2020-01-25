//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco:{cidade}, endereco:{estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

//4.2
function mostraInfo(usuario) {
    //return console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
    const {nome, idade} = usuario;
    return console.log(`${nome} tem ${idade} anos.`);
    }

    mostraInfo({ nome: 'Diego', idade: 23 })
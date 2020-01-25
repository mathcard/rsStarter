const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

console.log('2.1 Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]');

const idades = usuarios.map(user => user.idade);
console.log(idades);

console.log('2.2 Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18. (Diego)');
const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
  );
  console.log(rocketseat18);

console.log('2.3 Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined');
const empresa = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(empresa);

console.log('2.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:')
const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);
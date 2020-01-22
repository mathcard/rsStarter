
// EX02 - Mostrar todos os fares
function pares(x, y) {
  var pares = [];
  for(aux=x; aux<=y; aux++){    
    if(aux%2==0){
      pares.push(aux);
    }    
  }
  console.log(pares);
}
pares(32, 45);

// EX03 - Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
//e retorna um booleano true/false caso exista ou não. 
function temHabilidade(skills) {
  return skills.indexOf("Javascript") !== -1;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

//04 - If/elseIf
function experiencia(anos) {
  if (anos <= 1) {
    return "Iniciante";
  } else if (anos <= 3) {
    return "Intermediário";
  } else if (anos <= 6) {
    return "Avançado";
  } else {
    return "Jedi Master";
  }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));

// EX05 vetor for...of / join
function exibeHabilidades(usuarios) {
  for (piriquito of usuarios) {
    console.log(
      "O " +
        piriquito.nome +
        " possui as habilidades: " +
        piriquito.habilidades.join(", ")
    );
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);
import axios from 'axios';

class Api{
  static async getUserInfo(username){
    try{
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    }catch(err){
      console.warn('Erro na API');
    }    
    
  }
}

Api.getUserInfo('mathcard');
Api.getUserInfo('mathcard10');

// Exemplo com Promises

const minhaPromise = () => new Promise((resolve, reject) =>{
  setTimeout(() => {resolve('Ok')}, 2000 );
})

/* async function executaPromise(){
//  const response = await minhaPromise();
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());

} */

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();
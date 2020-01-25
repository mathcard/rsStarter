import axios from 'axios';

const getUserFromGithub = async(user) => { 
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch(err){
    console.warn('Usuário não existe');
  }  
}

getUserFromGithub('diego3gssssss');
getUserFromGithub('mathcard');
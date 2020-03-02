import React, { useState, Component } from 'react';
import Comment from './Comment';
import Table from './Table';

function Post({title}){
    const [comments, setComments] = useState([{text: ''}]);
    const [newCommentText, setNewCommentText] = useState('');
    const [find, setFind] = useState('');
    const [users, setUsers] = useState([
                                        {id: '1', nome: 'MATHEUS', cpf: '123'}, 
                                        {id: '2', nome: 'MATHEWS JESUS', cpf: '456'}, 
                                        {id: '4', nome: 'JESUS', cpf: '999'}, 
                                        {id: '3', nome: 'DEV MAN', cpf: '999'}, 
                                 
                                    ]);
    
    const [usersFind, setUsersFind] = useState([{id: '', nome:'', cpf:''}]);
                                    
    

    function handleSubmit(e){
        // this.setState (Para utilizar precisa informar o react que ao utilizar o handleSubmit estou referenciando a classe post LINHA - 16 )
        e.preventDefault();
        setComments([...comments, {text: newCommentText}]);                
        setNewCommentText('');        
        console.log(find);
        //setUsersFind([...usersFind, {id: 'id', nome: 'nome', cpf: 'cpf'}]);                
        users.map((res, index) => {            
            //const {id, nome, cpf} = res;            
            if(res.nome.search(find) > -1 || res.cpf.search(find) > -1){ 
            
            setUsersFind([...usersFind, {id: res.id, nome: res.nome, cpf: res.cpf}])
        }   
          //      const aux = [{id: id, nome: nome, cpf: cpf}];
                //console.log(`AUX ${aux}`);
                //return setUsersFind([...usersFind, {id: id, nome: nome, cpf: cpf}]);                
                //console.log(id, nome,cpf);                                
           // }
            

        });
        console.log(usersFind);        
    }
   
    return(
        <div>
            <h2>{title}</h2> 
            <form onSubmit={handleSubmit}>
                {/*<input placeholder="Adicionar Comentario"
                    value={newCommentText}
                    onChange={ e => setNewCommentText(e.target.value)}
                />
                <button type="submit">Comentar</button> */}
                <input placeholder="Pesquise um usuário"
                    value={find}
                    onChange={ e => setFind(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
            
            {/* comments.map((comment, index) => {
                return <Comment key={index} comment={comment}/> }) */}

            {   
                console.log(usersFind),
                usersFind.map((res, index) =>{
                    return <Table key={index} table={res} />         
                }) 
                
            }
        </div>    
    );
    
}

export default Post;
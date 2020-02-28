import React, { useState, Component } from 'react';
import Comment from './Comment';

function Post({title}){
    const [comments, setComments] = useState([{text: 'oi'}]);
    const [newCommentText, setNewCommentText] = useState('');

    function handleSubmit(e){
        // this.setState (Para utilizar precisa informar o react que ao utilizar o handleSubmit estou referenciando a classe post LINHA - 16 )
        e.preventDefault();
        setComments([...comments, {text: newCommentText}]);                
        setNewCommentText('');        
    }
   
    return(
        <div>
            <h2>{title}</h2> 
            <form onSubmit={handleSubmit}>
                <input 
                    value={newCommentText}
                    onChange={ e => setNewCommentText(e.target.value)}
                />
                <button type="submit">Comentar</button>
            </form>
            {   comments.map((comment, index) => {
                return <Comment key={index} comment={comment}/> })
            }
        </div>    
    );
    
}

export default Post;
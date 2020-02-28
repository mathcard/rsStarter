import React, { Component } from 'react';
import Comment from './Comment';


export default class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: [{text: 'juca'}],
            newCommentText: ''
        };

        // 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        // this.setState (Para utilizar precisa informar o react
        // que ao utilizar o handleSubmit estou referenciando a classe post LINHA - 16 )
        this.setState({
            comments: [
                ...this.state.comments,
                {text: this.state.newCommentText}
            ]
        });
        
        e.preventDefault();
        this.setState({newCommentText: ''});
    }

    handleTextChange(e){
        this.setState({newCommentText: e.target.value})
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.newCommentText}
                        onChange={this.handleTextChange}
                    />
                    <button type="submit">Comentar</button>
                </form>
                {   this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text}/>
                })

                }

            </div>
        );
    }
}
import React, { Component } from 'react';
import Comment from './Comment';

// Parei com 6:00 minutos
export default class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            comments: [
                {text: 'Bom post!'}
            ]
        };
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                {   this.state.comments.map((comment, index) => {
                    return <Comment text={comment.text}/>
                })

                }
            </div>
        );
    }
}
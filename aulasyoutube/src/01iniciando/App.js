import React, { Component } from 'react';
import Post from './components/Post';


export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Aprendendo ReactJs"/>
               {/*  <Post title="ReactJs é Top!"/>
                <Post title="Em breve mais vídeos"/> */}
           </div>
        );
    }
}

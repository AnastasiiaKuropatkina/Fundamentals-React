import React, {Component} from 'react';

import { NewPosts } from './Posts';

class NewApp extends Component {
    state = {
        posts: [
            {id: 'abc1', name: 'JS Basics'},
            {id: 'abc2', name: 'JS Advanced'},
            {id: 'abc3', name: 'React JS'},
        ]
    };

    handleSomething = () => {
        console.log('App.jsx setState update')
    }

    removePost = (id) => {
        this.setState({
            posts: this.state.posts.filter(post => post.id !== id )
        })
    }

    render() {
        const {posts} = this.state
        return (
            <div className='NewApp'>
                <h2>NewPosts Component</h2>
                <NewPosts posts={posts} cb={this.handleSomething} removePost={this.removePost}/>
            </div>
        )
    }
}
export {NewApp}
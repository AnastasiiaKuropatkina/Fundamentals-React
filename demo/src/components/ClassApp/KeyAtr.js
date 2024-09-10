import React, {Component} from 'react';

class KeyAtr extends Component {
    state = {
        posts: [
            {id: 'abc1', name: 'JS Basics'},
            {id: 'abc2', name: 'JS Advanced'},
            {id: 'abc3', name: 'React JS'},
        ]
    };

    render() {
        return (
            <div className='KeyAtr'>
                <h2>KeyAtr with Map</h2>
                {this.state.posts.map((post, index) => (
                    <h2 key= {index} >{post.name}</h2>
                ))}

               <div>{this.state.posts[0].name}</div> 
               <div>{this.state.posts[1].name}</div> 
               <div>{this.state.posts[2].name}</div> 
            </div>
        )
    }
}
export {KeyAtr}
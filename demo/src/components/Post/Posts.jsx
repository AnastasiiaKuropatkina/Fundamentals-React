import React from 'react';
import {NewPost} from './Post'

export function NewPosts (props) {
    //console.log(props);
    return <div>
        {
            props.posts.map(post => (
            <NewPost key = {post.id} id = {post.id} name = {post.name} cb={props.cb} removePost={props.removePost}/>
            ))
        }
    </div>
}
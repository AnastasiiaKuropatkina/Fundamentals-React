import React, {Component} from 'react';

class Posts extends React.Component {
    state = {
        posts: [],
        loading: true,
        comments: [],
    }
    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data, loading: false}))
        
        this.timeId = setInterval(() => {
            fetch('http://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({comments: data}))
        }, 3000)
    }

    componentDidUpdate() {
        //console.log('componentDidUpdate');

    }

    componentWillUnmount() {
        clearInterval();
    }
    render() {
        return (
            <div className = "App">
                {this.state.loading ? <h3>Loading...</h3> : <h3>
                {this.state.posts.length} was loaded
                </h3>}
            </div>
        )
    }
}

export {Posts}
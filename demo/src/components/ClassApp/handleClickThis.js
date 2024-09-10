import React, {Component} from 'react';

class HandleClickThis extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            someKey: false
        }
    }
    */
    state = {
        count: 0
    }
    handleClick = () => {
        // this.setState({count: this.state.count + 1});// прибавляем +1 

        this.setState((prevState) => ({count: prevState.count + 1}), () => {console.log('setState complite')});
        // this.setState((prevState) => ({count: prevState.count + 1})); //setState - обновляет состояние
        // this.setState((prevState) => ({count: prevState.count + 1})); // точно прибавит +3

        console.log('from handle click');//  будет первым
    }
    render() {
        return (
            <div className = "App">
                Hello from HandleClickThis <button onClick = {this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}

export {HandleClickThis};
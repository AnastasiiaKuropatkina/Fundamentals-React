import React, {Component} from 'react';

class ClassApp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    this.buttonClick = this.buttonClick.bind(this);

    }

    buttonClick() {
        this.setState({count: this.state.count + 1});// прибавляем +1 
    }
    render() {
        return (
            <div className = "App">
                Hello from ClassApp <button onClick = {this.buttonClick}>{this.state.count}</button><br/>
                Hello from ClickButton <button onClick = {() => this.setState({count: this.state.count + 1})}>{this.state.count}</button>
            </div>
        )
    }
}

export {ClassApp};
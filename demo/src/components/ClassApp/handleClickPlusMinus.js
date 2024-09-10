import React, {Component} from 'react';

class HandleClickPlusMinus extends React.Component {
    state = {
        count: 0
    }
    handlePlus = () => {
        this.setState({count: this.state.count + 1});
    }
    handleMinus = () => {
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
            <div className = "App">
                <button onClick = {this.handlePlus}>+</button>
                <span style = {customStyle}>{this.state.count}</span>
                <button onClick = {this.handleMinus}>-</button>
            </div>
        )
    }
}

export {HandleClickPlusMinus};

const customStyle = {
    margin: '0 0.75rem',
    dispay: 'inline-block'
}
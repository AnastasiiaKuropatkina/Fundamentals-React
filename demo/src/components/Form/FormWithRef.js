import React from 'react';

class FormWithRef extends React.Component {
    constructor() {
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();
    }
    state = {
        card: '',
        email: ''
    }

    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
           if(this.state.card.length === 16) {
                this.emailRef.current.focus();
            } 
        })

    }

    componentDidMount() {
        console.log(this.cardRef);
        this.cardRef.current.focus();
    }

    validateEmail = () => {
       if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
            alert('email is not valid')
       }
    }
    render() {
        const {card, email} = this.state;
        return <div>
            <input
                type='text'
                name = 'card'
                placeholder='card'
                value={card}
                onChange={this.handleChange}
                onBlur={this.validateName}
                ref={this.cardRef}
            />

            <input
                type='email'
                name = 'email'
                placeholder='email'
                value = {email}
                onChange = {this.handleChange}
                onBlur={this.validateEmail}
                ref={this.emailRef}
            />

        </div>

    }
}
export {FormWithRef}
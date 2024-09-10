import React from 'react';

class UncontrolledForm extends React.Component {
    constructor() {
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.cardRef = React.createRef();
        this.emailRef = React.createRef();

        // не храним в стейте, только при отправке
        // не вешаем обработчик событий
        // создать ref на каждое поле
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.cardRef.current.value.lenght < 16) {
            alert('invalid card number');
            return;
        }

        // send
        this.cardRef.current.value = '';
        this.emailRef.current.value = '';
    }


    render() {
        return <form onSubmit={handleSubmit}>
            <input
                type='text'
                name = 'card'
                placeholder='card'
                ref={this.cardRef}
            />

            <input
                type='email'
                name = 'email'
                placeholder='email'
                ref={this.emailRef}
            />
            <button>Send</button>

        </form>

    }
}
export {UncontrolledForm}
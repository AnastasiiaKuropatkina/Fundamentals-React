import React from 'react';

// don't change the Component name "App"
export default class App extends React.Component {
  constructor() {
      this.state = {
        email: '',
        isAgreeWithTerms: false,
    };
  }
  
handleEmail = (event) => {
    this.setState({email: event.target.value})
}

handleCheckboxChage = (event) => {
    this.setState({isAgreeWithTerms: event.target.checked}) 
}

validateEmail = () => {
   if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) {
        alert('email is not valid')
   }
}

handleSubmit = () => {
    const isValidEmail  = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email.toLocaleLowerCase());
    const isValidCheckbox = this.state.isAgreeWithTerms;

    if(!isValidEmail) {
        alert('Your email is not valid');
        return
    }
    if (!isValidCheckbox) {
        alert('You should accept all terms and conditions');
        return
    }
    this.setState({
        email: '',
        isAgreeWithTerms: false
    })
    alert('Thank you for subscription!');
}
  
  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;



        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleCheckboxChange}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        );
  }
}
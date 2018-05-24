import React from 'react'

import {signup} from '../api'

export class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            birthday: new Date()
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        signup(this.state.email, 
            this.state.password, 
            this.state.name, 
            this.state.birthday).then(function(responce) {
                console.log(responce);
                if (responce.status === 400) {
                    alert('Bad parameters');
                }

                if (responce.status === 409) {
                    alert('User exists');
                }
            });
    }

    onChangeInput(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return <div className="login-register-form">
        <form className="form" onSubmit={this.onSubmit}>
            <label>Email</label>
            <input type="email" name="email" required onChange={this.onChangeInput}/>

            <label>Password</label>
            <input type="password" name="password" required onChange={this.onChangeInput}/>

            <label>Name</label>
            <input type="string" name="name" onChange={this.onChangeInput}/>

            <label>Birthday</label>
            <input type="date" name="birthday" onChange={this.onChangeInput}/>

            <input type="submit" value="Enter"/>
        </form>
    </div>;
    }
}

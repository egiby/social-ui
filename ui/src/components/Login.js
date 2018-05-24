import React from 'react'

import {signin} from '../api'
import {setToken, getToken} from '../auth_state'

export class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            remember: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRemember = this.onRemember.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        signin(this.state.email, this.state.password)
        .then(function(responce) {
            if (responce.status !== 200) {
                alert('Bad request');
                return;
            }
            return responce.json();
        })
        .then(function(json) {
            setToken(json.token);
        });

        if (this.state.remember) {
            setToken(getToken(), 30);
        }
    }

    onEmailChange(event) {
        // console.log("email change");
        this.setState({email: event.target.value});
    }

    onPasswordChange(event) {
        // console.log("password change");
        this.setState({password: event.target.value});
    }

    onRemember(event) {
        // console.log("on remember");
        this.setState({remember: event.target.value});
    }

    render() {
        return <div className="login-register-form">
            <form className="form" onSubmit={this.onSubmit}>
                <label>Email</label>
                <input type="email" required onChange={this.onEmailChange}/>

                <label>Password</label>
                <input type="password" required onChange={this.onPasswordChange}/>

                <label>Remember</label>
                <input type="checkbox" onChange={this.onRemember}/>

                <input type="submit" value="Enter"/>
            </form>
        </div>;
    }
}
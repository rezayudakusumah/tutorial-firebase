import React, { Component } from 'react';
import firebase from '../../../config/firebase';

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value);

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {

        const {email, password} = this.state;

        console.log('Data before send: ', email, password);

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log('success: ', res);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    render(){
        return(
            <div className="row">
                <div className="card shadow mx-auto">
                    <div className="card-body">
                        <p>Register</p>
                        <input type="text" id="email" placeholder="email" onChange={this.handleChange}/>
                        <input type="password" id="password" placeholder="password" onChange={this.handleChange} />
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Register</button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Register;
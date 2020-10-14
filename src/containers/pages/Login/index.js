import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render(){
        return(
            <div>
                <p>Login {this.props.popupProps}</p>
                <button>Dashboard</button>
                <button>Register</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup
})

export default connect(reduxState, null)(Login);
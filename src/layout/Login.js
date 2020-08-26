import React, { Component } from 'react';
import firebase from '../config/firebase';

export default class Login extends Component {


    login = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res)
                let user = res.user;
                let obj = {
                    username: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    img: user.photoURL
                }
                localStorage.setItem('GDrive2', JSON.stringify(obj));
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <div className="login-wrapper" >
                    <img src={require("../asset/img/logo.png")} alt="logo" style={{ height: '120px' }} />
                    <h1 className="page-head" >Welcome to GDrive 2.0</h1>
                    <p>Continue With</p>
                    <button className="login-btn" onClick={this.login} >
                        <img src={require("../asset/img/google-plus.png")} alt="logo" style={{ height: '22px', marginRight: '10px' }} />
                        Sign In With Google
                    </button>
                </div>
            </div>
        )
    }
}

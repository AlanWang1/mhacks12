import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import config from '../../config';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            new: true
        }
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.new && this.setState({
                    signedIn: true,
                    displayName: user.displayName,
                    photo: user.photoURL,
                    new: false
                });
            } else {
                this.setState(() => ({
                    signedIn: false,
                    new: false
                }));
            }
        });
    }
    signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log(result);
            this.continue();
        }).catch(e => {
            console.log(e);
        });
    }
    signOut() {
        firebase.auth().signOut();
    }
    continue() {
        window.location = 'dashboard';
    }
    render() {
        return this.state.signedIn ? (
            <div className="columns is-centered">
                <div className="column is-narrow">
                    <div className="box has-text-centered">
                        <figure className="image is-128x128 centered">
                            <img className="is-rounded" src={this.state.photo}/>
                        </figure>
                        <h1 className="title">Are you {this.state.displayName}?</h1>
                        <div className="buttons are-medium is-centered">
                            <button className="button is-primary" onClick={() => this.continue()}>Continue</button>
                            <button className="button" onClick={() => this.signOut()}>Not me</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="has-text-centered">
                <h1 className="title">Sign in or join TimeCheck</h1>
                <button className="button is-primary is-large" onClick={() => this.signIn()}>One click with Google</button>
            </div>);
    }
}

export default Auth;
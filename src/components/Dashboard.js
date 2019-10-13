import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../../config';

import UserNavbar from '../components/UserNavbar';
import ClassButton from '../components/ClassButton';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        this.state = {
            loading: true
        }
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location = 'signin';
            } else {
                this.setState({
                    name: firebase.auth().currentUser.displayName,
                    profilePhoto: firebase.auth().currentUser.photoURL
                });
                firebase.database().ref(`students/${user.uid}`).once('value', snapshot => {
                    if (snapshot.exists()) {
                        this.setState({
                            classes: Object.keys(snapshot.val().classes ? snapshot.val().classes : []),
                            loading: false
                        });
                    } else {
                        firebase.database().ref(`students/${user.uid}`).set({
                            classes: {},
                            name: firebase.auth().currentUser.displayName,
                        });
                        this.setState({
                            classes: [],
                            loading: false
                        });
                    }
                })
            }
        });
    }
    render() {
        return this.state.loading ? (
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Loading
                            </h1>
                        </div>
                    </div>
                </section>
            ) : (<>
            <UserNavbar profilePhoto={this.state.profilePhoto}/>
            <section className="section">
                <div className="container">
                    <div className="columns has-text-centered-mobile">
                        <div className="column">
                            <h2 className="subtitle">Good afternoon,</h2>
                            <h1 className="title">{this.state.name}</h1>
                        </div>
                        <div className="column is-3 has-text-centered">
                            <h2 className="subtitle">Last 7 days</h2>
                            <span className="activity-day"/>
                            <span className="activity-day lit"/>
                            <span className="activity-day"/>
                            <span className="activity-day"/>
                            <span className="activity-day lit"/>
                            <span className="activity-day lit"/>
                            <span className="activity-day lit"/>
                            <p>Three-day streak! Keep it up 🔥</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="subtitle is-3">Your classes</h2>
                    <div className="columns is-centered">
                        <div className="column is-9">
                            <div className="columns is-multiline class-buttons">
                                {this.state.classes.map((classData, index) => 
                                <div key={classData} className="column is-6">
                                    <ClassButton name={classData}/>
                                </div>)}
                                {this.state.classes.length === 0 &&
                                (<div className="column is-5">
                                    <h1 className="title">Unfortunately...</h1>
                                    <h2 className="subtitle">You're not in any classes.</h2>
                                </div>)}
                            </div>
                        </div>
                        <div className="column is-3 is-8-mobile is-offset-2-mobile">
                            <div className="box has-text-centered">
                                <h2 className="subtitle">Find your classes</h2>
                                <div className="field">
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Class Code"/>
                                    </div>
                                </div>
                                <button className="button is-primary">Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
        );
    }
}

export default Dashboard;
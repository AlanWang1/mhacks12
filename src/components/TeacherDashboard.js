import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../../config';
import UserNavbar from './UserNavbar';
import Loading from './Loading';
import ClassButton from './ClassButton';

class TeacherDashboard extends React.Component {
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
                    name: user.displayName,
                    profilePhoto: user.photoURL
                });
                firebase.database().ref(`teachers/${user.uid}`).once('value', snapshot => {
                    if (snapshot.exists()) {
                        const value = snapshot.val();
                        this.setState({
                            classes: value.classes ? Object.keys(value.classes).map(classId => ({id: classId, name: value.classes[classId].name})) : [],
                            loading: false
                        });
                    } else {
                        firebase.database().ref(`teachers/${user.uid}`).set({
                            classes: {},
                            name: user.displayName,
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
        return this.state.loading ? <Loading/> : (
        <>
            <UserNavbar profilePhoto={this.state.profilePhoto}/>
            <section className="section">
                <div className="container">
                    <div className="columns has-text-centered-mobile">
                        <div className="column">
                            <h2 className="subtitle">Good afternoon,</h2>
                            <h1 className="title">{this.state.name}</h1>
                        </div>
                        <div className="column is-3 is-8-mobile is-offset-2-mobile">
                            <div className="box has-text-centered">
                                <h2 className="subtitle">Start a class</h2>
                                <div className="field">
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Class Name"/>
                                    </div>
                                </div>
                                <button className="button is-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="subtitle is-3">Your classes</h2>
                    <div className="columns">
                        <div className="column is-9">
                            <div className="columns is-multiline class-buttons">
                                {this.state.classes.map((classData, index) => 
                                <div key={classData} className="column is-6">
                                    <ClassButton name={classData.name} goto={`class-dashboard/${classData.id}`}/>
                                </div>)}
                                {this.state.classes.length === 0 &&
                                (<div className="column is-5">
                                    <h1 className="title">How come?</h1>
                                    <h2 className="subtitle">You don't run any classes.</h2>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>);
    }
}

export default TeacherDashboard;
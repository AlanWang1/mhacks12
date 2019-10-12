import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from '../../config';

import UserNavbar from '../components/UserNavbar';
import SubjectButton from '../components/SubjectButton';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        this.state = {
            loading: true
        }
        if (firebase.auth().currentUser === null) {
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    window.location = 'signin';
                } else {
                    this.setState({
                        loading: false,
                        name: firebase.auth().currentUser.displayName
                    });
                }
            });
        }
    }
    componentWillMount() {
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
            <UserNavbar/>
            <section className="section">
                <div className="container">
                    <div className="columns has-text-centered-mobile">
                        <div className="column">
                            <h2 className="subtitle">Good afternoon,</h2>
                            <h1 className="title">{this.state.name}</h1>
                        </div>
                        <div className="column is-4 has-text-centered">
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
                    <h2 className="subtitle is-3">Your subjects</h2>
                    <div className="columns is-multiline subject-buttons">
                        {['History', 'English', 'Mathematics', 'Chemistry'].map(subject => 
                        <div key={subject} className="column is-5">
                            <SubjectButton name={subject}/>
                        </div>)}
                    </div>
                </div>
            </section></>
        );
    }
}

export default Dashboard;
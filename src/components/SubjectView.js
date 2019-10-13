import React from 'react';
import Analytics from './Analytics';
import Feedback from './Feedback';
import ToDo from './ToDo';
import UserNavbar from './UserNavbar';
import Loading from './Loading';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../../config';

class SubjectView extends React.Component {
     constructor (props){
        super(props);
        const classId = window.location.toString().match(/.*\/class\/(.*)/)[1];
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        this.state = {
            loading: true,
            activeTab:"ToDo",
            classId: classId
        }
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location = 'signin';
            } else {
                this.setState({
                    name: user.displayName,
                    profilePhoto: user.photoURL,
                    studentId: user.uid
                });
                firebase.database().ref(`students/${user.uid}/classes/${classId}/done`).once('value', snapshot => {
                    const value = snapshot.val();
                    this.setState({
                        doneSets: value ? Object.keys(value) : []
                    });
                    
                    firebase.database().ref(`classes/${classId}`).once('value', snapshot => {
                    const value = snapshot.val();
                    this.setState({
                        owner: value.owner,
                        name: value.name,
                        sets: value.sets,
                        loading: false
                    });
                })
                })
                
            }
        });
     }
    changeState (active){
        this.setState({activeTab:active})
    }
    render() {
        return this.state.loading ? <Loading/> : (
            <>
            <UserNavbar profilePhoto={this.state.profilePhoto}/>
            <section className="section">
                <div className="container">
                    <h1 className="title">{this.state.name}</h1>
                    <h2 className="subtitle">{this.state.owner}</h2>
                    <div className="tabs is-centered is-medium">
                        <ul>
                            <li className={this.state.activeTab==="ToDo" ? "is-active" : ''}>
                                <a onClick={() =>this.changeState("ToDo")}>
                                    <span>To-Do</span>
                                </a>
                            </li>
                            <li className={this.state.activeTab==="Feedback" ? "is-active" : ''}>
                                <a onClick={() =>this.changeState("Feedback")}>
                                    <span>Feedback</span>
                                </a>
                            </li>
                            <li className={this.state.activeTab==="Analytics" ? "is-active" : ''}>
                                <a onClick={() =>this.changeState("Analytics")}>
                                    <span>Analytics</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {this.state.activeTab==="ToDo" && <ToDo classId={this.state.classId} 
                                                            sets={Object.keys(this.state.sets)
                                                                        .filter(set => this.state.doneSets.indexOf(set) === -1)
                                                                        .map(key => this.state.sets[key])}/>}
                    {this.state.activeTab==="Feedback" && <Feedback sets={this.state.doneSets.map(key => ({...this.state.sets[key], id: key}))}/>}
                    {this.state.activeTab==="Analytics" && <Analytics/>}
                </div>
            </section>
            
           </>
            );
    }
}

export default SubjectView
;
import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

import UserNavbar from '../components/UserNavbar';
import config from  '../../config';

class QuestionsSession extends React.Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        const matches = window.location.toString().match(/.*\/(.*)\/(.*)\/questions/);
        this.state = {
            loading: true,
            loadingAuth: true,
            timer: false,
            classId: matches[1],
            setId: matches[2],
            completedQuestions: []
        };
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location = 'signin';
            } else {
                this.setState({
                    loadingAuth: false,
                    uid: firebase.auth().currentUser.uid,
                    name: firebase.auth().currentUser.displayName,
                    profilePhoto: firebase.auth().currentUser.photoURL
                });
                this.getSet();
            }
        });
    }
    getSet() {
        const ref = firebase.database().ref(`/sets/${this.state.setId}`);
        ref.once('value', snapshot => {
            if (snapshot.exists()) {
                this.setState({
                    set: snapshot.val(),
                    currentQuestion: 0,
                    loading: false
                });
            } else {
                // go back
            }            
        });
    }
    startQuestion() {
        this.setState({
            time: 0,
            timer: setInterval(() => {
                this.setState({
                    time: this.state.time + 1
                });
            }, 1000)
        });
    }
    submit() {
        clearInterval(this.state.timer);
        this.setState({
            timer: false,
            needUpload: true
        });
    }
    upload() {
        const imageId = Number(new Date());
        const storageRef = firebase.storage().ref(`images/${imageId}`);
        storageRef.put(document.getElementById('uploadPhoto').files[0])
            .then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
                firebase.database().ref(`students/${this.state.uid}/classes/${this.state.classId}/done/${this.state.setId}/questions/${this.state.currentQuestion}`)
                    .set({
                        time: this.state.time,
                        image: url
                    });
            })
            .then(() => this.nextQuestion())
            .catch(e => console.log(e));
    }
    nextQuestion() {
        if (this.state.currentQuestion + 1 >= this.state.set.questions.length) {
            firebase.database().ref(`students/${this.state.uid}/classes/${this.state.classId}/done/${this.state.setId}`)
                .update({
                    finished: true
            });
            this.setState({
                needUpload: false,
                timer: false,
                finished: true
            });
            return;
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            needUpload: false,
            timer: false
        });
    }
    render() {
        return (
        <>
            <UserNavbar profilePhoto={this.state.profilePhoto}/>
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            {this.state.loading ? 
                                (<div className="column has-text-centered"><h1 className="subtitle">Loading question set...</h1></div>)
                                : 
                                (<div className="column is-8">
                                    <div className="columns is-vcentered has-text-centered-mobile">
                                        <div className="column">
                                            <h1 className="title is-5">{this.state.set.name}</h1>
                                            <h1 className="subtitle is-6">{this.state.set.description}</h1>
                                        </div>
                                        <div className="column is-narrow">
                                            <h1 className="subtitle">
                                                {`Question ${this.state.currentQuestion + 1} of ${this.state.set.questions.length}`}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="box">
                                        {this.state.timer ?
                                            (<>
                                                <div className="columns">
                                                    <div className="column">
                                                        <h1 className="subtitle is-3">
                                                            {this.state.set.questions[this.state.currentQuestion].question}
                                                        </h1>
                                                    </div>
                                                    <div className="column is-narrow">
                                                        <h1 className="timer">
                                                            {this.state.time}
                                                        </h1>
                                                    </div>
                                                </div>
                                                <h2 className="subtitle">Target time: {this.state.set.questions[this.state.currentQuestion].time} seconds</h2>
                                                <div className="buttons is-centered">
                                                    <button className="submit-question-button" onClick={() => this.submit()}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </>)
                                            :
                                            (this.state.needUpload) ? (
                                                <div>
                                                    <h1 className="subtitle is-3">
                                                        {this.state.set.questions[this.state.currentQuestion].question}
                                                    </h1>
                                                    <h1 className="title has-text-primary">You finished this question in {this.state.time} seconds!</h1>
                                                    <div className="columns is-centered is-vcentered">
                                                        <div className="column is-narrow">
                                                            <input type="file" name="uploadPhoto" id="uploadPhoto" accept="image/*"/>
                                                        </div>
                                                        <div className="column is-narrow">
                                                            <button className="button" onClick={() => this.upload()}>
                                                                Upload work
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : 
                                            (this.state.finished) ? (
                                                <div className="has-text-centered">
                                                    <h1 className="title">You're done the set!</h1>
                                                    <h2 className="subtitle">Take a well-deserved break.</h2>
                                                </div>
                                            ) : (
                                                <div className="has-text-centered">
                                                    <h1 className="title">Ready for this?</h1>
                                                    <h2 className="subtitle">Make sure you're in a distraction-free environment.</h2>
                                                    <div className="buttons is-centered">
                                                        <button className="button is-primary is-medium" onClick={() => this.startQuestion()}>
                                                            Start question {this.state.currentQuestion + 1}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </>);
    }
}

export default QuestionsSession;
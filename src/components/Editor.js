import React from 'react';
import '../assets/styles/styles.scss';
import Canvas from './Canvas';
import UserNavbar from './UserNavbar';
import Loading from './Loading';

import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import config from '../../config';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        const matches = window.location.toString().match(/feedback-studio\/(.*)\/(.*)\/(.*)/);

        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        this.state = {
            loading: true,
            currentQuestion: 0,
            classId: matches[1],
            setId: matches[2],
            studentId: matches[3]
        }
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                window.location = 'signin';
            } else {
                firebase.database().ref(`students/${this.state.studentId}/classes/${this.state.classId}/done/${this.state.setId}`).once('value', snapshot => {
                    const value = snapshot.val();
                    this.setState({
                        questions: value.questions,
                        loading: false
                    });
                });
            }
        });
    }
    submitFeedback() {
        const feedbackImage = document.getElementById('marking').toBlob(blob => {
            let image = new Image();
            image.src = blob;
            const imageId = Number(new Date());
            firebase.storage().ref(`images/${imageId}`).put(image)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                firebase.database().ref(`students/${this.state.student}/classes/${this.state.classId}/done/${this.state.setId}/questions/${this.state.currentQuestion}`)
                    .update({
                        feedback: {
                            image: url,
                            text: this.state.currentQuestionText
                        }
                    });
            });
        })
    }
    render() {
        return this.state.loading ? <Loading/> : (
            <>
                <UserNavbar/>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Feedback Studio</h1>
                        <div className="columns is-centered">
                            <div className="column is-9 has-text-centered">
                                <h1 className="title">{this.state.classId}</h1>
                                <h2 className="subtitle">{this.state.studentId}</h2>
                                <div className="box">
                                    <div className="columns is-centered">
                                        <div className="column is-10">
                                            <h2 className="subtitle is-2 has-text-left">1. What is 1 + 1?</h2>
                                            <h2 className="subtitle is-6">Annotate the student's response.</h2>
                                            <Canvas img={this.state.questions[this.state.currentQuestion].image}/>
                                            <div className="field">
                                                <div className="control">
                                                    <textarea className="textarea has-fixed-size is-large" onChange={e => this.setState({currentQuestionText: e.target.value})} value={this.state.currentQuestionText}placeholder="Additional comments?"></textarea>
                                                </div>
                                            </div>
                                            <div className="buttons is-centered">
                                                <div className="button is-large is-primary" onClick={() => this.submitFeedback()}>
                                                    Submit Feedback
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            );
    }
}

export default Editor;
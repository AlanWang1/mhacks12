import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

import config from  '../../config';

class QuestionsSession extends React.Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length)  firebase.initializeApp(config.firebase);
        this.state = {
            loading: true,
            timer: false,
            completedQuestions: []
        };
    }
    componentDidMount() {
        this.getSet(this.props.setId);
    }
    getSet(id) {
        const ref = firebase.database().ref(`/sets/${id}`);
        ref.once('value', snapshot => {
            this.setState({
                set: snapshot.val(),
                currentQuestion: 0,
                loading: false
            });
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
    submit() { // for now, move onto next question when submit is pressed
        clearInterval(this.state.timer);
        this.setState({
            timer: false,
            needUpload: true
        });
        // upload image here
        /* if (this.state.currentQuestion + 1 >= this.state.set.questions.length) {    // temporarily, cycle back to first question
            this.setState({
                currentQuestion: 0,
                timer: false
            });
            return;
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            timer: false
        }); */
    }
    upload() {
        const imageId = Number(new Date());
        const storageRef = firebase.storage().ref(`images/${imageId}`);
        storageRef.put(document.getElementById('uploadPhoto').files[0])
            .then(snapshot => {
                firebase.database().ref(`students/${this.props.studentId}/classes/${this.props.classId}/done/${this.props.setId}/questions/${this.state.currentQuestion}`)
                    .set({
                        time: this.state.time,
                        image: imageId
                    });
            })
            .then(() => this.nextQuestion())
            .catch(e => console.log(e));
    }
    nextQuestion() {
        if (this.state.currentQuestion + 1 >= this.state.set.questions.length) {
            firebase.database().ref(`students/${this.props.studentId}/classes/${this.props.classId}/done/${this.props.setId}`)
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
        </div>);
    }
}

export default QuestionsSession;
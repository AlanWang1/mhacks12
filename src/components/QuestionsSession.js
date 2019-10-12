import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import config from  '../../config';

class QuestionsSession extends React.Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(config.firebase);
        this.state = {
            loading: true  
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
    submit() { // for now, move onto next question when submit is pressed
        if (this.state.currentQuestion + 1 >= this.state.set.questions.length) {    // temporarily, cycle back to first question
            this.setState({
                currentQuestion: 0
            });
            return;
        }
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
    }
    render() {
        return (
        <div className="columns is-centered">
            {this.state.loading ? 
                (<div className="column"><h1 className="title">Loading question set...</h1></div>)
                : 
                (<div className="column is-8">
                <div className="columns is-vcentered has-text-centered-mobile">
                    <div className="column">
                        <h1 className="title is-5">{this.state.set.name}</h1>
                    </div>
                    <div className="column is-narrow">
                        <h1 className="timer">
                            2:37
                        </h1>
                    </div>
                </div>
                <div className="box">
                    <h1 className="subtitle is-3">
                        {this.state.set.questions[this.state.currentQuestion].question}
                    </h1>
                    <h2 className="subtitle">Target time: {this.state.set.questions[this.state.currentQuestion].time} seconds</h2>
                    <div className="buttons is-centered">
                        <button className="submit-question-button" onClick={() => this.submit()}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>)}
        </div>);
    }
}

export default QuestionsSession;
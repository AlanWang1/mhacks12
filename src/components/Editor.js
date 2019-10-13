import React from 'react';
import '../assets/styles/styles.scss';
import Canvas from './Canvas';
import UserNavbar from './UserNavbar';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <UserNavbar/>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Feedback Studio</h1>
                        <div className="columns is-centered">
                            <div className="column is-9 has-text-centered">
                                <h1 className="title">Set title</h1>
                                <h2 className="subtitle">Student Name</h2>
                                <div className="box">
                                    <div className="columns is-centered">
                                        <div className="column is-10">
                                            <h2 className="subtitle is-2 has-text-left">1. What is 1 + 1?</h2>
                                            <h2 className="subtitle is-6">Annotate the student's response.</h2>
                                            <Canvas/>
                                            <div className="field">
                                                <div className="control">
                                                    <textarea className="textarea has-fixed-size is-large" placeholder="Additional comments?"></textarea>
                                                </div>
                                            </div>
                                            <div className="buttons is-centered">
                                                <div className="button is-large is-primary">
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
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import UserNavbar from '../components/UserNavbar';

ReactDOM.render(
    <Layout>
        <UserNavbar/>
        <section className="hero is-large">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8">
                                <div className="columns is-vcentered has-text-centered-mobile">
                                    <div className="column">
                                        <h1 className="title is-5">Paris Peace Conference Essay Practice</h1>
                                    </div>
                                    <div className="column is-narrow">
                                        <h1 className="timer">
                                            2:37
                                        </h1>                            
                                    </div>
                                </div>
                            <div className="box">
                                <h1 className="subtitle is-3">
                                    Question 2: Write the introductory paragraph on the following prompt: "The Treaty of Versailles was fundamentally flawed and led to a weakened Germany."
                                </h1>
                                <h2 className="subtitle">Target time: 7:00</h2>
                                <div className="buttons is-centered">
                                    <button className="submit-question-button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </Layout>, document.getElementById("root"));
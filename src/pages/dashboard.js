import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import SubjectButton from '../components/SubjectButton';
ReactDOM.render(
    <Layout>
        <nav className="navbar is-spaced">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="title">TimeCheck</h1>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        Notifications
                    </div>
                    <div className="navbar-item">
                        Profile
                    </div>
                </div>
            </div>
        </nav>
        <section className="section">
            <div className="container">
                <div className="columns has-text-centered-mobile">
                    <div className="column">
                        <h2 className="subtitle">Good afternoon,</h2>
                        <h1 className="title">Name</h1>
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
        </section>
    </Layout>, document.getElementById('root'));
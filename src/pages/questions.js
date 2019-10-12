import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import UserNavbar from '../components/UserNavbar';
import QuestionsSession from '../components/QuestionsSession';

ReactDOM.render(
    <Layout>
        <UserNavbar/>
        <section className="hero is-large">
            <div className="hero-body">
                <div className="container">
                    <QuestionsSession setId="set1Id"/>                    
                </div>
            </div>
        </section>
    </Layout>, document.getElementById("root"));
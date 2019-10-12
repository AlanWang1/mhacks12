import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
ReactDOM.render(
    <Layout>
        <section className="hero is-fullheight">
            <section className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Pinecone Study
                    </h1>
                    <a className="button is-medium">
                        Signup
                    </a>
                </div>
                
            </section>
        </section>
    </Layout>, document.getElementById('root'));
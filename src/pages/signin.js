import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import Auth from '../components/Auth';



ReactDOM.render(
    <Layout>
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <Auth/>
                </div>
            </div>
        </section>
    </Layout>, document.getElementById("root"));
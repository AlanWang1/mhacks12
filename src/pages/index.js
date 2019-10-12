import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
ReactDOM.render(
    <Layout>
         
        <section className="hero is-fullheight">
     
            
            <section className="hero-body has-text-centered has-background-rgba(0, 0, 0, 0.7)">
                <div className="container">
                    <h1 className="title is-centered">
                        TimeCheck
                    </h1>
                    <h2 className="subtitle">
                        subtitle
                    </h2>
              
                    <a className="button is-large">
                                Get Started
                    </a>   
                </div>
            
            </section>
          
        <section className="level has-text-centered">
                    <h2>
                        Learn More
                    </h2>
            </section> 
        </section>
        
    </Layout>, document.getElementById('root'));
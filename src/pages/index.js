import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
ReactDOM.render(
    <Layout>
        <section className="hero is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="container">
                    <h1 className="title is-1">
                        <span className="has-text-info">Time</span><span className="has-text-primary">Check</span>
                    </h1>
                    <h2 className="subtitle">
                        An unparalleled platform of student-teacher interaction for improving test results.
                    </h2>
              
                    <a className="button is-large is-primary" href="/signin">
                        Get Started
                    </a>   
                </div>
            </div>
          
            <div className="hero-foot has-text-centered">
                    <a href="#scroll">
                        <div>
                            <p className="has-text-info">
                                Learn More
                            </p>
                            <span className="icon has-text-info">
                                <i className="fas fa-angle-down"></i>
                            </span>
                        </div>
                    </a>
                  
                </div> 
        </section>

        <section className="section" id="scroll">
        <div className="container">
        <div className="columns ">
                <div className="column is-narrow">
                    <div className="tile is-1">

                    </div>
                </div>
                <div className="column">
                        <h1 className="title">
                            What is TimeCheck?
                        </h1>
                        <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                        </p>
 

                </div>
    

            </div>

        <div className="columns is-centered">
            
                <div className="column is-2">
                    <div className="box">
                    <span class="icon has-text-primary is-size-1">
                        <i class="fas fa-file-alt"></i>
                    </span>
                    <br>
                        Receive Question Sets
                    </br>
                    </div>     
                </div>

                <div className="column is-2">
                    <div className="box">
                    <span class="icon has-text-primary is-size-1">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </span>
                    <br>
                        Send solutions to your teacher
                    </br>
                    </div>
                </div>

                <div className="column is-2">
                    <div className="box">
                    <span class="icon has-text-primary is-size-1">
                        <i class="fas fa-comment-dots"></i>
                    </span>
                    <br>
                        Receive personalized feedback
                    </br>
                    </div>
                </div>

                <div className="column is-2">
                    <div className="box">
                    <span class="icon has-text-primary is-size-1">
                        <i class="fas fa-chart-line"></i>
                    </span>
                    <br>
                    Monitor your progress
                    </br>
                       
                    </div>
                </div>
           
        </div>

        </div>
           
           
               
        </section>
        
    </Layout>, document.getElementById('root'));
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
                            Welcome to Your Ultimate Study Companion
                        </h1>
                        <p> 
                            TimeCheck is a practical solution to many of the problems that students face today 
                            such as test anxiety and poor study habits. Timed questions help students prepare for strict time contrainsts on tests while 
                            teacher feedback allows students to understand expectations. TimeCheck also promotes healthy study habits by prooting daily practice and giving them tools to 
                            track their progress. 
            
                        </p>
 

                </div>
    

            </div>

        <div className="columns is-centered is-multiline">
            
                <div className="column is-2-desktop is-5-tablet">
                    <div className="info-box">
                        <span className="icon has-text-primary is-large">
                            <i className="fas fa-3x fa-file-alt"></i>
                        </span>
                        <br/>
                        <h2 className="subtitle">
                            Receive Question Sets
                        </h2>
                    </div>     
                </div>

                <div className="column is-2-desktop is-5-tablet">
                    <div className="info-box">
                        <span className="icon has-text-primary is-large">
                            <i className="fas fa-3x fa-chalkboard-teacher"></i>
                        </span>
                        <br/>
                        <h2 className="subtitle">
                            Send solutions to your teacher
                        </h2>
                    </div>
                </div>

                <div className="column is-2-desktop is-5-tablet">
                    <div className="info-box">
                        <span className="icon has-text-primary is-large">
                            <i className="fas fa-3x fa-comment-dots"></i>
                        </span>
                        <br/>
                        <h2 className="subtitle">
                            Receive personalized feedback
                        </h2>
                    </div>
                </div>

                <div className="column is-2-desktop is-5-tablet">
                    <div className="info-box">
                        <span className="icon has-text-primary is-large">
                            <i className="fas fa-3x fa-chart-line"></i>
                        </span>
                        <br/>
                        <h2 className="subtitle">
                            Monitor your progress
                        </h2>
                    </div>
                </div>
           
        </div>

        </div>
           
           
               
        </section>
        
    </Layout>, document.getElementById('root'));
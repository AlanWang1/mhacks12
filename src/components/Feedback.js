import React from 'react';
import Completed from './Completed';
class Feedback
 extends React.Component {
    render() {
        return (
            <section className="container">
                <h1 className="title"> Overall:</h1>
                <p className="subtitle"> Cool and Good</p>

                <h1 className="title">
                    Reviewed Question Sets
                </h1>

                    <section className="columns">
                    <section className="columns is-one-fifth">
                        <div className="columns is-multiline is-gapless">
                        {[
                            {
                                title: 'Stoichiometery',
                                questions: ['', '', '', '', '']

                             
                            }, {
                                title: 'Energetics',
                                questions: ['', '', '', '', '']
                            }
                        ].map(set => 
                        <div key={set.title} className="column is-8">
                            <Completed title={set.title} numQuestions={set.questions.length}/>
 

                        </div>)}

                    
                        </div>
                    </section>

                    <section className="columns">
                        <div className="container">
                         
                          </div>
                    </section>

                      
                
                </section>
               
               


             </section>  
                
            );
    }
}

export default Feedback
;
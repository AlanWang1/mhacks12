import React from 'react';
import Completed from './Completed';
class Feedback
 extends React.Component {
    render() {
        return (
            <section className="container">
                <h1 className="title"> Overall:</h1>
                <p className="subtitle"> cdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcd </p>

                <h1 className="title">
                    Reviewed Question Sets
                </h1>

                    <section className="columns">
                    <section className="columns is-narrow">
                        <div className="columns is-multiline">
                        {[
                            {
                                title: 'Stoichiometery',
                                questions: ['', '', '', '', '']

                             
                            }, {
                                title: 'Energetics',
                                questions: ['', '', '', '', '']
                            }
                        ].map(set => 
                        <div key={set.title} className="column is-12">
                            <Completed title={set.title} numQuestions={set.questions.length}/>
 

                        </div>)}

                    
                        </div>
                    <section className="columns">
                        <div className="container">
                          
                        </div>
                    </section>

                    </section>

                      
                
                </section>
               
               


             </section>  
                
            );
    }
}

export default Feedback
;
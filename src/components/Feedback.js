import React from 'react';

class Feedback
 extends React.Component {
    render() {
        return (
            <body className="has-text-centered">
                <h1 className="title"> Overall:</h1>
                <p className="subtitle"> cdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcd </p>

                <h1 className="title">
                    Reviewed Question Sets
                </h1>

                    <section className="columns is-centered">
                        <div className="columns is-multiline">
                    {[
                        {
                            title: 'Stoichiometery',
                            description:'Cool',
                            questions: ['', '', '', '', '', '']
                        }, {
                            title: 'Energetics',
                            description:'Good',
                            questions: ['', '', '', '', '']
                        }, {
                            title: 'Atomic Structure',
                            description:'Good',
                            questions: ['', '', '',  '']
                        }, {
                            title: 'Biochemistry',
                            description:'Good',
                            questions: ['', '']
                        }
                    ].map(set => 
                    <div key={set.title} className="column is-12">
                        <Completed title={set.title} description={set.description} numQuestions={set.questions.length}/>

                    </div>)}

                   
                    </div>
                
                </section>
               
               


             </body>  
                
            );
    }
}

export default Feedback
;
import React from 'react';
import QSet from './QSet';
class Analytics extends React.Component {
    render() {
        return (
                <section className="container">
                    <section className="columns is-centered">
                    <div className="column is-three-fifths">

                    <div className="columns">
                        {['Stoichiometery', 'Energetics', 'Atomic Structure', 'Biochemistry'].map(subject => 
                        <div key={subject} className="column">
                            <QSet title={subject}/>

                        </div>)}

                        {['Cool', 'Good', 'Good', 'Good'].map(subject => 
                        <div key={subject} className="column is-narrow">
                            <QSet description={subject}/>

                        </div>)}

                    
                    </div>

                    </div>

                    </section>
                    
                </section>
            
            );
    }
}

export default Analytics;
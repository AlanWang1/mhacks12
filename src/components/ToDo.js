import React from 'react';
import QSet from './QSet';
class ToDo extends React.Component {
    render() {
        return (
            <section className="section">
                 <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            {Object.keys(this.props.sets).map(set => 
                            <div key={this.props.sets[set].name}>
                                <QSet goto={() => window.location = `${this.props.classId}/${set}/questions`} title={this.props.sets[set].name} description={this.props.sets[set].description} numQuestions={this.props.sets[set].length}/>
                            </div>)}
                            {!this.props.sets.length && (
                                <h1 className="title has-text-centered">Looks like you've completed them all!</h1>
                            )}
                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default ToDo;
import React from 'react';

class QSet
 extends React.Component {
    render() {
        return (
            <div className="box like-button" onClick={this.props.goto}>
                <div className="columns is-vcentered is-mobile">
                    <div className="column">
                        <h1 className="title is-size-4">{this.props.title}</h1>
                        <h1 className="subtitle">{this.props.description}</h1>
                    </div>
                    <div className="column is-narrow">
                        <h2 className="subtitle">{this.props.numQuestions} questions</h2>
                    </div>
                </div>
            </div>
            );
    }
}

export default QSet
;
import React from 'react';

class QSet
 extends React.Component {
    render() {
        return (
            <>
            <h1 className="title is-size-4">{this.props.title}</h1>
            <h1 className="subtitle">{this.props.description}</h1>
            </>
            );
    }
}

export default QSet
;
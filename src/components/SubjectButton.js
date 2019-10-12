import React from 'react';

class SubjectButton extends React.Component {
    render() {
        return (
            <figure className="image subject-button">
                <img src="https://dummyimage.com/600x400/ff3d3d/ffeecc.png" alt=""/>
                <figcaption>
                    <h1 className="title">{this.props.name}</h1>
                </figcaption>
            </figure>
            );
    }
}

export default SubjectButton;
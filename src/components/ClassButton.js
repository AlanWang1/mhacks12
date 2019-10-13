import React from 'react';

class ClassButton extends React.Component {
    render() {
        return (
            <figure className="image class-button">
                <img src="https://dummyimage.com/600x400/ff3d3d/ffeecc.png" alt=""/>
                <figcaption>
                    <h1 className="title is-size-4">{this.props.name}</h1>
                </figcaption>
            </figure>
            );
    }
}

export default ClassButton;
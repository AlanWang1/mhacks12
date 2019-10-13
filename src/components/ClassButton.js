import React from 'react';
import thumbnail1 from '../assets/images/thumbnails/1.png';
import thumbnail2 from '../assets/images/thumbnails/2.png';
import thumbnail3 from '../assets/images/thumbnails/3.png';
import thumbnail4 from '../assets/images/thumbnails/4.png';

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

class ClassButton extends React.Component {
    render() {
        return (
            <figure className="image class-button" onClick={() => window.location = this.props.goto}>
                <img src={thumbnails[(this.props.index || 0) % 4]} alt=""/>
                <figcaption>
                    <h1 className="title is-size-4">{this.props.name}</h1>
                </figcaption>
            </figure>
            );
    }
}

export default ClassButton;
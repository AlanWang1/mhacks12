import React from 'react';
import '../assets/styles/styles.scss';
import Canvas from './Canvas';
import UserNavbar from './UserNavbar';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <UserNavbar/>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Feedback Studio</h1>
                        <div className="columns is-centered">
                            <div className="column is-9 has-text-centered">
                                <Canvas/>
                                <textarea className="textarea" placeholder="Additional comments?"></textarea>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            );
    }
}

export default Editor;
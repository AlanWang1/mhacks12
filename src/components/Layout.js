import React from 'react';
import '../assets/styles/styles.scss';

class Layout extends React.Component {
    render() {
        return (
        <main>
            <nav className="level is-mobile bg-aqua ">
                <p className="level-item has-text-centered">

                    dddddd
                </p>
                <p className="level-item has-text-centered">

                        dddddd
                </p>

                <p className="level-item has-text-centered">

                    ddddd    
                </p>


            </nav>
            {this.props.children}
     
            <section className="footer">
                <div className="container">
                    <h2 className="subtitle">Footer</h2>
                </div>
            </section>
        </main>
        );
    }
}

export default Layout;
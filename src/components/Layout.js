import React from 'react';
import '../assets/styles/styles.scss';

class Layout extends React.Component {
    render() {
        return (
        <main>
           
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
import React from 'react';
import logo from '../assets/images/logo.png';

class UserNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-spaced">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/" width="250">
                        <img src={logo} alt="TimeCheck"/>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <span className="icon is-large has-text-info like-button">
                                <i className="fa-2x far fa-bell"></i>
                            </span>
                        </div>
                        <div className="navbar-item">
                            <a href="/dashboard">
                                <figure className="image">
                                    <img src={this.props.profilePhoto} className="is-rounded" alt="Profile" />
                                </figure>
                            </a>
                        </div>
                        <div className="navbar-item">
                            <span className="icon is-large has-text-info like-button" onClick={this.props.signOut}>
                                <i className="fa-2x fas fa-sign-out-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default UserNavbar;
import React from 'react';

import logo from './logo.png';

class Header extends React.Component {
    render() {
        return (
            <section className="hero is-primary" style={{ backgroundColor: '#483075' }}>
                <div className="hero-body">
                    <div className="container columns is-mobile">
                        <div className="column is-2 has-text-centered">
                            <img src={logo} alt={"iTwitch Logo"} />
                        </div>
                        <div className="column is-10">
                            <h1 className="title">iTwitch</h1>
                            <h2 className="subtitle">Geting information about Twitch's streamers</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;
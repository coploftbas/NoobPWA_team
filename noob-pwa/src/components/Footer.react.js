import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            © 2020 All rights reserved by <a href="https://github.com/coploftbas">Pipat Waitayaworanart</a>.
                        </p>
                        <p>
                            <a className="icon" href="https://github.com/coploftbas/NoobPWA_team">
                                <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
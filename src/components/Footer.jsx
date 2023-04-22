import React from 'react';
import '../stylesheets/footer.css';
import logo from '../images/csv-file-format-extension.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo-container">
                        <img src={logo} alt={logo} />
                        <div className="title">
                            <a href="#"><h1>Role CSV</h1></a>
                            <p>Copyright @ 2023 Role CSV</p>
                        </div>
                    </div>
                    <div className="icons">
                        <a href="https://discord.gg/yzhb9kZ"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                    <div className="links">
                        <div className="rules">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="">Rules</a>
                        </div>
                        <div className="command">
                            <a href="#">Command</a>
                            <a href="#">Our Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
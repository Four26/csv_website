import React from 'react';
import '../stylesheets/header.css';
import logo from '../images/csv-file-format-extension.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="navbar">
                    <div className="wrapper">
                        <div className="header-logo-container">
                            <img src={logo} alt={logo} />
                            <Link to="/">Role CSV</Link>
                        </div>
                        <Link to="/command">Command</Link>
                        <DropdownButton id="dropdown-item-button" title="Features">
                            <Dropdown.Item as="button">Generate CSV</Dropdown.Item>
                            <Dropdown.Item as="button">TBA in the future</Dropdown.Item>
                            <Dropdown.Item as="button">TBA in the future</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="login">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=1097384506350125077&permissions=8&scope=bot">Support</a>
                        <Button href='https://discord.gg/yzhb9kZ' variant="light" id='light'>Login</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
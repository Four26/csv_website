import React from 'react';
import '../stylesheets/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className='content'>
                <h1>Role CSV</h1>
                <p>Role CSV is a tool that allows you to create a CSV file from a list of roles in your server.</p>
                <div className="buttons">
                    <a href='https://discord.com/api/oauth2/authorize?client_id=1097384506350125077&permissions=8&scope=bot' className='invite'>Invite now</a>
                    <a href='https://discord.com/api/oauth2/authorize?client_id=1097384506350125077&permissions=8&scope=bot' className='support'>Support</a>
                </div>
            </div>
        </div>
    )
}

export default Home;
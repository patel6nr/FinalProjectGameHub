// File: routes/HomePage.js

import React from 'react';
import BgGif from "./../src/assets/bg-gif.gif"

const HomePage = () => {
    return (
        <section className='Home'>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple heading and paragraph for the home page.</p>
            <div className="gif">
                <img src={BgGif} alt="" />
            </div>
        </section>
    );
}

export default HomePage;

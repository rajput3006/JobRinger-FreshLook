import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find Your Dream Job At JobRinger</h1>
                <p>Discover thousands of opportunities from top companies worldwide.</p>
                <a href="#jobs" className="hero-button">Browse Jobs</a>
            </div>
        </section>
    );
};

export default Hero;
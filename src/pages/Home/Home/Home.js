import React from 'react';
import Projects from '../../Projects/Projects';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;
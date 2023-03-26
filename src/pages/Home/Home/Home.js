import React from 'react';
import MiniProjects from '../../MiniProjects/MiniProjects';
import Projects from '../../Projects/Projects';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <MiniProjects></MiniProjects>
        </div>
    );
};

export default Home;
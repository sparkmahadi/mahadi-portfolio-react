import React from 'react';
import nextRep from '../../resources/images/NextRep.png';
import enhance from '../../resources/images/enhance.png';
import techsync from '../../resources/images/techsync.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto mb-5 text-white'>
            <h2 data-aos="fade-down" className='uppercase text-xl md:text-2xl xl:text-3xl font-semibold text-center divider mb-5 xl:mb-10'>My Projects</h2>

            <div className='grid lg:grid-cols-3 gap-10'>

                <Link to='/projects/1' data-aos="zoom-in-up" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={nextRep} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">NextRep</h2>
                        <p>Second Hand Motorcycle Buying and Selling App</p>
                    </div>
                </Link>

                <Link to='/projects/2' data-aos="zoom-in-up" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={enhance} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Enhance</h2>
                        <p>Home Interior Designer's Service Providing App</p>
                    </div>
                </Link>

                <Link to='/projects/3' data-aos="zoom-in-up" className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={techsync} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">TechSync+</h2>
                        <p>E-learning Courses Providing App</p>
                    </div>
                </Link>

            </div>

        </div>
    );
};

export default Projects;
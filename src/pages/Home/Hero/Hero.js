import React from 'react';
import image from '../../../resources/images/portfolio-trial-1.png'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div>
            <div className="hero my-5 xl:my-10 text-white lg:relative xl:py-10">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between border border-white rounded-lg p-0 mx-10">
                    <div className="lg:w-1/3">
                        <img src={image} className="rounded-lg shadow-2xl bg-zinc-400" alt='' />
                    </div>
                    <div className="lg:w-1/2 lg:pl-10">
                        <h1 className="text-3xl xl:text-5xl font-bold text-center lg:text-left mb-2">Md. Mahadi Hasan</h1>
                        <h6 className="text-xl xl:text-3xl font-bold text-center lg:text-left">
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer', 'Passionate & Enthusiastic Developer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h6>
                        <p className="p-3 lg:px-0 xl:py-6 text-center lg:text-left xl:text-lg">A very hardworking and an optimistic person who always focus on being productive. Passionate to explore and learn new technologies, loves to stay up to date with industry trend.
                            A quick learner. Likes to perform with team, love to adopt positive attitude and cultures, try to maintain consistency to the solution of problems.
                        </p>
                        <a href="https://drive.google.com/file/d/1dQBXQZz06DeZyrb6p2lyaXEl430lpVyM/view?usp=share_link" target="_blank" rel="noreferrer"><button className="btn btn-primary btn-sm mx-auto hidden lg:inline">Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
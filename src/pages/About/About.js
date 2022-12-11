import React from 'react';
import photo from '../../resources/images/image-2.jpg'

const About = () => {
    return (
        <div className='px-10 xl:px-0 max-w-7xl mx-auto mb-20 text-white'>
            <h2 data-aos="fade-down" className='uppercase md:text-2xl xl:text-3xl font-semibold text-center mb-10 divider'>About Me</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-10 px-0">
                    <img data-aos="fade-right" src={photo} className="w-full lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl" alt='' />
                    <div data-aos="fade-left" className='text-white lg:text-sm xl:text-base'>
                        <h1 className="text-3xl xl:text-4xl font-bold">Hi, I am Md. Mahadi Hasan</h1>
                        <p className="py-2 xl:py-5">I am a passionate and dedicated full stack web developer.
                            Basically, I am a tech lover and I always had a soft corner for new tech stuffs.
                            Also, I am very hardworking and an optimistic person who always focus on being productive.
                        </p>
                        <p className="pb-2 xl:pb-5">
                            I have extensive knowledge in HTML, CSS, JavaScript, and various open-source frameworks such as NodeJS, ExpressJS, ReactJS, MongoDB. Skilled in the use of these frameworks to develop web applications based on Single Page Applications (SPA) architectures. Also skilled in troubleshooting problems and resolving bugs within an existing system.
                        </p>
                        <p>
                            As I said, I have hunger or passion for latest tech stuffs. So, I am continuously learning more and more tech tools and skills to enrich and widen my knowledge and experience.
                        </p>

                        <div className='md:flex lg:block xl:flex items-center mt-5 rounded-lg'>
                            <ul className='flex gap-5'>
                                <li>
                                    <div className="xl:mb-3">
                                        <p>Location:</p>
                                        <p>Email:</p>
                                        <p>Education:</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="xl:mb-3 text-white">
                                        <p>Chattogram, Bangladesh</p>
                                        <p>mahadihasan@engineer.com</p>
                                        <p>B.Sc in Textile Engineering</p>
                                    </div>
                                </li>
                            </ul>
                            <div className='md:divider md:divider-horizontal'></div>
                            <ul className='flex gap-5'>
                                <li>
                                    <div className="xl:mb-3 text-white">
                                        <p>University:</p>
                                        <p>Birth Year:</p>
                                        <p>Mobile:</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="xl:mb-3 text-white">
                                        <p>Bangladesh University of Textiles</p>
                                        <p>1998</p>
                                        <p>+8801624-772632</p>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;
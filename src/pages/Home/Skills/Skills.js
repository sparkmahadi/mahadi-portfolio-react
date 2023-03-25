import React from 'react';
import vercelIcon from '../../../resources/images/vercel-icon-svgrepo-com.svg';
import reactRouterIcon from '../../../resources/images/react-router-mark-color.png';

const Skills = () => {
    const skills = [
        {
            name: 'HTML',
            icon: "https://img.icons8.com/fluency/48/null/html-5.png"
        },
        {
            name: 'CSS',
            icon: "https://img.icons8.com/fluency/48/null/css3.png"
        },
        {
            name: 'Javascript',
            icon: "https://img.icons8.com/color/48/null/javascript--v1.png"
        },
        {
            name: 'Bootstrap',
            icon: "https://img.icons8.com/color/48/null/bootstrap.png"
        },
        {
            name: 'TailwindCSS',
            icon: "https://img.icons8.com/color/48/null/tailwindcss.png"
        },
        {
            name: 'MaterialUI',
            icon: "https://img.icons8.com/color/48/null/material-ui.png"
        },
        {
            name: 'ChakraUI',
            icon: "https://img.icons8.com/color/48/null/chakra-ui.png"
        },
        {
            name: 'ReactJS',
            icon: "https://img.icons8.com/office/16/null/react.png"
        },
        {
            name: 'Firebase',
            icon: "https://img.icons8.com/color/48/null/firebase.png"
        },
        {
            name: 'NodeJS',
            icon: "https://img.icons8.com/color/48/null/nodejs.png"
        },
        {
            name: 'MongoDB',
            icon: "https://img.icons8.com/color/48/null/mongodb.png"
        },
        {
            name: 'ExpressJS',
            icon: "https://img.icons8.com/fluency/48/null/express-js.png"
        },
        {
            name: 'Axios',
            icon: "https://axios-http.com/assets/logo.svg"
        },
        {
            name: 'Redux',
            icon: "https://img.icons8.com/color/48/null/redux.png"
        },
        {
            name: 'React Router',
            icon: reactRouterIcon
        },
        {
            name: 'JSON Web Token',
            icon: "https://img.icons8.com/color/48/null/java-web-token.png"
        },
        {
            name: 'Socket.io',
            icon: "https://socket.io/images/logo.svg"
        },
        {
            name: 'NextJS',
            icon: "https://img.icons8.com/fluency-systems-regular/48/null/nextjs.png"
        },
        {
            name: 'Stripe',
            icon: "https://img.icons8.com/ios-filled/50/null/stripe.png"
        },
        {
            name: 'Git',
            icon: "https://img.icons8.com/nolan/64/git.png"
        },
        {
            name: 'Github',
            icon: "https://img.icons8.com/color/48/null/github--v1.png"
        },
        {
            name: 'Netlify',
            icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
        },
        {
            name: 'Vercel',
            icon: vercelIcon
        },
        {
            name: 'Figma',
            icon: "https://img.icons8.com/color/48/null/figma--v1.png"
        },
        {
            name: 'VSCode',
            icon: "https://img.icons8.com/nolan/64/visual-studio.png"
        },
        {
            name: 'Photoshop',
            icon: "https://img.icons8.com/color/48/null/adobe-photoshop--v1.png"
        },
    ];

    // 'HTML', "CSS", "Javascript", "BootStrap", "React Bootstrap", 'TailwindCSS', "DaisyUI", "MaterialUI", "ChakraUI", "ReactJS", "Firebase", "NodeJS", "ExpressJS", "MongoDB", "Redux", "React-Redux", "Git", "Github", "Figma", "VSCode", "Vercel", "Netlify", "Render"
    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto mb-5 xl:mb-20 text-white'>
            <h2 data-aos="zoom-in-up" className='uppercase text-lg md:text-2xl xl:text-3xl font-semibold text-center divider'>Skills & Tools</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 lg:gap-7 mt-5 xl:mt-10'>
                {
                    skills.map(skill =>
                        <div key={skill.name} data-aos='fade-up' className='flex items-center gap-5 md:text-lg lg:text-xl font-semibold bg-gray-400 text-gray-700 p-1 lg:p-2 rounded-lg'>
                            <img className='w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10' src={skill.icon} alt='' />
                            <h5>{skill.name}</h5>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;
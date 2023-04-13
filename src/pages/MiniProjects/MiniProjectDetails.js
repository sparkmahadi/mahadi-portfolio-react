import React from 'react';
import donateToday from '../../resources/images/miniprojects/donate-today.png';
import devPortfolio from '../../resources/images/miniprojects/developerPortfolio.png';
import eidZakat from '../../resources/images/miniprojects/eidZakat.png';
import influencerGears from '../../resources/images/miniprojects/influencersGear.png';
import leaderBoard from '../../resources/images/miniprojects/leaderboard.png';
import crazyFans from '../../resources/images/miniprojects/crazy-fans.png';
import learnPlus from '../../resources/images/miniprojects/learnplus.png';
import penguinFashion from '../../resources/images/miniprojects/penguinFashion.png';
import pandaCommerce from '../../resources/images/miniprojects/pandaCommerce.png';
import penguinTailwind from '../../resources/images/miniprojects/penguinTailwind.png';
import InstaShohor from '../../resources/images/miniprojects/instashohor.png';
import basicJavascript from '../../resources/images/miniprojects/basicJS.png';
import clubManagement from '../../resources/images/miniprojects/select-best-five.png';
import fitnessPower from '../../resources/images/miniprojects/fitnessPower.png';
import baperBank from '../../resources/images/miniprojects/baperBank.png';
import waveNews from '../../resources/images/miniprojects/wavenews.png';
import phoneHunter from '../../resources/images/miniprojects/phoneHunter.png';
import speedMonster from '../../resources/images/miniprojects/speedMonster.png';
import bookBhandar from '../../resources/images/miniprojects/bookBhandar.png';
import moneyMaster from '../../resources/images/miniprojects/moneyMaster.png';
import issueTracker from '../../resources/images/miniprojects/issueTracker.png';
import fancySlider from '../../resources/images/miniprojects/fancySlider.png';
import rangaStore from '../../resources/images/miniprojects/rangaStore.png';
import nitrixFitness from '../../resources/images/miniprojects/nitrixFitness.png';
import webdevGK from '../../resources/images/miniprojects/webdevgk.png';
import emajohnclone from '../../resources/images/miniprojects/emaJohn.png';
import priceClub from '../../resources/images/miniprojects/priceClub.png';
import tshirtMania from '../../resources/images/miniprojects/tshirtMania.png';
import dailyMoon from '../../resources/images/miniprojects/dailyMoon.png';
import moonTech from '../../resources/images/miniprojects/moonTech-react-redux.png';

const MiniProjectDetails = ({ tabIndex }) => {
    const rawHTMLCSS = [
        { name: "Donate Today", live: "https://sparkmahadi.github.io/donate-today/", codeRepo: "https://github.com/sparkmahadi/donate-today", preview: donateToday, details: "Raw HTML and CSS Project" },
        {name: "Crazy Fans - World Cup", live: "https://sparkmahadi.github.io/world-cup/", codeRepo: "https://github.com/sparkmahadi/world-cup", preview: crazyFans, details:"Raw HTML and CSS Project"},
        { name: "Developer Portfolio", codeRepo: "https://github.com/sparkmahadi/developer-portfolio", live: "https://developerportfolioapp.netlify.app/", preview: devPortfolio, details: "Raw HTML and CSS Project" },
        { name: "Eid Zakat", codeRepo: "https://github.com/sparkmahadi/eid-zakat", live: "https://eidzakat.netlify.app/", preview: eidZakat, details: "Raw HTML and CSS Project" },
        { name: "Influencer's Gears", codeRepo: "https://github.com/sparkmahadi/influencer-gears", live: "https://influencergears.netlify.app/", preview: influencerGears, details: "Raw HTML and CSS Project" },
        { name: "LeaderBoard", codeRepo: "https://github.com/sparkmahadi/leader-board-css3", live: "https://sparkmahadi.github.io/leader-board-css3/", preview: leaderBoard, details: "Raw HTML and CSS Project" },
    ];

    const HTMLCSSFramework = [
        { name: "Learn+", live: "https://sparkmahadi.github.io/edTech-website/", codeRepo: "https://github.com/sparkmahadi/edTech-website", preview: learnPlus, details: "Raw HTML and Bootstrap CSS" },
        { name: "Penguin Fashion", live: "https://github.com/sparkmahadi/nike-react", codeRepo: "https://penguinfashionapp.netlify.app/", preview: penguinFashion, details: "Raw HTML and Bootstrap CSS" },
        { name: "Panda Commerce", live: "https://github.com/sparkmahadi/panda-commerce", codeRepo: "https://sparkmahadi.github.io/panda-commerce/", preview: pandaCommerce, details: "Raw HTML and Bootstrap CSS" },
        { name: "Penguin Fashion", live: "https://github.com/sparkmahadi/penguin-fashion-with-tailwind-css", codeRepo: "https://sparkmahadi.github.io/penguin-fashion-with-tailwind-css/", preview: penguinTailwind, details: "Raw HTML and Tailwind CSS" },
        { name: "InstaShohor", live: "https://github.com/sparkmahadi/insta-shohor-solved", codeRepo: "https://github.com/sparkmahadi/insta-shohor-solved", preview: InstaShohor, details: "Raw HTML and Bootstrap CSS and JS" },
    ];

    const basicJS = [
        { name: "Basic JS Assignment", codeRepo: "https://github.com/sparkmahadi/basic-js-assignments", preview: basicJavascript, details: "Learning Basic JS and Problem Solving" },
        { name: "Club Management", codeRepo: "https://github.com/sparkmahadi/select-best-five", live: "https://sparkclub.netlify.app/",
         preview: clubManagement, details: "Basic JS and DOM Manipulation with event handling" },
        { name: "News Wave", codeRepo: "https://github.com/sparkmahadi/news-wave", live: "https://wavenews.netlify.app/",
         preview: waveNews, details: "Exploring API with DOM Manipulation and JS" },
        { name: "Phone Hunter", codeRepo: "https://github.com/sparkmahadi/phone-hunter-me", live: "https://phonehunterapp.netlify.app/",
         preview: phoneHunter, details: "Exploring API with DOM Manipulation and JS" },
        { name: "Fancy Slider", codeRepo: "https://github.com/sparkmahadi/fancy-slider-solved", live: "https://fancysliderapp.netlify.app/",
         preview: fancySlider, details: "Exploring API with DOM Manipulation and JS" },
        { name: "Fitness Power", codeRepo: "https://github.com/sparkmahadi/gym-practice", live: "https://fitnesspowerapp.netlify.app/",
         preview: fitnessPower, details: "Exploring API with DOM Manipulation and JS" },
        
        
    ];

    const debugging = [
        { name: "Speed Monster", codeRepo: "https://github.com/sparkmahadi/speed-monster", live: "https://speed-monster-spark.netlify.app/", preview: speedMonster, details: "Explored and Learned Debugging" },
        { name: "Book Bhandar", codeRepo: "https://github.com/sparkmahadi/book-bhandar-debugging", live: "https://sparkmahadi.github.io/book-bhandar-debugging/", preview: bookBhandar, details: "Explored and Learned More Debugging" },
        { name: "Money Master", codeRepo: "https://github.com/sparkmahadi/debug-money-master-solved", live: "https://moneymasterdebugging.netlify.app/", preview: moneyMaster, details: "Explored and Learned More Debugging" },
        { name: "Issue Tracker", codeRepo: "https://github.com/sparkmahadi/issue-tracker-solved", live: "https://issuetrackersolved.netlify.app/", preview: issueTracker, details: "Explored and Learned More Debugging" },
        { name: "Ranga Store", codeRepo: "https://github.com/sparkmahadi/ranga-store-vanga-solved", live: "https://sparkmahadi.github.io/ranga-store-vanga-solved/", preview: rangaStore, details: "Explored and Learned More Debugging" },
        { name: "Baper Bank", codeRepo: "https://github.com/sparkmahadi/nosto-bank-solved-m40.5", live: "https://sparkmahadi.github.io/nosto-bank-solved-m40.5/",
         preview: baperBank, details: "Basic JS Programming Debugging" },
    ]

    const reactApps = [
        { name: "Web Dev GK", codeRepo: "https://github.com/sparkmahadi/web-dev-gk", live: "https://web-dev-gk.netlify.app/", preview: webdevGK, details: "React App with different react packages, routing and animations" },
        { name: "Ema John Shopping", codeRepo: "https://github.com/sparkmahadi/ema-john-simple-with-auth-59", live: "https://emajohnclone.netlify.app/", preview: emajohnclone, details: "Clone of amazon with react, firebase and localstorage" },
        { name: "Nitrix Fitness", codeRepo: "https://github.com/sparkmahadi/nitrix-fitness", live: "https://nitrix-fitness.netlify.app/", preview: nitrixFitness, details: "Learned Creating and Building Fresh React Apps" },
        { name: "Price Club", codeRepo: "https://github.com/sparkmahadi/price-club", live: "https://priceclub.netlify.app/", preview: priceClub, details: "React App with rechart, react router dom" },
        { name: "T-shirt Mania", codeRepo: "https://github.com/sparkmahadi/tshirt-mania", live: "https://tshirtmaniaapp.netlify.app/", preview: tshirtMania, details: "Fresh React App with state and props handling" },
    ]
    const reduxApps=[
        { name: "The Daily Moon", codeRepo: "https://github.com/sparkmahadi/dailyMoon-client", live: "https://daily-moon.netlify.app/", preview: dailyMoon, details: "Content Management App with Redux and MERN Stack" },
        { name: "Moon Tech - React-Redux", codeRepo: "https://github.com/sparkmahadi/moonTech-react-redux", live: "https://moontech-react-redux.netlify.app/", preview: moonTech, details: "E-commerce app with react and old redux" },
        { name: "Moon Tech - Redux Thunk", codeRepo: "https://github.com/sparkmahadi/moonTech-redux-thunk", live: "https://moontech-redux-thunk.netlify.app/", preview: moonTech, details: "E-commerce app with MERN stack and old redux with thunk" },
    ]
    const nextApps = [];
    const typescriptApps = [];

    let content;
    if(tabIndex===0){content=reactApps}
    if(tabIndex===1){content=reduxApps}
    if(tabIndex===2){content=debugging}
    if(tabIndex===3){content=nextApps}
    if(tabIndex===4){content=typescriptApps}
    if(tabIndex===5){content=basicJS}
    if(tabIndex===6){content=HTMLCSSFramework}
    if(tabIndex===7){content=rawHTMLCSS}

    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto mb-5 text-white'>


            <div className='grid lg:grid-cols-3 gap-10'>

                {
                    content?.map(project =>
                        <div key={project.name} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={project.preview} alt="projects" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{project.name}</h2>
                                <p>{project.details}</p>
                                <div className='flex mt-3 justify-center items-center gap-5'>
                                    {
                                        project.live ? 
                                        <a href={project.live} className="btn btn-primary btn-sm" target="_blank" rel='noreferrer'>Live Site</a>
                                        : null
                                    }
                                    <a href={project.codeRepo} className="btn btn-primary btn-sm" target="_blank" rel='noreferrer'>Code Link</a>
                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
            {
                !content.length && <h3 className='text-center py-5 text-lg md:text-xl md:font-semibold md:py-10 lg:py-20 xl:py-40'>Coming Soon...</h3>
            }

        </div>
    );
};

export default MiniProjectDetails;
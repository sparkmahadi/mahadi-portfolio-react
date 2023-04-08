import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Spinner from '../../components/Spinner/Spinner';
import MiniProjectDetails from './MiniProjectDetails';

const MiniProjects = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    console.log(tabIndex);

    const tablist = [
        "ReactJS",
        "Redux",
        "Debugging",
        "NextJS",
        "Typescript",
        "Basic JS, DOM & API",
        "HTML with CSS Frameworks",
        "Raw HTML & CSS Projects",
        ];
    if (loading) {
        return <div className='custom-align'><Spinner></Spinner></div>
    }
    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto mb-5 text-white'>
            <h2 data-aos="fade-down" className='uppercase text-xl md:text-2xl xl:text-3xl font-semibold text-center divider mb-5 xl:mb-10'>Learning Projects & Practices</h2>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    {
                        tablist.map(name => <Tab key={name}>{name}</Tab>)
                    }
                </TabList>

                {
                    tablist.map(tab =>
                        <TabPanel key={tab}>
                            <MiniProjectDetails tabIndex={tabIndex}></MiniProjectDetails>
                        </TabPanel>
                    )
                }

            </Tabs>

        </div>
    );
};

export default MiniProjects;
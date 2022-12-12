import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ImageCard from './ImageCard';

const ProjectDetails = () => {
    const projectData = useLoaderData();
    console.log(projectData);

    const { name, features, links, technologies, images } = projectData;
    const { desktop, mobile, tablet } = images;
    return (
        <div className='px-5 md:px-10 xl:px-0 max-w-7xl mx-auto mb-5 text-white'>
            <h2 data-aos="fade-down" className='uppercase md:text-2xl xl:text-3xl font-semibold text-center divider mb-10'>Project Details</h2>

            <div>
                <h5 className='text-center text-2xl'>Project Name: {name}</h5>
                <div className='flex justify-center gap-5 my-5'>
                    <a href={links[0]}><button className='btn btn-primary btn-sm'>Live Site</button></a>
                    <a href={links[1]}><button className='btn btn-primary btn-sm'>Client Side</button></a>
                    <a href={links[2]}><button className='btn btn-primary btn-sm'>Server Side</button></a>
                </div>
                <div>
                    <h5 className='text-xl'>Features:</h5>
                    <div>
                        <ul className='list-disc pl-5'>
                            {
                                features?.map((feature, i) => <li key={i}>{feature}</li>)
                            }
                        </ul>
                    </div>
                </div>
                
                <div>
                    <h5 className='text-xl mt-5'>Technologies Used:</h5>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3'>
                        {
                            technologies?.map((tech, i) => <p className='bg-gray-500 rounded-lg p-1 text-center' key={i}>{tech}</p>)
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className='text-xl text-center my-10 divider'>Desktop View</h5>
                        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            {
                                desktop?.map((image, i) => <ImageCard image={image} key={i}></ImageCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl text-center my-10 divider'>Tablet View</h5>
                        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            {
                                tablet?.map((image, i) => <ImageCard image={image} key={i}></ImageCard>)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl text-center my-10 divider'>Mobile View</h5>
                        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            {
                                mobile?.map((image, i) => <ImageCard image={image} key={i}></ImageCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;
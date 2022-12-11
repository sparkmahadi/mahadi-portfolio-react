import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { MdAttachEmail } from 'react-icons/md';
import { FaGithubSquare, FaLinkedin, FaGraduationCap, FaFacebookSquare } from 'react-icons/fa';
import { BsPersonFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className='px-10 xl:px-0 max-w-7xl mx-auto mb-20'>
            <h2 className='uppercase md:text-2xl xl:text-3xl font-semibold text-center mb-5'>Contact Me</h2>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className="lg:w-1/3 bg-slate-700 p-5 rounded-lg text-xl">
                    <ul className=''>
                        <li>
                            <div className="flex items-center gap-5 mb-3 text-white">
                                <BsPersonFill className='w-6 h-6 text-blue-400' />
                                <p>Md. Mahadi Hasan</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-5 mb-3 text-white">
                                <ImLocation2 className='w-6 h-6 text-blue-400' />
                                <p>Chattogram, Bangladesh</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-5 mb-3 text-white">
                                <MdAttachEmail className='w-6 h-6 text-blue-400' />
                                <p>mahadihasan@engineer.com</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-5 mb-3 text-white">
                                <FaGraduationCap className='w-6 h-6 text-blue-400' />
                                <p>B.Sc in Textile Engineering</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-5 mb-3 text-white">
                                <BsFillTelephoneOutboundFill className='w-6 h-6 text-blue-400' />
                                <p>+8801624-772632</p>
                            </div>
                        </li>
                    </ul>
                    <div className='mt-5'>
                        <h3 className='divider text-white'>Social Links</h3>
                        <div className="flex justify-center items-center gap-5 text-blue-300">
                            <FaLinkedin className='w-8 h-8' />
                            <FaGithubSquare className='w-8 h-8' />
                            <FaFacebookSquare className='w-8 h-8' />
                        </div>
                    </div>
                </div>
                <div className='lg:w-2/3'>
                    <form action="">
                        <ul className='grid grid-cols-2 gap-5 mb-5'>
                            <li>
                                <input className='input input-bordered w-full' type="text" name="name" placeholder="Your Name" required />
                            </li>
                            <li>
                                <input className='input input-bordered w-full' type="text" name="email" placeholder="Your Email" required />
                            </li>
                            <li>
                                <input className='input input-bordered w-full' type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <input className='input input-bordered w-full' type="text" name="phone" placeholder="Phone Number" required />
                            </li>
                        </ul>
                        <div className='mb-5'>
                            <textarea className='textarea textarea-bordered w-full' placeholder="Your Message..." required></textarea>
                        </div>
                        <button className='btn btn-sm btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
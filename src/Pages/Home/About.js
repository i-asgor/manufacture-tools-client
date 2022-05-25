import React from 'react';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className='px-24 mx-auto h-fill'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={about} alt="Hand Tools" /></figure>
            <div class="card-body">
                <p>“OUR PRODUCT QUALITY, CUSTOMER SERVICE AND COMPANY PERFORMANCE DELIVER THE RESULTS THAT DIFFERENTIATE US FROM OUR COMPETITORS”</p>
                <p>A hand tool is any tool that is powered by hand rather than a motor. Categories of hand tools include wrenches, pliers, cutters, files, striking tools, struck or hammered tools, screwdrivers, vises, clamps, snips, hacksaws, drills, and knives.</p>
            </div>
            </div>
        </div>
    );
};

export default About;
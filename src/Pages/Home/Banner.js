import React from 'react';

import tool from '../../images/tool.jpg';

const Banner = () => {
    return (
        <div className="hero h-screen bg-base-200 md:px-48">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={tool} className="max-w-sm rounded-lg shadow-2xl" alt='tool' />
                <div>
                <h1 className="text-5xl font-bold">Explore the best Tools</h1>
                <p className="py-6">We are the Quality Hand tools Manufacturer in Bangladesh and offers Engineering Excellence for the world’s most demanding industries. Our Tools range includes Industrial Tools, Precision Tools, Cutting Tools, Air Tools and Lubrication tools etc. As a Leader in Tools Manufacturing Industry, we always focus on Quality and customer satisfaction Which makes us different from other Tools Manufacturing Companies.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
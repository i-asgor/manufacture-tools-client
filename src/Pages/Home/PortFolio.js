import React from 'react';
import profile from '../../images/profile.jpg'

const PortFolio = () => {
    return (
        <div class="card max-w-xl bg-base-100 shadow-xl mx-auto min-h-full">
            <figure><img src={profile} alt="Asgor Ali" className='w-96' /></figure>
            <div class="card-body text-center">
                <h2 class="text-2xl font-bold">Name: Md Abdullah Al Asgor Ali</h2>
                <h3 class="text-xl font-bold">Email: asgor.ice@gmail.com</h3>
                <h3 class="text-xl font-bold">Phone: +8801751669661</h3>
                <h4>Education: B.Sc in Information and Communication Engineering</h4>
                <h4 className='gap-5'><span className='text-lg font-bold'>Skils:</span> 
                    <button class="btn btn-outline">HTML</button>
                    <button class="btn btn-outline">CSS</button>
                    <button class="btn btn-outline">Bootstrap</button>
                    <button class="btn btn-outline">TailwindCSS</button>
                    <button class="btn btn-outline">Javascript</button>
                    <button class="btn btn-outline">ReactJs</button>
                    <button class="btn btn-outline">ExpressJs</button>
                    <button class="btn btn-outline">Mongodb</button>
                </h4>
                <span>
                <a href="https://www.facebook.com/Md.A.A.Asgor.Ali/" className='btn btn-outline'>Facebook Link</a>
                <a href="https://www.linkedin.com/in/md-abdullah-al-asgor-ali-b8b1b875/" className='btn btn-outline'>Linkedin Link</a>                
                </span>
                <h3 className='text-2xl font-bold'>Project List:</h3>
                <a href="https://inventory-management-71f41.web.app/" className='btn btn-outline'>Electronics Inventory</a>
                <a href="https://wedding-photography-b1402.web.app" className='btn btn-outline'>Wedding Photography</a>
                
            </div>
        </div>
    );
};

export default PortFolio;
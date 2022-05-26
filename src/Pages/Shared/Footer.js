import React from 'react';

const Footer = () => {
    return (
        <>
        <footer class="footer items-center p-4 bg-neutral text-neutral-content md:px-24">
            <div class="items-center grid-flow-col">
                <p>Copyright © 2022 - All right reserved</p>
            </div> 
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href='https://www.facebook.com/Md.A.A.Asgor.Ali/' target='_blank' rel="noreferrer">Facebook</a> 
                <a href='https://www.linkedin.com/in/md-abdullah-al-asgor-ali-b8b1b875' target='_blank' rel="noreferrer">Linkedin</a>
            </div>
        </footer>
        </>
        
    );
};

export default Footer;
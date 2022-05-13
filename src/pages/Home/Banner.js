import React from 'react';
import man from '../../assets/images/man-cleaner.png'

const Banner = () => {
    return (
        <div class="mt-16 hero  lg:h-[70vh] bg-accent">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <p>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className='lg:h-[60vh]'>
                    <img className='w-full' src={man} alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;
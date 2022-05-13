import React from 'react';

const Get = () => {
    return (
        <div class="card w-[80%] mx-auto mt-[-40px] bg-neutral shadow-2xl">
            <div class="card-body">
                <h2 class="text-3xl text-primary">Get Free Estimate</h2>
                <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-primary w-[190px]'>REQUEST A QOUTE</button>
            </div>
        </div>
    );
};

export default Get;
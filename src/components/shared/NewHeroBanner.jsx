import Link from 'next/link';
import React from 'react';

const NewHeroBanner = () => {
    return (
        <div>
            <div
                className="hero h-200 bg-cover bg-center relative rounded-lg"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/2127hZn6/Chat-GPT-Image-Apr-30-2026-10-37-55-PM.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold">Your Qurbani</h1>
                        <p className="mb-5 font-bold text-3xl ">
                            OUR SACRED RESPONSIBILITY
                        </p>
                        <Link href="/all-animals">
                                                <button
                                                    
                                                    className="px-10 py-4 text-2xl md:text-xl font-bold 
                                                    border-2 border-white text-white
                                                    bg-white/10 backdrop-blur-sm 
                                                    hover:bg-black/30 hover:text-white
                                                    transition duration-300 
                                                     rounded-xl cursor-pointer"
                                                    >
                                                    Browse All Animals
                                                </button>
                                                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewHeroBanner;
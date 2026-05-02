import Link from 'next/link';
import React from 'react';

const NewHeroBanner = () => {
    return (
        <div className="px-4 md:px-0">
            <div
                className="hero min-h-[35vh] md:min-h-[45vh] lg:min-h-[60vh] bg-cover bg-center relative overflow-hidden"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/2127hZn6/Chat-GPT-Image-Apr-30-2026-10-37-55-PM.png)",
                }}
            >

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="hero-content text-white text-center relative z-10">
                    <div className="max-w-xl px-2">

                        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                            Your Qurbani
                        </h1>

                        <p className="mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                            Our Sacred Responsibility
                        </p>

                        <Link href="/all-animals">
                            <button
                                className="
                                px-6 py-3 md:px-8 md:py-4 
                                text-base md:text-lg lg:text-xl 
                                font-bold 
                                border-2 border-white 
                                text-white
                                bg-white/10 backdrop-blur-sm 
                                hover:bg-black/40 
                                transition duration-300 
                                rounded-xl cursor-pointer
                                "
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
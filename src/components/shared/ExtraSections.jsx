import { getTopBreads } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const ExtraSections = async () => {
    const topBreads = await getTopBreads();

    return (
        <div className="px-4 md:px-0">

            <div className='mt-16'>
                <h1 className='text-3xl md:text-5xl text-center font-bold my-8'>
                    Qurbani Tips
                </h1>

                <div className="container mx-auto border border-slate-300 rounded-xl p-4 md:p-8 shadow-xl">
                    
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
                        Follow these tips before buying your favorite animal
                    </h2>

                    <ul className="grid gap-4 md:gap-6 md:grid-cols-2">
                        {[
                            "Choose a healthy animal with no visible defects.",
                            "Ensure the animal meets age requirements (2+ years for cows).",
                            "Check teeth and body condition before purchase.",
                            "Avoid weak, injured, or too thin animals.",
                            "Buy from trusted sellers or verified farms.",
                            "Provide proper food and পানি before Qurbani.",
                            "Follow Islamic rules and hygiene during sacrifice.",
                        ].map((tip, i) => (
                            <li
                                key={i}
                                className='border border-gray-300 rounded-xl p-4 shadow-md flex items-start gap-3 text-sm md:text-base'
                            >
                                <span className="text-green-500 text-xl">✔</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='text-3xl md:text-5xl text-center font-bold mb-8'>
                    Top Breeds
                </h1>

                <div className="space-y-8">
                    {topBreads.map((bread) => (
                        <div key={bread.id} className='max-w-6xl mx-auto'>
                            
                            <div className="card bg-gradient-to-r from-black/70 to-green-600 text-white shadow-xl overflow-hidden">

                                <div className="flex flex-col lg:flex-row items-center">

                                    <figure className="w-full lg:w-1/2">
                                        <Image
                                            src={bread.image}
                                            alt={bread.name}
                                            width={600}
                                            height={400}
                                            className="w-full h-56 md:h-72 object-cover"
                                        />
                                    </figure>

                                    <div className="card-body w-full lg:w-1/2">
                                        <div className="badge badge-outline badge-accent text-sm md:text-lg mb-2">
                                            {bread.type}
                                        </div>

                                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                                            {bread.name}
                                        </h2>

                                        <p className='text-sm md:text-lg'>
                                            <span className="font-semibold">Origin:</span> {bread.origin}
                                        </p>

                                        <p className='text-sm md:text-lg font-semibold mt-2'>
                                            Quality:
                                        </p>

                                        <p className='text-sm md:text-base opacity-90'>
                                            {bread.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ExtraSections;
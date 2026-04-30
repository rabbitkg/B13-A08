import { getTopBreads } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';


const ExtraSections = async ({ params }) => {
    const topBreads = await getTopBreads();
    return (
        <div>
            <div className='mt-25'>
                <h1 className='text-5xl text-center font-bold my-8'>Qurbani Tips</h1>
                <div className="container mx-auto border border-slate-300  mb-10">
                    <div className="card-body">

                        <div className="text-center ">

                            <h2 className="text-3xl font-bold">
                                Follow these tips before buying your favorite animal.</h2>

                        </div>
                        <ul className="mt-3 flex flex-col gap-6 text-2xl text-center">
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Choose a healthy animal with no visible or defects.</span>
                            </li>
                            <li className='border border-gray-300    rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Ensure the animal meets age requirements (at least 2 years for cows).</span>
                            </li>
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Check teeth and body condition before purchase.</span>
                            </li>
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Avoid animals that are weak, injured, or too thin.</span>
                            </li>
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Buy from trusted sellers or verified farms.</span>
                            </li>
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Provide proper food and পানি before Qurbani.</span>
                            </li>
                            <li className='border border-gray-300 rounded-2xl p-3 shadow-lg'>
                                <svg className="size-8 me-2 inline-block text-success " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Follow Islamic rules and hygiene during sacrifice.</span>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>


            <div>
                <h1 className='text-5xl text-center font-bold mt-20 mb-8'>Top Breads</h1>
                {
                    topBreads.map((bread) => {
                        return (
                            <div key={bread.id} className='max-w-6xl mx-auto mb-10'>
                                <div className="card lg:card-side bg-gradient-to-r from-black/70 to-green-500 text-white shadow-xl gap-5 justify-center items-center">
                                    

                                    <figure>
                                        <Image
                                            src={bread.image}
                                            alt={bread.name}
                                            width={400}
                                            height={300} />
                                    </figure>
                                    <div className="card-body">
                                        <div className="badge badge-outline badge-accent text-xl mb-3 font-semibold">{bread.type}</div>
                                        <h2 className="card-title text-4xl font-bold">{bread.name}</h2>
                                        <p className='text-xl font-semibold'>Origin: {bread.origin}</p>
                                        <br />
                                        <p className='text-xl font-semibold'>Quality: </p>
                                        <p className=''>{bread.description}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ExtraSections;
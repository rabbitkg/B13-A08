import { getAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllAnimals = async ({ params }) => {
    const animals = await getAnimals();
    return (
        <div>
            <h2 className='container mx-auto mt-4 font-bold text-3xl'>Chose Your Animal</h2>
            <div className='grid grid-cols-4 gap-4 my-4 container mx-auto'>
                {animals.map((animal) => (
                    <div key={animal.id} className=" ">
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{animal.name}</h2>
                                <p>{animal.description}</p>
                                <p><strong>Price:</strong> ${animal.price.toLocaleString()}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/all-animals/${animal.id}`}>
                                        <button className="btn bg-purple-500 text-white">Details And Buy</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAnimals;
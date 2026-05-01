import BookingForm from '@/components/shared/BookingForm';
import { getAnimals, getAnimalsDetailsId } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AllAnimalsDetails = async ({ params }) => {
    const { id } = await params;
    console.log("ID from params:", id);

    const animals = await getAnimals();
    const animal = await getAnimalsDetailsId(id);


    return (
        <div className="container mx-auto my-10">

            <div>
                {
                    animal ? (
                        <div className='rounded-md border border-gray-300 shadow-xl'>
                            <div className="bg-base-100 rounded-xl grid grid-cols-1 md:grid-cols-2">
                                <figure>
                                    <Image
                                        src={animal.image}
                                        alt={animal.name}
                                        width={800}
                                        height={400}
                                        className="object-cover rounded-md"
                                    />
                                </figure>
                                <div className="p-6 text-xl items-center justify-center space-y-4">
                                    <div className='flex justify-between items-center'>
                                        <h2 className="text-3xl font-bold mb-2">{animal.name}</h2>
                                        <div className="badge badge-soft badge-success badge-outline font-bold">{animal.type}</div>
                                    </div>
                                    <p className="text-black"><span className="font-bold">Breed:</span> {animal.breed}</p>
                                    <p className="text-black"><span className="font-bold">Age:</span> {animal.age}</p>
                                    <p className="text-black"><span className="font-bold">Weight:</span> {animal.weight} kg.</p>
                                    <p className="text-black"><span className="font-bold">Price:</span> ${animal.price.toFixed(2)}</p>
                                    <p className="text-black"><span className="font-bold">Location:</span> {animal.location}</p>
                                    <p className="text-black"><span className="font-bold">Description:</span> {animal.description}</p>
                                    <p className="text-black"><span className="font-bold">Category:</span> {animal.category}</p>
                                </div>
                            </div>
                            <BookingForm/>
                        </div>

                    ) : (
                        <p className="text-center mt-10 text-red-500">Animal not found</p>
                    )
                }

            </div>

        </div>
    );
};

export default AllAnimalsDetails;
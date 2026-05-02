import BookingForm from '@/components/shared/BookingForm';
import { getAnimalsDetailsId } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: "Qurbani Hat - Details of the selected animal",
  description: "Details about the selected qurbani animal.",
};

const AllAnimalsDetails = async ({ params }) => {
    const { id } = await params;

    const animal = await getAnimalsDetailsId(id);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">

            {animal ? (
                <div className="bg-white/85 rounded-2xl shadow-lg overflow-hidden">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">

                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={800}
                                height={500}
                                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="flex flex-col justify-between">

                            <div>
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                                        {animal.name}
                                    </h2>

                                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                                        {animal.type}
                                    </span>
                                </div>

                                <p className="text-2xl font-bold text-green-600 mt-3">
                                    ${animal.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6 text-sm sm:text-base">
                                <p><span className="font-semibold text-gray-700">Breed:</span> {animal.breed}</p>
                                <p><span className="font-semibold text-gray-700">Age:</span> {animal.age}</p>
                                <p><span className="font-semibold text-gray-700">Weight:</span> {animal.weight} kg</p>
                                <p><span className="font-semibold text-gray-700">Category:</span> {animal.category}</p>
                                <p className="col-span-2">
                                    <span className="font-semibold text-gray-700">Location:</span> {animal.location}
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {animal.description}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="border-t border-gray-200 p-6 bg-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Book This Animal
                        </h3>
                        <BookingForm />
                    </div>

                </div>
            ) : (
                <p className="text-center mt-10 text-red-500 text-lg">
                    Animal not found
                </p>
            )}

        </div>
    );
};

export default AllAnimalsDetails;
import { getFeaturedAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedAnimalsPage = async () => {
    const featuredAnimals = await getFeaturedAnimals();

    return (
        <div className="px-4 md:px-0">
            <h1 className='text-3xl md:text-5xl lg:text-6xl text-center font-bold my-8'>
                Featured Animals
            </h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 container mx-auto'>
                {featuredAnimals.map((animal) => (
                    <div key={animal.id} className="card bg-base-100 shadow-xl border border-gray-200">

                        <figure className="w-full">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={600}
                                height={400}
                                className="w-full h-56 md:h-64 object-cover rounded-t-xl"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-xl md:text-2xl lg:text-3xl">
                                {animal.name}
                            </h2>

                            <p className="text-lg">
                                Price: ${animal.price.toLocaleString()}
                            </p>

                            <p className='text-base md:text-lg'>
                                Weight: <span className="font-bold">{animal.weight} kg</span>
                            </p>

                            <p className="text-sm md:text-base text-gray-600">
                                Location: {animal.location}
                            </p>

                            <p className="text-sm md:text-base line-clamp-2">
                                {animal.description}
                            </p>

                            <div className="card-actions justify-end mt-4">
                                <Link href="/all-animals">
                                    <button className="btn bg-purple-600 hover:bg-purple-700 text-white">
                                        See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedAnimalsPage;
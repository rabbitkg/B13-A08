

import { getFeaturedAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedAnimalsPage = async ({ params }) => {
    const featuredAnimals = await getFeaturedAnimals();
    return (
        <div>
            <h1 className='text-6xl text-center font-bold my-8'>Featured Animals</h1>
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2 container mx-auto'>

            {featuredAnimals.map((animal) => (
                <div key={animal.id} className='container mx-auto'>
                    <div className="card card-side bg-base-100 shadow-xl border border-gray-300">
                        <figure>
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={400}
                                height={250}
                                className="rounded-lg"
                                />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{animal.name}</h2>
                            <p >Price: ${animal.price.toLocaleString()}</p>
                            <p className='text-xl font-bold'>Weight: {animal.weight} kg</p>
                            <p>Location: {animal.location}</p>
                            <p>{animal.description}</p>
                            <p></p>
                            <Link href={`/all-animals`} className="card-actions justify-end">
                                <button className="btn btn-primary">See More Animals</button>
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
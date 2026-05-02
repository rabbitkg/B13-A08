import { getAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import SortSelector from './SortSelector';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const AllAnimals = async ({ searchParams }) => {
    const params = await searchParams;
    const animals = await getAnimals();

    const sort = params?.sort || 'default';

    let sortedAnimals = [...animals];

    // Sorting Logic
    if (sort === 'price-low') {
        sortedAnimals.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        sortedAnimals.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="container mx-auto mt-6 mb-5 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h2 className="font-bold text-4xl">Choose Your Animal</h2>
                <SortSelector currentSort={sort} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedAnimals.map((animal) => (
                    <div key={animal.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <figure>
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={400}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold text-2xl">{animal.name}</h2>
                            <p className="line-clamp-2 text-gray-600">{animal.description}</p>
                            
                            <p className="text-xl font-bold mt-1">
                                ${animal.price.toLocaleString()}
                            </p>

                            <div className="card-actions justify-end ">
                                <Link href={`/all-animals/${animal.id}`}>
                                    <button className="btn bg-purple-500 hover:bg-purple-700 text-white">
                                        Details & Buy
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

export default AllAnimals;
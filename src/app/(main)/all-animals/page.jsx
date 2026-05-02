import { getAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import SortSelector from './SortSelector';

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export const metadata = {
  title: "Qurbani Hat - all animals",
  description: "All animals available for Qurbani. Choose your sacrificial animal and make your Qurbani easier and more convenient.",
};


const AllAnimals = async ({ searchParams }) => {
    const params = await searchParams;
    const animals = await getAnimals();

    const sort = params?.sort || 'default';

    let sortedAnimals = [...animals];

    if (sort === 'price-low') {
        sortedAnimals.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
        sortedAnimals.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 mb-10 px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                    Choose Your Animal
                </h2>
                <SortSelector currentSort={sort} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {sortedAnimals.map((animal) => (
                    <div
                        key={animal.id}
                        className="group rounded-2xl overflow-hidden bg-white/85 shadow-md hover:shadow-xl transition duration-300"
                    >

                        <div className="relative overflow-hidden">
                            <Image
                                src={animal.image}
                                alt={animal.name}
                                width={400}
                                height={300}
                                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute top-3 left-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow ">
                                ${animal.price.toLocaleString()}
                            </div>
                        </div>

                        <div className="p-5 flex flex-col justify-between h-[200px]">

                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                                    {animal.name}
                                </h2>

                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {animal.description}
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link href={`/all-animals/${animal.id}`}>
                                    <button className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition cursor-pointer">
                                        View Details
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
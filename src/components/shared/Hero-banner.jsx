import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { FaCow } from "react-icons/fa6";

const HeroBanner = () => {
    return (
        <div className="py-6 md:py-10 px-4 md:px-0">

            <div className="flex justify-center items-center gap-3 mb-6 md:mb-8">

                <FaCow className="text-2xl md:text-3xl text-green-600" />

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
                    Your Trusted Partner for Qurbani Animals
                </h2>

                <FaHandshake className="text-2xl md:text-3xl text-purple-600" />

            </div>

            <div className="carousel w-full rounded-xl overflow-hidden">

                <div id="slide1" className="carousel-item relative w-full">

                    <div className="absolute inset-0">
                        <Image
                            src="https://i.ibb.co.com/TMV2cKdW/qurbani-banner1.png"
                            alt="bg"
                            fill
                            className="object-cover blur-lg scale-110 opacity-50"
                        />
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] flex items-center justify-center">
                        <Image
                            src="https://i.ibb.co.com/TMV2cKdW/qurbani-banner1.png"
                            alt="Slide 1"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between z-10">
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">

                    <div className="absolute inset-0">
                        <Image
                            src="https://i.ibb.co.com/b5gfMmBm/qurbani-banner2.png"
                            alt="bg"
                            fill
                            className="object-cover blur-lg scale-110 opacity-50"
                        />
                    </div>

                    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px] flex items-center justify-center">
                        <Image
                            src="https://i.ibb.co.com/b5gfMmBm/qurbani-banner2.png"
                            alt="Slide 2"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="absolute left-3 right-3 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between z-10">
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroBanner;
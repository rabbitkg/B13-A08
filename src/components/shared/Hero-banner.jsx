import Image from "next/image";
import Link from "next/link";


const HeroBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src="https://i.ibb.co.com/TMV2cKdW/qurbani-banner1.png"
                        alt="Slide 1"
                        className="w-full"
                        width={800}
                        height={600}
                    />
                    <div className="absolute inset-0 flex items-end justify-center pb-50">
                    <Link href="/all-animals">
                        <button
                            
                            className="px-10 py-4 text-2xl md:text-xl font-bold 
                            border-2 border-white text-white
                            bg-white/10 backdrop-blur-sm 
                            hover:bg-white/30 hover:text-white/150
                            transition duration-300 
                            shadow-[4px_4px_0_rgba(0,0,0,0.4)] rounded-xl"
                            >
                            Browse All Animals
                        </button>
                            </Link>

                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>





                <div id="slide2" className="carousel-item relative w-full">
                    <Image
                        src="https://i.ibb.co.com/b5gfMmBm/qurbani-banner2.png"
                        alt="Slide 2"
                        className="w-full"
                        width={800}
                        height={600}
                    />

                    <div className="absolute inset-0 flex items-end justify-center pb-50">
                    <Link href="/all-animals">
                        <button
                            
                            className="px-10 py-4 text-2xl md:text-xl font-bold 
                            border-2 border-white text-white
                            bg-white/10 backdrop-blur-sm 
                            hover:bg-white/30 hover:text-white/150
                            transition duration-300 
                            shadow-[4px_4px_0_rgba(0,0,0,0.4)] rounded-xl"
                            >
                            Browse All Animals
                        </button>
                            </Link>

                    </div>



                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroBanner;
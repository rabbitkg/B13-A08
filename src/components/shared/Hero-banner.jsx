import Image from "next/image";



const HeroBanner = () => {
    return (
        <div className="py-10 ">
            <ol className="list-disc pl-5">
                <li className="text-4xl font-bold mb-8">See here for more information:</li>
            </ol>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src="https://i.ibb.co.com/TMV2cKdW/qurbani-banner1.png"
                        alt="Slide 1"
                        className="w-full"
                        width={800}
                        height={600}
                    />
                    


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
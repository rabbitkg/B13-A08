import Image from "next/image";
import React from "react";
import facebookIcon from "@/assets/fb.png";
import instagramIcon from "@/assets/instagram.png";
import twitterIcon from "@/assets/twitter.png";

const Footer = () => {
    return (
        <footer className=" w-full border-t-4 border-black/30 bg-yellow-100 mt-auto">
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-4 gap-6 text-black">

                    {/* About Section */}
                    <div className="col-span-2">
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-black inline-block">
                            About
                        </h2>
                        <p className="text">
                            We provide trusted cattle for Qurbani Eid. Choose your perfect animal
                            with confidence and ease through our platform. We are dedicated to providing reliable and healthy cattle for Qurbani Eid. With our user-friendly platform, you can easily browse, compare, and select the perfect animal with complete confidence and peace of mind.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-black inline-block">
                            Contact
                        </h2>
                        <p className="text">Dhaka, Bangladesh</p>
                        <p className="text">Phone: +880 1750-642449</p>
                        <p className="text">Email: qurbani.hat@yahoo.com</p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-3 border-b-2 border-black inline-block">
                            Follow Us
                        </h2>

                        <div className="flex gap-4 mt-2">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full p-3 hover:scale-110 transition cursor-pointer">
                                <Image
                                    src={facebookIcon}
                                    alt="Facebook"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full hover:scale-110 transition cursor-pointer">
                                <Image
                                    src={instagramIcon}
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-400 rounded-full hover:scale-110 transition cursor-pointer">
                                <Image
                                    src={twitterIcon}
                                    alt="Twitter"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Bottom Bar */}
            <div className="text-center border-t-2 border-black py-5 text-sm bg-yellow-200">
                © {new Date().getFullYear()} Qurbani Market. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
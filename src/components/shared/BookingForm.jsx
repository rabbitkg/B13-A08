'use client';
import React from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export const metadata = {
  title: "Qurbani Hat",
  description: "Best place to buy and sell qurbani animals online",
};

const BookingForm = () => {

    const handleBooking = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("Booking Data:", data);

        toast.success("Booking successful! We will contact you soon.");

        e.target.reset();
    };

    return (
        <div className="bg-white/80 rounded-2xl shadow-md p-6 sm:p-8">

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                Book This Animal
            </h2>

            <form
                onSubmit={handleBooking}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >

                <div className="relative">
                    <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm sm:text-base"
                        required
                    />
                </div>

                <div className="relative">
                    <MdEmail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm sm:text-base"
                        required
                    />
                </div>

                <div className="relative">
                    <FaPhoneAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm sm:text-base"
                        required
                    />
                </div>

                <div className="relative md:col-span-2">
                    <MdLocationOn className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        name="address"
                        type="text"
                        placeholder="Full Address"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm sm:text-base"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="md:col-span-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
                >
                    Confirm Booking
                </button>

            </form>
        </div>
    );
};

export default BookingForm;
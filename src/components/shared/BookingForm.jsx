'use client';
import React from 'react';
import { toast } from 'react-toastify';

const BookingForm = () => {

    const handleBooking = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Booking Data:", data);

        toast.success("Booking successful!");

        e.target.reset();
    };

    return (
        <div>
            <div className="mt-2 p-6 rounded-md ">
                <h2 className="text-2xl font-bold mb-4">Book This Animal</h2>

                <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full" required />                    

                    <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full" required />

                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" required />

                    <input name="address" type="text" placeholder="Address" className="input input-bordered w-full md:col-span-2" required />

                    <button type="submit" className="btn btn-primary md:col-span-2">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
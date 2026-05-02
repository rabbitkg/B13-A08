'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import logo from '@/assets/logo-nav.png';
import { authClient } from '@/lib/auth-client';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='top-0 z-50 shadow-md py-2 sticky bg-white/10 backdrop-blur-2xl'>
            <div className='container mx-auto flex justify-between items-center px-4'>

                {/* Logo */}
                <Link href="/">
                    <Image src={logo} alt='logo' width={130} height={40} className='rounded-3xl cursor-pointer' />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center font-bold gap-6'>
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/all-animals">All Animals</NavLink></li>
                </ul>

                {/* Right Section (Desktop) */}
                <div className='hidden md:flex items-center gap-3'>
                    {isPending ? (
                        <span className="loading loading-infinity loading-md"></span>
                    ) : user ? (
                        <>
                            <h2 className='text-lg'>Hi, {user?.name}</h2>
                            <Image
                                src={user.image || userAvatar}
                                alt='user'
                                width={40}
                                height={40}
                                className='rounded-full border'
                            />

                            <Link href="/profile" className='btn btn-sm bg-purple-500 text-white text-sm'>
                                Profile
                            </Link>

                            <button
                                className='btn btn-sm bg-red-300 text-white/110 text-sm'
                                onClick={async () => await authClient.signOut()}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className='btn btn-sm bg-purple-500 text-white'>Login</Link>
                            <Link href="/register" className='btn btn-sm bg-purple-500 text-white'>Register</Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white/70 shadow-md px-6 py-4 space-y-4'>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/all-animals">All Animals</NavLink>

                    <div className='border-t pt-4'>
                        {isPending ? (
                            <span className="loading loading-infinity loading-md"></span>
                        ) : user ? (
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src={user.image || userAvatar}
                                        alt='user'
                                        width={40}
                                        height={40}
                                        className='rounded-full border'
                                    />
                                    <span>{user.name}</span>
                                </div>

                                <Link href="/profile" className='btn bg-purple-500 text-white w-full'>
                                    My Profile
                                </Link>

                                <button
                                    className='btn bg-red-300 text-white/110 w-full'
                                    onClick={async () => await authClient.signOut()}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-2'>
                                <Link href="/login" className='btn bg-purple-500 text-white w-full'>Login</Link>
                                <Link href="/register" className='btn bg-purple-500 text-white w-full'>Register</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import logo from '@/assets/logo-nav.png'
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    console.log(user, isPending, "user in pending state");
    return (
        <div className='top-0 z-50 shadow-md'>
            <div className='container flex mx-auto justify-between my-4 sticky'>
                <div>
                    <Image href="/" src={logo} alt='logo' width={200} height={50} className='rounded-4xl cursor-pointer' />
                </div>
                <ul className='flex justify-between items-center font-bold gap-5'>
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/all-animals"}>All Animals</NavLink>
                    </li>

                </ul>

                {isPending ? (
                    <span className="loading loading-infinity loading-xl"></span>

                ) : user ? (<div className='flex gap-2 items-center'>
                    <h2 className='text-xl'>Hello, {user?.name}</h2>
                    <Image src={user.image || userAvatar} alt='user avatar' width={50} height={50} className='rounded-full' />

                    <button className='btn bg-purple-500 text-white'>
                        <Link href={"/profile"}>My Profile</Link>
                    </button>

                    <button className='btn bg-purple-500 text-white' onClick={async () => await authClient.signOut()
                    }>Logout</button>



                </div>
                ) : (
                    <div className='flex gap-2 items-center'>
                        <button className='btn bg-purple-500 text-white'>
                            <Link href={"/login"}>Login</Link>
                        </button>
                        <button className='btn bg-purple-500 text-white'>
                            <Link href={"/register"}>Register</Link>
                        </button>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Navbar;
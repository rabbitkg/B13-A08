import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import logo from '@/assets/logo-nav.png'

const Navbar = () => {
    return (
        <div className='container flex mx-auto justify-between my-4'>
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

            <div className='flex gap-2 items-center'>
                <Image src={userAvatar} alt='user avatar' width={50} height={50} className='rounded-full'/>
                <button className='btn bg-purple-500 text-white'>
                <Link href={"/login"}>Login</Link>
                </button>
                <button className='btn bg-purple-500 text-white'>
                <Link href={"/register"}>Register</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  MdEmail, 
  MdPerson, 
  MdCalendarToday, 
  MdEdit 
} from "react-icons/md";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const loadSession = async () => {
            const res = await authClient.getSession();
            setUser(res?.data?.user || null);
            setLoading(false);
        };

        loadSession();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl text-gray-600">Loading profile...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">You are not logged in</h2>
                    <button
                        onClick={() => router.push("/login")}
                        className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition font-medium"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="  py-12">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="h-56 bg-gradient-to-r from-yellow-100 via-green-100 to-black/20"></div>

                    <div className="pt-20 pb-12 px-8 md:px-12">
                        <div className="flex flex-col lg:flex-row gap-12">
  
                            <div className="lg:w-2/5 flex flex-col items-center lg:items-start">
                                <div className="relative -mt-24 mb-6">
                                    <Image
                                        src={user.image || "/default-avatar.png"}
                                        alt="Profile"
                                        width={170}
                                        height={170}
                                        className="rounded-full border-4 border-black/30 shadow-2xl object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                                </div>

                                <h1 className="text-4xl font-bold text-gray-900 text-center lg:text-left">
                                    {user.name}
                                </h1>
                                <p className="text-gray-500 mt-2 flex items-center gap-2 text-lg">
                                    <MdEmail /> {user.email}
                                </p>
                            </div>

                            {/* Right Side - About & Actions */}
                            <div className="lg:w-3/5">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                    <MdPerson className="text-blue-600" /> About
                                </h3>

                                <div className="bg-gray-50 rounded-2xl p-7 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MdEmail className="text-2xl text-gray-400 mt-1" />
                                        <div>
                                            <p className="text-sm text-gray-500">Email Address</p>
                                            <p className="font-semibold text-gray-800 text-lg">{user.email}</p>
                                        </div>
                                    </div>

                                    {user.createdAt && (
                                        <div className="flex items-start gap-4">
                                            <MdCalendarToday className="text-2xl text-gray-400 mt-1" />
                                            <div>
                                                <p className="text-sm text-gray-500">Member Since</p>
                                                <p className="font-semibold text-gray-800 text-lg">
                                                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Edit Button */}
                                <button
                                    onClick={() => router.push("/profile/update")}
                                    className="mt-8 w-full lg:w-auto flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                                >
                                    <MdEdit size={26} />
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
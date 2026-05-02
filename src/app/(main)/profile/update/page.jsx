'use client';
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const UpdateProfilePage = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [originalName, setOriginalName] = useState("");
    const [originalImage, setOriginalImage] = useState("");

    const router = useRouter();

    useEffect(() => {
        const loadUser = async () => {
            const { data } = await authClient.getUser();
            if (data) {
                setName(data.name || "");
                setImage(data.image || "");
                setOriginalName(data.name || "");
                setOriginalImage(data.image || "");
            }
        };
        loadUser();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updateData = {};

        if (name.trim() !== originalName && name.trim() !== "") {
            updateData.name = name.trim();
        }

        if (image.trim() !== originalImage) {
            updateData.image = image.trim();
        }

        if (Object.keys(updateData).length === 0) {
            toast.info("No changes detected");
            return;
        }

        const { error } = await authClient.updateUser(updateData);

        if (error) {
            toast.error(error.message || "Update failed");
            return;
        }

        toast.success("Profile updated successfully!");

        if (updateData.name) setOriginalName(updateData.name);
        if (updateData.image !== undefined) setOriginalImage(updateData.image);

        setTimeout(() => {
            router.push("/profile");
        }, 1200);
    };

    return (
        <div className=" py-12">
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16">
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
                        Update Profile
                    </h2>

                    <form onSubmit={handleUpdate} className="space-y-8">
                        <div>
                            <label className="block text-lg font-medium mb-2 text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-2 border-gray-300 focus:border-blue-600 p-4 rounded-2xl text-xl"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium mb-2 text-gray-700">
                                Profile Image URL (leave empty to keep current)
                            </label>
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full border-2 border-gray-300 focus:border-blue-600 p-4 rounded-2xl text-xl"
                                placeholder="https://example.com/your-photo.jpg"
                            />
                            {originalImage && (
                                <p className="text-sm text-gray-500 mt-3 break-all">
                                    Current Image: <span className="font-medium">{originalImage}</span>
                                </p>
                            )}
                        </div>


                        <div className="pt-6 space-y-4">
                            <button
                                type="submit"
                                className="w-full bg-purple-500 hover:bg-purple-700 text-white py-4 text-xl font-semibold rounded-2xl transition-all duration-200 cursor-pointer"
                            >
                                Update Profile
                            </button>

                            <Link href="/profile" className="block">
                                <button
                                    type="button"
                                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 text-xl font-semibold rounded-2xl transition-all duration-200 cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
"use client"
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function Profile() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        bio: "",
        linkedinUrl: "",
        ventureName: "",
        profilePic: null, // Add profilePic state to hold the uploaded file
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "profilePic") {
            setFormData({
                ...formData,
                profilePic: files[0], // Update profilePic state with the selected file
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formDataUpload = new FormData();
            formDataUpload.append("bio", formData.bio);
            formDataUpload.append("ventureName", formData.ventureName);
            formDataUpload.append("linkedinUrl", formData.linkedinUrl);
            formDataUpload.append("profilePic", formData.profilePic); // Append profilePic to FormData

            const response = await axios.post("/api/v1/auth/profile", formDataUpload);
            toast.success("User Profile Created successfully!");
            router.push("/dashboard");
            console.log(response.data); // handle success response
        } catch (error) {
            console.error("Error:", error.response.data);
            toast.error("Failed to create Profile!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black relative">
                <Image
                    src="/cube.svg"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="z-0 absolute"
                />
                <div className="z-10 relative bg-opacity-80 p-10 rounded-lg">
                    <h2 className="text-3xl text-center font-bold text-white mb-2">
                        Profile Setup
                    </h2>
                    <p className="text-lg text-center text-gray-400 mb-6">
                        Hang Tight! You are almost there!
                        Just a few more steps to complete your profile setup.
                    </p>
                    <div className="flex flex-col md:flex-row justify-evenly gap-10">
                        <form className="space-y-6 w-full md:w-2/3 lg:w-1/2" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="ventureName"
                                    value={formData.ventureName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Venture Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="LinkedIn URL"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full h-[150px] px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Bio"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="file"
                                    name="profilePic"
                                    onChange={handleChange}
                                    
                                    accept="image/*"
                                    placeholder="Profile Picture"
                                    required
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <span className="text-white">Profile Picture</span>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? <ClipLoader size={20} color="#ffffff" /> : "Create Profile"}
                            </button>
                        </form>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
}

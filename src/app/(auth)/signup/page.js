"use client"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function SignUp() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("/api/v1/auth/signup", formData);
            toast.success("User registered successfully!");
            router.push("/login");
            console.log(response.data); // handle success response
        } catch (error) {
            console.error("Error:", error.response.data);
            toast.error("Failed to register user!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
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
                        Sign up
                    </h2>
                    <p className="text-lg text-center text-gray-400 mb-6">
                        New here? Sign up now
                    </p>

                    <div className="flex flex-col md:flex-row justify-evenly gap-10">
                        <form className="space-y-6 w-full md:w-1/2" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="User Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg focus:outline-none"
                                disabled={loading}
                            >
                                {loading ? <ClipLoader size={20} color="#ffffff" /> : "Sign Up"}
                            </button>
                            <Link className="text-white text-md md:text-lg  underline mt-4" href="/login">
                                Already have an account! Login now! 
                             </Link>
                        </form>
                        <div className="text-center w-full md:w-1/2">
                            <p className="text-gray-400">OR sign in using</p>
                            <div className="mt-4 space-y-2">
                                <button className="w-full py-2 bg-gray-700 text-white font-bold rounded-lg focus:outline-none">
                                    Sign in with Google
                                </button>
                                <button className="w-full py-2 bg-gray-700 text-white font-bold rounded-lg focus:outline-none">
                                    Sign in with Apple Account
                                </button>
                                <button className="w-full py-2 bg-gray-700 text-white font-bold rounded-lg focus:outline-none">
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
}

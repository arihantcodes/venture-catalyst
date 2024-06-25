// pages/signup.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black relative">
                <Image src='/cube.svg' width={500} height={500}  objectFit='cover' className='z-0 absolute' />

                <div className='z-10 relative  bg-opacity-80 p-10 rounded-lg'>
                    <h2 className="text-3xl text-center font-bold text-white mb-2">Login to Your Account</h2>
                    <p className='text-lg text-center text-gray-400 mb-6'>Your first step towards a Successfull Venture</p>

                    <div className='flex flex-col md:flex-row justify-evenly gap-10'>
                        <form className="space-y-6 w-full md:w-1/2">
                           
                            <div>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg focus:outline-none"
                            >
                                Login to Your Account
                            </button>
                            <Link className='text-gray-400 underline mt-4' href='/signup'>Don’t have an account yet? Register now!</Link>
                        </form>
                        <div className="text-center w-full md:w-1/2">
                            <p className="text-gray-400">Or sign in using</p>
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
            </div>
        </>
    );
}

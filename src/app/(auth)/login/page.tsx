"use client"
import CheckBox from '@/components/form/CheckBox';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import image from '@/assets/logosignup.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (data: { email: string, password: string }) => {
        console.log(data);
    }
    return (
        <div>
            <div className='mt-12 font-outfit font-bold text-[40px] leading-[100%] tracking-[0%] text-center'>
                <span className='text-[#48B1DB]'>Sign In</span> <span> To Your Account</span>
            </div>
            <p className='text-center my-4'>Welcome! Sign in to your account to continue.</p>
            <div className='flex justify-center '>
                <div className='bg-[#EEF9FE] rounded-2xl my-4 max-w-md w-full'>
                    <div className="flex justify-center items-center">
                        <Image
                            src={image}
                            alt="Register image"
                            width={200}
                            height={200}
                            className="block"
                        />
                    </div>
                    <Form onSubmit={handleSubmit} className='px-6 my-9' >

                        <Input
                            label='Email'
                            type='email'
                            name='email'
                            rules={{ required: true }}
                        />
                        <Input
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            iconRight={showPassword ? <FaEye /> : <FaEyeSlash />}
                            toggolIcon={() => setShowPassword(!showPassword)}
                            rules={{ required: true }}
                        />


                        <CheckBox
                            label='Remember me'
                            name='tram'
                            rules={{ required: true }}
                        />
                        <p className="text-sm text-center mt-2">
                            Don&apos;t have an account?{" "}
                            <Link href="/signup" className="text-blue-500 hover:underline">
                                Registration
                            </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
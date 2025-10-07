"use client"
import React, { useState } from 'react';
import image from '@/assets/logosignup.png';
import Image from 'next/image';
import Input from '@/components/form/Input';
import Form from '@/components/form/Form';
import Link from 'next/link';
import CheckBox from '@/components/form/CheckBox';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Select from '@/components/form/Select';
import { useUserRegister } from '@/hooks/authHooks';
import toast from 'react-hot-toast';
import { TUserCreated } from '@/server/modules/auth/auth.interface';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {mutate,status}=useUserRegister()
    const handleSubmit = (data:TUserCreated) => {
        const matchPassword=data.password===data.confirmPassword
        if(!matchPassword){
            return toast.error('password not match')
        }
        mutate(data)
        console.log(data);
        
    }
    return (
        <div>
            <div className='mt-12 font-outfit font-bold text-[40px] leading-[100%] tracking-[0%] text-center'>
                <span className='text-[#48B1DB]'>Sign up </span><span> With Email</span>
            </div>
            <p className='my-4 font-outfit font-normal text-[16px] leading-[100%] tracking-[0%] text-center'>Welcome Back! Please enter your details.</p>
            <div className='flex justify-center '>
                <div className='bg-[#EEF9FE] rounded-2xl'>
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
                            label='Name'
                            type='text'
                            name='name'
                            rules={{ required: true }}
                        />
                        <Select
                            name='role'
                            label='Set Your Role'
                            placeholder='Set Your Role'
                            options={[
                                { label: 'User', value: 'user' },
                                { label: 'Seller', value: 'seller' }
                            ]}
                            rules={{ required: true }}
                        />
                        <Input
                            label='Phone Number'
                            type='number'
                            name='phone'
                            rules={{ required: true }}
                        />
                        <Input
                            label='Email'
                            type='email'
                            name='email'
                            rules={{ required: true }}
                        />
                        <Input
                            label='Address'
                            type='text'
                            name='address'
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
                        <Input
                            label='Confirm Password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            name='confirmPassword'
                            iconRight={showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            toggolIcon={() => setShowConfirmPassword(!showConfirmPassword)}
                            rules={{ required: "Confirm Password is Required", }}
                        />


                        <CheckBox
                            label='By creating an account, I accept the Terms & Conditions & Privacy Policy.'
                            name='tram'
                            rules={{ required: true }}
                        />
                        <p className="text-sm text-center mt-2">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-blue-500 hover:underline">
                                Register
                            </Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
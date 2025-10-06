"use client"
import React from 'react';
import image from '@/assets/logosignup.png';
import Image from 'next/image';
import Input from '@/components/form/Input';
import { IoMdEye } from 'react-icons/io';

const page = () => {
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <div className='mt-12 font-outfit font-bold text-[40px] leading-[100%] tracking-[0%] text-center'>
                <span className='text-[#48B1DB]'>Sign up </span><span> With Email</span>
            </div>
            <p className='my-4 font-outfit font-normal text-[16px] leading-[100%] tracking-[0%] text-center'>Welcome Back! Please enter your details.</p>
            <div className='flex justify-center '>
                <div className='bg-[#EEF9FE] rounded-2xl'>
                    <Image src={image} alt='Registe image' />
                    <Input
                        label='Name'
                        type='text'
                        name='name'
                        iconRight={<IoMdEye />}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
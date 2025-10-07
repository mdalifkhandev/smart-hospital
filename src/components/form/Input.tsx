'use client'
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type CustomInpur = {
    name: string
    label: string
    type: string
    placeholder?: string
    className?: string
    rules?: RegisterOptions
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    toggolIcon?:()=>void
}

const Input: React.FC<CustomInpur> = ({
    label,
    type,
    name,
    className,
    placeholder,
    iconLeft,
    iconRight,
    rules,
    toggolIcon
}) => {
    const {register,formState:{errors}}=useFormContext()
    return (
        <div className='flex flex-col gap-1 w-full'>
            {
                label && (<label className='text-sm font-bold text-gray-800'>{label}</label>)
            }
            <div className="relative w-full">
                {iconLeft && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {iconLeft}
                    </span>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name,rules)}
                    className={`border-2  rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2  ${errors[name]?'focus:ring-red-500 border-red-500':'focus:ring-blue-500 border-blue-500'} ${iconLeft ? "pl-10" : ""
                        } ${iconRight ? "pr-10" : ""} ${className}`}
                />

                {iconRight && (
                    <span
                    onClick={toggolIcon }
                    className="absolute text-xl right-3 top-1/2 -translate-y-1/2 text-blue-500 cursor-pointer">
                        {iconRight}
                    </span>
                )}
            </div>
            {
                errors[name] && <p className='text-red-500 text-xs mt-2'>{(errors[name]?.message as string) || "This field is required"}</p>
            }
        </div>
    );
};

export default Input;
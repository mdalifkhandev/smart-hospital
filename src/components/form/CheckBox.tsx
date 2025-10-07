'use client'
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type TCheckBox = {
    name: string
    label: string
    className?: string
    rules?: RegisterOptions
}

const CheckBox: React.FC<TCheckBox> = ({ name, label, className, rules }) => {
    const { register, formState: { errors } } = useFormContext()
    return (
        <div className={` ${className} `}>
            <div className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    id={name}
                    {...register(name, rules)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />

                {label && (
                    <label htmlFor={name} className="text-sm text-gray-700">
                        {label}
                    </label>
                )}
            </div>
            <div className='text-center'>
                {errors[name] && (
                    <p className="text-red-500 text-xs mt-1">
                        {(errors[name]?.message as string) || "This field is required"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckBox;
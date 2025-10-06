import React from 'react';

type CustomInpur = {
    label: string
    type: string
    name?: string
    error?: string
    className?: string
    placeholder?: string
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}

const Input: React.FC<CustomInpur> = ({
    label,
    type,
    name,
    error,
    className,
    placeholder,
    onChange,
    value,
    iconLeft,
    iconRight
}) => {
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
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    className={`border-2 border-blue-500 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${iconLeft ? "pl-10" : ""
                        } ${iconRight ? "pr-10" : ""} ${className}`}
                />

                {iconRight && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                        {iconRight}
                    </span>
                )}
            </div>
            {
                error && <p className='text-red-500 text-xs mt-2'>{error}</p>
            }
        </div>
    );
};

export default Input;
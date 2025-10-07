'use client'
import React from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
type TSelectOption = {
    label: string
    value: string | number
}
type TSelect = {
    label: string
    name: string
    options: TSelectOption[]
    className?: string
    rules?: RegisterOptions
    placeholder?: string
}
const Select: React.FC<TSelect> = ({ label, name, options, className, rules, placeholder }) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-bold text-gray-800">{label}</label>}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field, fieldState }) => (
                    <>
                        <select
                            {...field}
                            className={`border-2  rounded-lg px-3 py-2 focus:outline-none focus:ring-2  ${className} ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-blue-500 focus:ring-blue-500'}`}
                        >
                            <option value="">{placeholder}</option>
                            {options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        {fieldState.error && (
                            <p className="text-red-500 text-xs mt-2">
                                {fieldState.error.message}
                            </p>
                        )}
                    </>
                )}
            />
        </div>
    );
};

export default Select;
'use client'

import React, { ReactNode } from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFrom<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>
    children: ReactNode
    submitText?: string
    defaultValues?: DefaultValues<T>
    className?:string
}

const Form = <T extends FieldValues>({
    onSubmit,
    defaultValues,
    children,
    submitText = 'Submit',
    className
}: TFrom<T>) => {

    const method = useForm<T>({ defaultValues })

    return (
        <FormProvider {...method}>
            <form
                onSubmit={method.handleSubmit(onSubmit)}
                className={`flex flex-col gap-4 w-full ${className}`}
            >
                {children}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    {submitText}
                </button>

            </form>
        </FormProvider>
    );
};

export default Form;
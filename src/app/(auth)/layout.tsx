import QueryClientProvider from '@/Provider/Provider';
import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <QueryClientProvider>
                <Toaster />
                {children}
            </QueryClientProvider>
        </div>
    );
};

export default layout;
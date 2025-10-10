'use client';

import { useGetAllUser } from '@/hooks/userHooks';
import { TUserData } from '@/interface';
import { TUserCreated } from '@/server/modules/auth/auth.interface';
import React from 'react';

const Test = () => {
    const { data, isLoading, isError } = useGetAllUser();

    if (isLoading) return <p className="p-4">Loading users...</p>;
    if (isError) return <p className="p-4 text-red-500">Failed to load users.</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>

            <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-3 py-2">#</th>
                        <th className="border px-3 py-2">Name</th>
                        <th className="border px-3 py-2">Email</th>
                        <th className="border px-3 py-2">Phone</th>
                        <th className="border px-3 py-2">Role</th>
                        <th className="border px-3 py-2">Address</th>
                        <th className="border px-3 py-2">Status</th>
                        <th className="border px-3 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map((user: TUserData, index: number) => (
                        <tr key={user._id} className="hover:bg-gray-50">
                            <td className="border px-3 py-2 text-center">{index + 1}</td>
                            <td className="border px-3 py-2">{user.name}</td>
                            <td className="border px-3 py-2">{user.email}</td>
                            <td className="border px-3 py-2">{user.phone}</td>
                            <td className="border px-3 py-2 capitalize">{user.role}</td>
                            <td className="border px-3 py-2">{user.address}</td>
                            <td className="border px-3 py-2 text-center">
                                {user.tram ? '✅ Active' : '❌ Inactive'}
                            </td>
                            <td className="border px-3 py-2 space-x-2 text-center">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    onClick={() => console.log('Edit:', user._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => console.log('Delete:', user._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Test;

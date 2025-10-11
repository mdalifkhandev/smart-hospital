// hooks/userHooks.js
'use client';

import axiosInstance from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const useGetAllUser = () => {
  return useQuery({
    queryKey: ['users'], 
    queryFn: async () => {
      try {
        const response = await axiosInstance.get('/api/user/getalluser');
        return response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    },
    retry: 2, 
    staleTime: 5 * 60 * 1000, 
  });
};
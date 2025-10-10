'use client';

import axiosInstance from "@/lib/axios"
import {  useQuery } from "@tanstack/react-query"

export const useGetAllUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const result = await axiosInstance.get('/user/getalluser');
      return result.data;
    },
  });
};
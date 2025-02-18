"use client"

import React from 'react'

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/lib/getQueryClient';
type Props = {
    children:React.ReactNode
}

function QueryProvider({children}: Props) {
    const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default QueryProvider
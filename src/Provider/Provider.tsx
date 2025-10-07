'use client'

import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

export default function QueryClientProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient())

  return <Provider client={client}>{children}</Provider>
}
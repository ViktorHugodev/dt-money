import { createContext, ReactNode, useEffect, useState } from 'react';

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
}
interface TransactionsDataProvider {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextProps)


export function TransactionContextProvider({ children }: TransactionsDataProvider) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  async function getTransactionsData() {
    const response = await fetch('http://localhost:3331/transactions')
    const data = await response.json()
    setTransactions(data)
  }
  useEffect(() => {
    getTransactionsData()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
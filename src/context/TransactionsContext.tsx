import { ReactNode, useEffect, useState } from 'react'
import { NewTransactionFormProps } from '../components/NewTransactionModal'
import { api } from '../lib/api'
import { createContext } from 'use-context-selector'

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
  fetchTransactionsData: (query?: string) => Promise<void>
  createNewTransaction: (data: NewTransactionFormProps) => Promise<void>
}
interface TransactionsDataProvider {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextProps)

export function TransactionContextProvider({
  children,
}: TransactionsDataProvider) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function fetchTransactionsData(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: NewTransactionFormProps) {
    const { category, description, price, type } = data
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((state) => [response.data, ...state])
  }
  useEffect(() => {
    fetchTransactionsData()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactionsData,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

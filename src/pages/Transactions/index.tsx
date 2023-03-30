import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { PriceHighLight, TransactionContainer, TransactionTable } from './styles';

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function Transactions() {
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
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>
                    {transaction.category}
                  </td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}


          </tbody>
        </TransactionTable>
      </TransactionContainer>

    </>
  )
}
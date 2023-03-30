import { useContext } from 'react';
import { TransactionContext } from './../context/TransactionsContext';
export function useTransactions(){
  return useContext(TransactionContext)
}
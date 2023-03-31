import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'
const zodFormSchema = z.object({
  query: z.string(),
})
export type SearchFormInput = z.infer<typeof zodFormSchema>

export function SearchForm() {
  const { fetchTransactionsData } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(zodFormSchema),
  })

  async function handleSearchTransaction(data: SearchFormInput) {
    await fetchTransactionsData(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

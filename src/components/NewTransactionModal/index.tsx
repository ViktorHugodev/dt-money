import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles'
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTransactions } from '../../hooks/useTransactions'

const zodNewTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

export type NewTransactionFormProps = z.infer<typeof zodNewTransactionSchema>

export function NewTransactionModal() {
  const {createNewTransaction} = useTransactions()
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting } } = useForm<NewTransactionFormProps>({
      resolver: zodResolver(zodNewTransactionSchema)
    })

  async function handleNewTransactionForm(data: NewTransactionFormProps) {
    const {category, description, price, type} = data
    await createNewTransaction({
      category, description, price, type
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleNewTransactionForm)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />
          <Controller
            name='type'
            control={control}
            render={({field}) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionButton>

                  <TransactionButton variant='outcome' value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionButton>
                </TransactionType>
              )
            }}
          />

          <button
            disabled={isSubmitting}
            type="submit"
          >
            Cadastrar
          </button>
        </form>
        <CloseButton >
          <X size={24} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
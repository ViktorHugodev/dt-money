import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles'
import { ArrowCircleUp,ArrowCircleDown, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const zodNewTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),

})

export function NewTransactionModal() {
  const {register, handleSubmit, formState: {isSubmitting}} = useForm({
    resolver: zodResolver(zodNewTransactionSchema)
  })

  function handleNewTransactionForm(){

  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form>
          <input 
          type="text" 
          placeholder="Descrição" 
          {...register('description')}
          />
          <input 
          type="number" 
          placeholder="Preço" 
          {...register('price')}
          />
          <input 
          type="text" 
          placeholder="Categoria" 
          {...register('category')}
          />
          <TransactionType>
            <TransactionButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButton>

            <TransactionButton variant='outcome' value="outcome">
            <ArrowCircleDown size={24} />
              Saída
            </TransactionButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
        <CloseButton >
          <X size={24}/>
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
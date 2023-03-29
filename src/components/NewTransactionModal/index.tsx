import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionButton, TransactionType } from './styles'
import { ArrowCircleUp,ArrowCircleDown, X } from 'phosphor-react'
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form>
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />
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
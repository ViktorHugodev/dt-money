import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
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
          <div>
            <button>
              <ArrowCircleUp size={24}/>
              Entrada
            </button>

            <button>
            <ArrowCircleDown size={24}/>
              Saída
            </button>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <CloseButton >
          <X size={24}/>
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
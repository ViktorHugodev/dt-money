import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  border-radius: 6px;
  /* box-shadow: 0 4px 32px rgba(0, 0, 0, 0.8); */
  min-width: 32rem;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-100']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background-color: ${(props) => props.theme['green-500']};
      font-weight: bold;
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  border: 0;
  background-color: transparent;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
  line-height: 0;
  color: ${(props) => props.theme['gray-500']};
`
interface TransactionTypeProps {
  variant: 'income' | 'outcome'
}
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TransactionButton = styled(RadioGroup.Item)<TransactionTypeProps>`
  height: 58px;
  padding: 0 1rem;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  color: ${(props) => props.theme['gray-300']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
  &[data-state='unchecked'] {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-700']
        : props.theme['red-700']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

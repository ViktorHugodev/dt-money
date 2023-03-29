import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog'
export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;

`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${props => props.theme['green-500']};
  padding: 0 1.25rem;
  font-weight: bold;
  border-radius: 6px;
  color: ${props => props.theme['white']};
  &:hover {
    background-color: ${props => props.theme['green-700']};
  }

`
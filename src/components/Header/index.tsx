
import logoImg from '../../assets/dt-logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>

        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>

    </HeaderContainer>
  )
}
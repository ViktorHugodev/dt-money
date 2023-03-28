import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { PriceHighLight, TransactionContainer, TransactionTable } from './styles';

export function Transactions(){
  return (
    <>
    <Header/>
    <Summary />
    <TransactionContainer>
      <SearchForm />
    <TransactionTable>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
            <PriceHighLight variant="income">
              R$ 6.750,00
            </PriceHighLight>
            </td>
          <td>
            Venda
            </td>
          <td>27/03/2023</td>
        </tr>
        <tr>
          <td width="50%">Infra AWS</td>
          <td>
          <PriceHighLight variant="outcome">
              - R$ 3.750,00
            </PriceHighLight>
            </td>
          <td>Gastos</td>
          <td>22/03/2023</td>
        </tr>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>
          <PriceHighLight variant="income">
              R$ 6.750,00
            </PriceHighLight>
            </td>
          <td>Venda</td>
          <td>27/03/2023</td>
        </tr>
        <tr>
          <td width="50%">Desenvolvimento de site</td>
          <td>    
            <PriceHighLight variant="income">
              R$ 6.750,00
            </PriceHighLight>
            </td>
          <td>Venda</td>
          <td>27/03/2023</td>
        </tr>
      </tbody>
    </TransactionTable>
    </TransactionContainer>
    
    </>
  )
}
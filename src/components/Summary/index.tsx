import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react';

import { SummaryCard, SummaryContainer } from './styles';


export function Summary(){
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size ={32} color="#00B37E"/>
        </header>
        <strong>$ 17.480,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size ={32} color="#f75a68"/>
        </header>
        <strong>$ 6.480,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size ={32} color="#fff"/>
        </header>
        <strong>$ 12.480,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
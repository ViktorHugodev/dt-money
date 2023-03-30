import { ThemeProvider } from 'styled-components';
import { TransactionContextProvider } from './context/TransactionsContext';
import { Transactions } from './pages/Transactions';
import { GLobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionContextProvider>
        <Transactions />
        <GLobalStyle />
      </TransactionContextProvider>
    </ThemeProvider>
  )
}

export default App

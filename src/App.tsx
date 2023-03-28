import { ThemeProvider } from 'styled-components';
import { Transactions } from './pages/Transactions';
import { GLobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>


      <Transactions/>
      <GLobalStyle/>
    </ThemeProvider>
  )
}

export default App
import './App.css';
import 'animate.css';
import { Routes } from './routes';
import { Container } from './globalStyles';
import { Header } from './common/components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './common/themes';

function App() {

  return (
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
  )
}

export default App

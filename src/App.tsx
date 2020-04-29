import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { PizzaProvider } from './hooks/PizzaContext';

const App: React.FC = () => (
  <>
    <PizzaProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PizzaProvider>
    <GlobalStyle />
  </>
);

export default App;

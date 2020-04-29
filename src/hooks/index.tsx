import React from 'react';
import { PizzaProvider } from './usePizza';
import { ToastProvider } from './useToast';

const AppProvider: React.FC = ({ children }) => (
  <PizzaProvider>
    <ToastProvider>{children}</ToastProvider>
  </PizzaProvider>
);

export default AppProvider;

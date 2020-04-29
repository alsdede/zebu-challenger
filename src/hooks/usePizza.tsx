import React, { createContext, useCallback, useState, useContext } from 'react';

interface PizzaState {
  size: object;
  crust: object;
}

interface Size {
  value: string;

  label: string;

  price: number;

  maxIngridientes: number;
}

interface Crust {
  value: string;

  label: string;

  price: number;
}

interface PizzaContextData {
  pizza: object;
  addPizzaSize(size: Size): void;
  addPizzaCrust(crust: Crust): void;
}
export const PizzaContext = createContext<PizzaContextData>(
  {} as PizzaContextData,
);

export const PizzaProvider: React.FC = ({ children }) => {
  const [pizza, setPizza] = useState<PizzaState>({} as PizzaState);

  const addPizzaSize = useCallback((size) => {
    const sizePizza = size;

    localStorage.setItem('@size', JSON.stringify(sizePizza));
    // console.log(sizePizza);
    setPizza(size);
  }, []);

  const addPizzaCrust = useCallback((crust) => {
    const crustPizza = crust;
    console.log(crustPizza);
    setPizza(crust);
  }, []);
  return (
    <PizzaContext.Provider value={{ pizza, addPizzaSize, addPizzaCrust }}>
      {children}
    </PizzaContext.Provider>
  );
};

export function usePizza(): PizzaContextData {
  const context = useContext(PizzaContext);

  if (!context) {
    throw new Error('usePizza must be used within an PizzaProvier');
  }
  return context;
}

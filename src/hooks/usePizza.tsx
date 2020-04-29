import React, { createContext, useCallback, useState, useContext } from 'react';
import { useToast } from './useToast';

interface PizzaState {
  size: object;
  crust: object;
  total?: number;
  toppings: Toppings[];
}

interface Toppings {
  id: number;
  value: string;
  label: string;
  image: string;
}
interface Size {
  id: number;
  value: string;

  label: string;

  price: number;

  maxIngridientes: number;
}

interface Crust {
  id: number;
  value: string;

  label: string;

  price: number;
}

interface PizzaContextData {
  pizza: object;
  size: Size;
  crust: Crust;
  toppings: Toppings[];
  total: number | undefined;
  addPizzaSize(size: Size): void;
  addPizzaCrust(crust: Crust): void;
  addPizzaToppings(topping: Toppings): void;
}
export const PizzaContext = createContext<PizzaContextData>(
  {} as PizzaContextData,
);

export const PizzaProvider: React.FC = ({ children }) => {
  const [pizza, setPizza] = useState<PizzaState>({} as PizzaState);
  const [size, setSize] = useState<Size>({} as Size);
  const [crust, setCrust] = useState<Crust>({} as Crust);
  const [toppings, setToppings] = useState<Toppings[]>([]);
  const [total, setTotal] = useState<number | undefined>();

  const { addToast } = useToast();

  const addPizzaSize = useCallback(
    (pizzaSize) => {
      const sizePizza = pizzaSize;

      localStorage.setItem('@size', JSON.stringify(sizePizza));
      // console.log(sizePizza);
      setSize(pizzaSize);
      setTotal(pizzaSize.price);
    },
    [total],
  );

  const addPizzaCrust = useCallback(
    (pizzaCrust) => {
      const crustPizza = pizzaCrust;

      setCrust(crustPizza);

      const updateTotal = total + pizzaCrust.price;
      setTotal(updateTotal);
    },
    [total],
  );

  const addPizzaToppings = useCallback(
    (pizzaToppings) => {
      const toppingExist = toppings.find(
        (topping) => topping.id === pizzaToppings.id,
      );
      if (toppingExist) {
        return alert('Only one (1) ingredients of each');
      }
      if (toppings.length >= size.maxIngridientes) {
        addToast({
          type: 'info',
          title: 'Alert!!',
          description: `Extra ingredients coust +$0,50`,
        });
        if (total) {
          const updateTotal = total + 0.5;

          setTotal(updateTotal);
        }
        console.log(total);
      }

      setToppings((state) => [...state, pizzaToppings]);
    },
    [addToast, size, total, toppings],
  );
  return (
    <PizzaContext.Provider
      value={{
        pizza,
        size,
        crust,
        toppings,
        total,
        addPizzaSize,
        addPizzaCrust,
        addPizzaToppings,
      }}
    >
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

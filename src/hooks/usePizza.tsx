import React, { createContext, useCallback, useState, useContext } from 'react';
import { useToast } from './useToast';

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
  size: Size;
  crust: Crust;
  toppings: Toppings[];
  total: number | undefined;
  extraItems: number | undefined;
  addPizzaSize(size: Size): void;
  addPizzaCrust(crust: Crust): void;
  addPizzaToppings(topping: Toppings): void;
  addTotal(): void;
}
export const PizzaContext = createContext<PizzaContextData>(
  {} as PizzaContextData,
);

export const PizzaProvider: React.FC = ({ children }) => {
  const [size, setSize] = useState<Size>({} as Size);
  const [crust, setCrust] = useState<Crust>({} as Crust);
  const [toppings, setToppings] = useState<Toppings[]>([]);
  const [total, setTotal] = useState<number | undefined>();
  const [extraItems, setExtraItems] = useState<number | undefined>();

  const { addToast } = useToast();

  const addTotal = useCallback(() => {
    if (toppings.length >= 3) {
      const extraIngredients = toppings.length - 3;
      setExtraItems(extraIngredients);
      if (extraIngredients > 0) {
        const updateTotal = size.price + crust.price + extraIngredients * 0.5;
        setTotal(updateTotal);
      } else {
        const updateTotal = size.price + crust.price;
        setTotal(updateTotal);
      }
    }
  }, [size, crust, toppings]);

  const addPizzaSize = useCallback((pizzaSize) => {
    const sizePizza = pizzaSize;

    localStorage.setItem('@size', JSON.stringify(sizePizza));
    // console.log(sizePizza);
    setSize(pizzaSize);
    setTotal(pizzaSize.price);
  }, []);

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

      if (size.value === 'small' && toppings.length >= 5) {
        return alert(`Max 5 toppings in ${size.value.toLocaleUpperCase()}`);
      }

      if (size.value === 'medium' && toppings.length >= 7) {
        return alert(`Max 5 toppings in ${size.value.toLocaleUpperCase()}`);
      }
      if (size.value === 'large' && toppings.length >= 10) {
        return alert(`Max 5 toppings in ${size.value.toLocaleUpperCase()}`);
      }

      setToppings((state) => [...state, pizzaToppings]);
    },
    [toppings, size.value],
  );

  return (
    <PizzaContext.Provider
      value={{
        extraItems,
        size,
        crust,
        toppings,
        total,
        addPizzaSize,
        addPizzaCrust,
        addPizzaToppings,
        addTotal,
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

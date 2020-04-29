import React, { useState, useContext } from 'react';
import { usePizza } from '../../hooks/PizzaContext';
import {
  Container,
  Error,
  NextButton,
  Title,
  PizzaSizeButton,
  CrustButton,
  PizzaContainerSize,
  PizzaContainerCrust,
} from './styles';

import PizzaAvatar from '../../assets/forma.png';

type OptionCrustType = {
  value: string;
  label: string;
  price: number;
};

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

const sizeOptions: Size[] = [
  { value: 'small', label: 'Small - 9 inches', price: 8, maxIngridientes: 5 },
  {
    value: 'medium',
    label: 'Medium - 12 inches',
    price: 10,
    maxIngridientes: 7,
  },
  {
    value: 'large',
    label: 'Large - 14 inches',
    price: 12,
    maxIngridientes: 10,
  },
];

const crustOptions: Crust[] = [
  { value: 'thin', label: `Thin +$2`, price: 2 },
  { value: 'thick', label: 'Thick +$4', price: 4 },
];

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [selected, setSelected] = useState<boolean>(false);
  const [sizePizza, setSizePizza] = useState<Size>();
  const [crust, setCrust] = useState<Crust>();

  const { addPizzaSize, addPizzaCrust, pizza } = usePizza();
  console.log(pizza);

  const handleSelectPizza = (option: Size) => {
    if (crust) {
      setCrust(undefined);
    }
    setSizePizza(option);
    setSelected(true);
    addPizzaSize(option);
  };

  const handleSelectCrust = (option: Crust) => {
    setCrust(option);
    addPizzaCrust(option);
  };
  return (
    <>
      <Container>
        <Title>Choose Pizza Size:</Title>
        <PizzaContainerSize>
          {sizeOptions.map((size) => (
            <>
              <PizzaSizeButton
                selected={!!sizePizza && sizePizza === size}
                onClick={() => {
                  handleSelectPizza(size);
                }}
              >
                <img src={PizzaAvatar} alt="pizza" />
                <span>{size.label}</span>
                <span>
Price: $
{size.price}
                </span>
                {!!sizePizza && sizePizza === size ? (
                  <PizzaContainerCrust>
                    <span>Choose pizza Crust</span>
                    {crustOptions.map((c) => (
                      <CrustButton
                        onClick={() => {
                          handleSelectCrust(c);
                        }}
                        selected={!!crust && crust === c}
                      >
                        {c?.label}
                      </CrustButton>
                    ))}
                  </PizzaContainerCrust>
                ) : (
                  ''
                )}
              </PizzaSizeButton>
            </>
          ))}
        </PizzaContainerSize>

        <NextButton to="/toppings">Select Toppings</NextButton>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;

import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { usePizza } from '../../hooks/usePizza';
import { useToast } from '../../hooks/useToast';
import {
  Avatar,
  Container,
  Error,
  NextButton,
  Title,
  PizzaSize,
  PizzaCrust,
  CrustButton,
  PizzaContainer,
  PizzaContainerSize,
  PizzaContainerCrust,
  PizzaInfoSize,
} from './styles';

import PizzaAvatar from '../../assets/forma.png';

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

const sizeOptions: Size[] = [
  {
    id: 0,
    value: 'small',
    label: 'Small - 9 inches',
    price: 8,
    maxIngridientes: 5,
  },
  {
    id: 1,
    value: 'medium',
    label: 'Medium - 12 inches',
    price: 10,
    maxIngridientes: 7,
  },
  {
    id: 2,
    value: 'large',
    label: 'Large - 14 inches',
    price: 12,
    maxIngridientes: 10,
  },
];

const crustOptions: Crust[] = [
  { id: 0, value: 'thin', label: `Thin +$2`, price: 2 },
  { id: 1, value: 'thick', label: 'Thick +$4', price: 4 },
];

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [sizePizza, setSizePizza] = useState<Size>();
  const [crust, setCrust] = useState<Crust>();

  const { addPizzaSize, addPizzaCrust, pizza, size, total } = usePizza();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSelectPizza = (option: Size): void => {
    setSizePizza(option);
    addPizzaSize(option);

    if (size) {
      addToast({
        type: 'success',
        title: 'Pizza!! ',
        description: `You select a Pizza ${size.label}  $,${size.price}`,
      });
    }
  };

  const handleSelectCrust = useCallback(
    (option: Crust): void => {
      setCrust(option);
      addPizzaCrust(option);
    },
    [addPizzaCrust],
  );

  const navigateToppings = () => {
    history.push('/toppings');
  };
  return (
    <>
      <Container>
        <Title>Make your PIZZA:</Title>
        <PizzaContainer>
          <PizzaContainerSize>
            {sizeOptions.map((sizeOption) => (
              <PizzaSize
                key={sizeOption.id}
                selected={!!sizePizza && sizePizza === sizeOption}
                onClick={() => {
                  handleSelectPizza(sizeOption);
                }}
              >
                <PizzaInfoSize>
                  <Avatar src={PizzaAvatar} alt="pizza" />
                  <span>{sizeOption.label}</span>
                  <span>
                    Price: $
{sizeOption.price.toFixed(2)}
                  </span>
                  <span
                    style={{ marginTop: 2, fontSize: 16, color: '#ea1d2c' }}
                  >
                    max: {sizeOption.maxIngridientes}
{' '}
Ingredients{' '}
                  </span>
                </PizzaInfoSize>
              </PizzaSize>
            ))}
          </PizzaContainerSize>
          <PizzaContainerCrust>
            {sizePizza && (
              <PizzaCrust>
                {crustOptions.map((c) => (
                  <CrustButton
                    key={c.id}
                    onClick={() => {
                      handleSelectCrust(c);
                    }}
                    selected={!!crust && crust === c}
                  >
                    {c?.label}
                  </CrustButton>
                ))}
              </PizzaCrust>
            )}
          </PizzaContainerCrust>
        </PizzaContainer>

        <NextButton disabled={!crust} onClick={navigateToppings}>
          Select Toppings
        </NextButton>
      </Container>
    </>
  );
};

export default Dashboard;

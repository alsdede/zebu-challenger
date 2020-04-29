import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePizza } from '../../hooks/usePizza';
import { Container, PizzaInfo, Title, Topping, Row } from './styles';
import PizzaAvatar from '../../assets/pizza.png';

const Check: React.FC = () => {
  const {
    addPizzaSize,
    addPizzaCrust,
    pizza,
    size,
    crust,
    total,
    toppings,
  } = usePizza();
  return (
    <>
      <Container>
        <PizzaInfo>
          <img src={PizzaAvatar} alt="pizza" />
          <strong>Checkout</strong>
          <Row>
            Pizza
            {size.label}
          </Row>
          <Row>
            Crust
            {crust.label}
          </Row>
          <Row>
            Extra Ingredients:
            {toppings.length} $
          </Row>
          <span />
          <span>
Total: $
{total?.toFixed(2)}
          </span>
        </PizzaInfo>
        <PizzaInfo>
          <Title>Ingredients</Title>
          {toppings.map((topping) => (
            <Row>{topping.label}</Row>
          ))}
          <Topping />
        </PizzaInfo>
      </Container>
    </>
  );
};

export default Check;

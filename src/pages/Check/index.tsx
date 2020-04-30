import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePizza } from '../../hooks/usePizza';
import {
  Container,
  PizzaInfo,
  Title,
  Topping,
  Row,
  PizzaIngredients,
} from './styles';
import PizzaAvatar from '../../assets/pizza.png';

const Check: React.FC = () => {
  const { size, crust, total, toppings, extraItems } = usePizza();
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
            {extraItems}
{' '}
          </Row>
          <span />
          <span>
Total: $
{total?.toFixed(2)}
          </span>
        </PizzaInfo>
        <PizzaIngredients>
          <Title>Ingredients</Title>
          {toppings.map((topping) => (
            <Row style={{ fontSize: 18 }}>
{' '}
-{topping.label}</Row>
          ))}
          <Topping />
        </PizzaIngredients>
      </Container>
    </>
  );
};

export default Check;

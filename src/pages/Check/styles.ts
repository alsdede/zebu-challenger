import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  height: 100%;
  padding: 20px;
`;

export const PizzaInfo = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    font-size: 18px;
    color: #888;
    margin-top: 5px;
    justify-content: initial;
    align-items: center;
  }

  strong {
    margin-top: 10px;
    font-size: 22px;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
`;

export const PizzaIngredients = styled.div`
  background: #fff;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    font-size: 18px;
    color: #888;
    margin-top: 5px;
    justify-content: initial;
    align-items: center;
  }

  strong {
    margin-top: 10px;
    font-size: 22px;
  }
`;

export const Row = styled.span``;

export const ToppingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  list-style: none;
`;
export const Topping = styled.li`
  display: flex;

  background: #fff;
  border-radius: 4px;
  padding: 15px;
  align-items: center;

  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
  span {
    font-size: 20px;
  }
`;

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface NavigateButtonProps {
  disabled: boolean;
}

interface ButtonToppingsProps {
  selected: boolean;
}

export const Container = styled.div`
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`;

export const ToppingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  list-style: none;
`;

export const PizzaCheck = styled.div`
  display: flex;
  flex: 1;
`;
export const Topping = styled.li<ButtonToppingsProps>`
  display: flex;

  background: #fff;
  border-radius: 4px;
  padding: 15px;
  align-items: center;

  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  ${(props) =>
    props.selected &&
    css`
      border: 2px solid red;

      opacity: 0.7;
    `}

  &:hover {
    opacity: 0.8;
  }
  img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
  }
  span {
    font-size: 20px;
  }
`;

export const NextButton = styled.button<NavigateButtonProps>`
  text-decoration: none;
  color: #fff;
  background: #ea1d2c;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 25px;
  margin-right: 20px;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const BackButton = styled.button`
  text-decoration: none;
  color: #fff;
  background: #ea1d2c;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 25px;
  margin-right: 120px;
`;

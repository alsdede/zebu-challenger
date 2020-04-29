import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonSizeProps {
  selected: boolean;
}
interface NavigateButtonProps {
  disabled: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`;
export const Title = styled.h2`
  color: #333;
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
`;

export const PizzaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PizzaInfoSize = styled.div``;
export const PizzaContainerSize = styled.div`
  display: flex;
`;

export const PizzaSize = styled.div<ButtonSizeProps>`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  border-radius: 6px;
  padding: 20px;
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

  span {
    display: flex;
    font-size: 20px;

    margin-top: 20px;
    justify-content: center;
  }
`;

export const PizzaContainerCrust = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const PizzaCrust = styled.div`
  display: flex;
`;

export const CrustButton = styled.div<ButtonSizeProps>`
  display: flex;
  background: #fff;
  color: #333;
  font-weight: 700;
  margin-right: 20px;
  border-radius: 6px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: opacity 0.2s;
  ${(props) =>
    props.selected &&
    css`
      border: 2px solid red;

      opacity: 0.7;
    `}

  &:hover {
    opacity: 0.8;
  }

  span {
    display: flex;
    font-size: 20px;

    margin-top: 20px;
    justify-content: center;
  }
`;

export const NextButton = styled.button<NavigateButtonProps>`
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  background: #ea1d2c;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
`;

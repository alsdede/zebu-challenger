import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonSizeProps {
  selected: boolean;
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

export const Avatar = styled.img``;

export const PizzaContainerSize = styled.div`
  display: flex;
`;
export const CrustButton = styled.div<ButtonSizeProps>`
  background: #f0f0f0;
  display: flex;
  color: #333;
  font-weight: 700;
  flex-direction: row;
  margin-top: 10px;
  border-radius: 6px;
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
export const PizzaSizeButton = styled.div<ButtonSizeProps>`
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 6px;
  padding: 20px;
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

export const PizzaContainerCrust = styled.div``;

export const NextButton = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  background: #ea1d2c;
  border-radius: 5px;
  padding: 10px;
  font-weight: 700;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
`;

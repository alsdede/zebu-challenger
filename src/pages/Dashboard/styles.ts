import styled from 'styled-components';
import { Grid, Paper, Typography } from '@material-ui/core';

export const Content = styled.main`
  padding: 20px;
`;

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 6,
})`
  padding: 20px;
`;
export const PaperPizza = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  min-width: 250px;
`;

export const Pizza = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    background: #ccc;
    content: '';
  }

  &::before {
    width: 160px;
    height: 1px;
    position: absolute;
    transform: rotate(45deg);
  }

  &::after {
    width: 1px;
    height: 160px;
    position: absolute;
    transform: rotate(45deg);
  }
`;

export const PizzaText = styled(Typography).attrs({
  variant: 'h5',
})`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  z-index: 1;
`;

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center',
})``;

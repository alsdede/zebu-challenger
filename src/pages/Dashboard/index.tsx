import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {
  Content,
  PaperPizza,
  Pizza,
  PizzasGrid,
  PizzaText,
  Title,
} from './styles';

const pizzaSizes = [
  {
    id: 0,
    name: 'Small',
    toppings: 5,
    price: 8,
  },
  {
    id: 1,
    name: 'Medium',
    toppings: 7,
    price: 10,
  },
  {
    id: 2,
    name: 'Large',
    toppings: 9,
    price: 12,
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <Content>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Title variant="h3" gutterBottom>
              Choose your size
            </Title>
          </Grid>
        </Grid>
        <PizzasGrid>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <PaperPizza style={{ padding: 20 }}>
                <Pizza>
                  <PizzaText>{pizza.name}</PizzaText>
                </Pizza>
                <Typography variant="h5">
                  U$
                  {pizza.price}
                </Typography>
                <Typography>
                  Maximun ingredients
                  {pizza.toppings}
                </Typography>
              </PaperPizza>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
    </>
  );
};

export default Dashboard;

import React from 'react';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <h3>Pizza</h3>
      <h4>Size: Medium</h4>
      <h4>Crust: Thin</h4>
      <h3>Ingridients</h3>
      <h4>Azeitonas | Peperoni | Mushroom</h4>
    </Container>
  );
};

export default Footer;

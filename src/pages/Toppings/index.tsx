import React, { useState } from 'react';
import Select, { ValueType } from 'react-select';
import { Container, Header, PizzaCheck, Topping, ToppingsList } from './styles';
import PizzaAvatar from '../../assets/pizza.png';

type Topping = {
  value: string;
  label: string;
  image: string;
};
// const toppings: Topping[] = [
//   {
//     id: 0,
//     name: 'Pepperoni',
//     checked: false,
//   },
//   {
//     id: 1,
//     name: 'Mushrooms',
//     checked: false,
//   },
//   {
//     id: 2,
//     name: 'Onions',
//     checked: false,
//   },
//   {
//     id: 3,
//     name: 'Sausage',
//     checked: false,
//   },
//   {
//     id: 4,
//     name: 'Bacon',
//     checked: false,
//   },
//   {
//     id: 5,
//     name: 'Extra cheese',
//     checked: false,
//   },
//   {
//     id: 6,
//     name: 'Black olives',
//     checked: false,
//   },
//   {
//     id: 7,
//     name: 'Green peppers',
//     checked: false,
//   },
//   {
//     id: 8,
//     name: 'Pineapple',
//     checked: false,
//   },
//   {
//     id: 9,
//     name: 'Spinach',
//     checked: false,
//   },
// ];

const optionsToppings: Topping[] = [
  {
    value: 'pepperoni',
    label: 'Pepperoni',
    image:
      'https://toppng.com/uploads/preview/epperoni-transparent-single-pepperoni-11562915199mfbla9n7e4.png',
  },
  {
    value: 'mushrooms',
    label: 'mushrooms',
    image:
      'https://w7.pngwing.com/pngs/794/550/png-transparent-two-brown-and-white-mushrooms-common-mushroom-food-shimeji-fungiculture-hd-mushroom-mushroom-eating-wholesale-mushroom-soup.png',
  },
  {
    value: 'onions',
    label: 'Onios',
    image: 'https://syldonfoods.co.uk/wp-content/uploads/2019/10/19on.jpg',
  },
  {
    value: 'sausage',
    label: 'Sausage',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31J-PPXxN2L.jpg',
  },
  {
    value: 'bacon',
    label: 'Bacon',
    image:
      'https://conteudo.imguol.com.br/2015/05/22/bacon-em-fatias-getty-1432320853816_1920x1348.jpg',
  },
  {
    value: 'extra-cheese',
    label: 'Extra cheese',
    image: 'https://www.guiagphr.com.br/Imagens/galeria_9716_0430094606.jpg',
  },
  {
    value: 'black-olives',
    label: 'Black olives',
    image:
      'https://uploads-ssl.webflow.com/5cf62806c6188329a4fafe4b/5cf62806c618838c14faffa3_black_edit4.jpg',
  },
  {
    value: 'green-peppers',
    label: 'Green peppers',
    image:
      'https://groceries.morrisons.com/productImages/122/122259011_0_640x640.jpg?identifier=47fc0756233dd314708a8245e4cf3584',
  },
  {
    value: 'pineapple',
    label: 'Pineapple',
    image:
      'https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg',
  },
  {
    value: 'spinach',
    label: 'Spinach',
    image:
      'https://cdn.mos.cms.futurecdn.net/atyrpYQoxdoTzmEgu8HMWE-320-80.jpg',
  },
];
const Toppings: React.FC = () => {
  const [toppings, setSelectedOption] = useState<Topping>();

  return (
    <>
      <Container>
        <Header>
          <div>
            <span>Choose 3 Ingridients</span>
          </div>
          <div>
            <span>extra ingridients $0,50</span>
            <span>Price $10,00</span>
          </div>
        </Header>

        <ToppingsList>
          {optionsToppings.map((topping) => (
            <Topping>
              <img src={topping.image} alt="pizza-avatar" />
              <span>{topping.label}</span>
            </Topping>
          ))}
        </ToppingsList>
      </Container>
    </>
  );
};

export default Toppings;

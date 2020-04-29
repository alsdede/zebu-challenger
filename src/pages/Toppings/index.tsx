import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePizza } from '../../hooks/usePizza';
import { useToast } from '../../hooks/useToast';
import {
  Container,
  Header,
  NextButton,
  BackButton,
  Topping,
  ToppingsList,
} from './styles';

type Topping = {
  id: number;
  value: string;
  label: string;
  image: string;
};

const optionsToppings: Topping[] = [
  {
    id: 0,
    value: 'pepperoni',
    label: 'Pepperoni',
    image:
      'https://toppng.com/uploads/preview/epperoni-transparent-single-pepperoni-11562915199mfbla9n7e4.png',
  },
  {
    id: 1,
    value: 'mushrooms',
    label: 'mushrooms',
    image:
      'https://w7.pngwing.com/pngs/794/550/png-transparent-two-brown-and-white-mushrooms-common-mushroom-food-shimeji-fungiculture-hd-mushroom-mushroom-eating-wholesale-mushroom-soup.png',
  },
  {
    id: 2,
    value: 'onions',
    label: 'Onios',
    image: 'https://syldonfoods.co.uk/wp-content/uploads/2019/10/19on.jpg',
  },
  {
    id: 3,
    value: 'sausage',
    label: 'Sausage',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31J-PPXxN2L.jpg',
  },
  {
    id: 4,
    value: 'bacon',
    label: 'Bacon',
    image:
      'https://conteudo.imguol.com.br/2015/05/22/bacon-em-fatias-getty-1432320853816_1920x1348.jpg',
  },
  {
    id: 5,
    value: 'extra-cheese',
    label: 'Extra cheese',
    image: 'https://www.guiagphr.com.br/Imagens/galeria_9716_0430094606.jpg',
  },
  {
    id: 6,
    value: 'black-olives',
    label: 'Black olives',
    image:
      'https://uploads-ssl.webflow.com/5cf62806c6188329a4fafe4b/5cf62806c618838c14faffa3_black_edit4.jpg',
  },
  {
    id: 7,
    value: 'green-peppers',
    label: 'Green peppers',
    image:
      'https://groceries.morrisons.com/productImages/122/122259011_0_640x640.jpg?identifier=47fc0756233dd314708a8245e4cf3584',
  },
  {
    id: 8,
    value: 'pineapple',
    label: 'Pineapple',
    image:
      'https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg',
  },
  {
    id: 9,
    value: 'spinach',
    label: 'Spinach',
    image:
      'https://cdn.mos.cms.futurecdn.net/atyrpYQoxdoTzmEgu8HMWE-320-80.jpg',
  },
];
const Toppings: React.FC = () => {
  const [toppingPizza, setToppingPizza] = useState<Topping[]>([]);

  const { addPizzaToppings, addTotal, total, size, toppings } = usePizza();
  const { addToast } = useToast();
  const history = useHistory();

  const handleAddTopping = (option: Topping): void => {
    setToppingPizza([...toppings, option]);
    addPizzaToppings(option);

    addToast({
      type: 'info',
      title: 'Pizza Toppings',
      description: `Add ${option.label} in your Pizza`,
    });
  };

  const navigateBack = () => {
    history.goBack();
  };
  const navigateForward = () => {
    history.push('/check');
    addTotal();
  };
  return (
    <>
      <Container>
        <Header>
          <span>
            Ingredients selected:
            {toppings.length}
          </span>
          <h2>Select 3 Ingredients</h2>
          <span>Extra ingredients +$0,50</span>
        </Header>

        <ToppingsList>
          {optionsToppings.map((topping) => (
            <Topping
              key={topping.id}
              onClick={() => handleAddTopping(topping)}
              selected={topping === toppingPizza.find((t) => t === topping)}
            >
              <img src={topping.image} alt="pizza-avatar" />
              <span>{topping.label}</span>
            </Topping>
          ))}
        </ToppingsList>

        <BackButton onClick={navigateBack}>Back</BackButton>
        <NextButton disabled={!toppings.length} onClick={navigateForward}>
          Checkout
        </NextButton>
      </Container>
    </>
  );
};

export default Toppings;

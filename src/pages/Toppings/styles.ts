import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  padding: 5px;

  span {
    font-size: 20px;
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

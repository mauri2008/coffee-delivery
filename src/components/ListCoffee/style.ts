import styled from 'styled-components'

export const ContainerListCoffee = styled.article`
  padding: 2rem 10rem;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 'ExtraBold';
    font-size: 2rem;
  }
`

export const ListCoffee = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin-top: 3.37rem;
`

export const ItemListCoffee = styled.section`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;
`

export const ImageCoffeList = styled.div`
  max-width: 120px;
  max-height: 120px;
  margin-top: calc(0px - 3.5rem);
  margin-bottom: 1rem;
  img {
    width: 100%;
  }
`

export const Chip = styled.p`
  padding: 0.4rem 1rem;
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  margin-bottom: 1rem;
`

export const TitleCoffeeList = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`
export const DescriptionCoffeeList = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  font-size: 0.87rem;
  color: ${(props) => props.theme.label};
  margin-bottom: 1.8rem;
`
export const ContainerBuy = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`
export const PriceBuy = styled.div`
  display: inline-block;
  font-size: 0.87rem;
  strong {
    margin-left: 0.3rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`
export const ActionBuy = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;

  button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    svg {
      margin-top: 0.2rem;
    }
  }

  .btnShopping {
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['color-white']};
    padding: 0 0.6rem;
    border-radius: 6px;
  }
`
export const AddOrRemoveShopping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.button};
  padding: 0.5rem;
  border-radius: 6px;
`

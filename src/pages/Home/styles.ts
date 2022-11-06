import styled from 'styled-components'
import background from '../../assets/Background.svg'

export const ContainerHome = styled.div``
export const IntroHome = styled.div`
  background-image: url(${background});
  display: flex;
  padding: 5rem 10rem;
  gap: 2rem;
  img {
    max-width: 50.25rem;
  }
`
export const DescriberCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  h1 {
    font-family: 'baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: normal;
  }

  small {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: normal;
  }
`
export const ListCoffeeQuali = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1.25rem;
  margin-top: 2rem;
`
export const ItemCoffeeQuali = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

interface PropsColorIcons {
  [key: string]: string
}
const colorIcons: PropsColorIcons = {
  orangeDark: '#c47f17',
  orange: '#DBAC2C',
  gray: '#403937',
  purple: '#4b2995',
}

interface PropsIconCoffeeQuali {
  colorCircle?: 'orangeDark' | 'orange' | 'gray' | 'purple'
}
export const IconCoffeeQuali = styled.div<PropsIconCoffeeQuali>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.colorCircle ? colorIcons[props.colorCircle] : '#403937'};
  border-radius: 1000px;
  color: ${(props) => props.theme['color-white']};
`

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
  gap: 2rem;
  margin-top: 3.37rem;
`

export const ItemListCoffee = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.card};
  border-radius: 6px 36px;
`

export const ImageCoffeList = styled.div`
  max-width: 120px;
  max-height: 120px;
  margin-top: calc(0px - 2.3rem);
  img {
    width: 100%;
  }
`

export const Chip = styled.p`
  padding: 0.4rem 1rem;
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`

export const TitleCoffeeList = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  margin: 0;
  padding: 0;
`
export const DescriptionCoffeeList = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.87rem;
  text-align: center;
  color: ${(props) => props.theme.label};
`
export const ContainerBuy = styled.div`
  display: flex;
  justify-content: space-between;
`
export const PriceBuy = styled.div`
  display: inline-block;
`
export const ActionBuy = styled.div`
  display: flex;
  gap: 0.5rem;
`

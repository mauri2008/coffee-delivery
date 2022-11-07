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

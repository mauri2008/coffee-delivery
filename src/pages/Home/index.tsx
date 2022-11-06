import {
  Chip,
  ContainerHome,
  ContainerListCoffee,
  DescriberCoffee,
  DescriptionCoffeeList,
  IconCoffeeQuali,
  ImageCoffeList,
  IntroHome,
  ItemCoffeeQuali,
  ItemListCoffee,
  ListCoffee,
  ListCoffeeQuali,
  TitleCoffeeList,
} from './styles'

import introCoffee from '../../assets/introCoffee.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

import coffeeDefault from '../../assets/coffee/coffeeDefault.png'

export function Home() {
  return (
    <ContainerHome>
      <IntroHome>
        <DescriberCoffee>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <small>
            com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </small>

          <ListCoffeeQuali>
            <ItemCoffeeQuali>
              <IconCoffeeQuali colorCircle="orangeDark">
                <ShoppingCart />
              </IconCoffeeQuali>{' '}
              Compra simples e segura
            </ItemCoffeeQuali>

            <ItemCoffeeQuali>
              <IconCoffeeQuali>
                <Package />
              </IconCoffeeQuali>{' '}
              Embalagem mantém o café intacto
            </ItemCoffeeQuali>
            <ItemCoffeeQuali>
              <IconCoffeeQuali colorCircle="orange">
                <Timer />
              </IconCoffeeQuali>{' '}
              Entrega rápida e rastreada
            </ItemCoffeeQuali>
            <ItemCoffeeQuali>
              <IconCoffeeQuali colorCircle="purple">
                <Coffee />
              </IconCoffeeQuali>{' '}
              O Café chega fresquinho até você
            </ItemCoffeeQuali>
          </ListCoffeeQuali>
        </DescriberCoffee>

        <img src={introCoffee} alt="" />
      </IntroHome>

      <ContainerListCoffee>
        <h2>Nossos cafés</h2>

        <ListCoffee>
          <ItemListCoffee>
            <ImageCoffeList>
              <img src={coffeeDefault} alt="" />
            </ImageCoffeList>
            <Chip>tradicional</Chip>
            <TitleCoffeeList>Expresso tradicional</TitleCoffeeList>
            <DescriptionCoffeeList>
              O tradicional café feito com agua quente e grãos moidos
            </DescriptionCoffeeList>
            <div>
              <div>
                <small>R$</small>
                <p>9,90</p>
              </div>
              <div>
                <input type="number" />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </ItemListCoffee>
          <ItemListCoffee>café2</ItemListCoffee>
          <ItemListCoffee>café3</ItemListCoffee>
          <ItemListCoffee>café4</ItemListCoffee>
        </ListCoffee>
      </ContainerListCoffee>
    </ContainerHome>
  )
}

import {
  ContainerHome,
  DescriberCoffee,
  IconCoffeeQuali,
  IntroHome,
  ItemCoffeeQuali,
  ListCoffeeQuali,
} from './styles'

import introCoffee from '../../assets/introCoffee.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { HandleListCoffee } from '../../components/ListCoffee'

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

      <HandleListCoffee />
    </ContainerHome>
  )
}

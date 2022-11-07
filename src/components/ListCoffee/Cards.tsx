import {
  ActionBuy,
  AddOrRemoveShopping,
  Chip,
  ContainerBuy,
  DescriptionCoffeeList,
  ImageCoffeList,
  ItemListCoffee,
  PriceBuy,
  TitleCoffeeList,
} from './style'

import coffeeDefault from '../../assets/coffee/coffeeDefault.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Cards() {
  return (
    <ItemListCoffee>
      <ImageCoffeList>
        <img src={coffeeDefault} alt="" />
      </ImageCoffeList>
      <Chip>tradicional</Chip>
      <TitleCoffeeList>Expresso tradicional</TitleCoffeeList>
      <DescriptionCoffeeList>
        <p>O tradicional café feito com agua {'\n'} quente e grãos moidos</p>
      </DescriptionCoffeeList>
      <ContainerBuy>
        <PriceBuy>
          <span>R$</span>
          <strong>9,90</strong>
        </PriceBuy>
        <ActionBuy>
          <AddOrRemoveShopping>
            <button>
              <Minus />
            </button>
            <span>1</span>
            <button>
              <Plus />
            </button>
          </AddOrRemoveShopping>
          <button className="btnShopping">
            <ShoppingCart />
          </button>
        </ActionBuy>
      </ContainerBuy>
    </ItemListCoffee>
  )
}

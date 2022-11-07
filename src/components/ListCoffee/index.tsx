import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Cards } from './Cards'
import { ContainerListCoffee, ListCoffee } from './style'

export function HandleListCoffee() {
  return (
    <ContainerListCoffee>
      <h2>Nossos cafés</h2>
      <ListCoffee>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </ListCoffee>
    </ContainerListCoffee>
  )
}

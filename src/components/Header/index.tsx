import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <NavLink to="/" title="" className="btnLocation">
          <MapPin /> <p>Porto Alegre, RS</p>
        </NavLink>

        <NavLink to="/" title="" className="btnCompras">
          <ShoppingCart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

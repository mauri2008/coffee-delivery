import styled from 'styled-components'
import { lighten } from 'polished'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.background};
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
    }

    .btnLocation {
      color: ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }

    .btnCompras {
      color: ${(props) => props.theme.yellow};
      background: ${(props) => props.theme['yellow-light']};
    }
  }
`

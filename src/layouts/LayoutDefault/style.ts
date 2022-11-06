import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
`
export const LayoutContent = styled.main`
  background-color: ${(props) => props.theme.background};
`

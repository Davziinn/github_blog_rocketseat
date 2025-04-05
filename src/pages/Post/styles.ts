import { styled } from 'styled-components'

export const GlobalPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-background']};
`


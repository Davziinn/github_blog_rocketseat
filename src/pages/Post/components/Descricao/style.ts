import { styled } from "styled-components";

export const DescricaoTexto = styled.p`
  max-width: 864px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
  margin-top: 2rem;
`

export const Topico = styled.u`
    font-size: 16px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
`
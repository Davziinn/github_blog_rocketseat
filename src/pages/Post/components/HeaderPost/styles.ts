import styled from 'styled-components'

export const PerfilContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  margin-top: -150px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 1;
`


export const PerfilHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PerfilContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PerfilInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 8px;
  }
`

export const PerfilLink = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  span {
    font-size: 14px;
  }
`

export const PerfilIcons = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: auto;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: ${(props) => props.theme['base-label']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

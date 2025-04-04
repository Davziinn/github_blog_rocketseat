import styled from 'styled-components'

export const PerfilContainer = styled.div`
    height: 212px;
    width: 864px;
    background-color: ${(props) => props.theme['base-profile']};
    display: flex;
    padding: 32px 40px;
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    margin-top: -120px;
    position: relative;
`

export const PerfilContent = styled.div`
    display: flex;
    gap: 32px;
    flex-grow: 1;

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`

export const PerfilInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    h1 {
        font-size: 24px;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
        margin-bottom: 24px;
    }
`

export const PerfilLink = styled.a`
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    height: fit-content;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;

    &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    span {
        font-size: 16px;
    }
`

export const PerfilIcons = styled.div`
    display: flex;
    gap: 24px;
    margin-top: auto;

    span {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        color: ${(props) => props.theme['base-subtitle']};

        svg {
            color: ${(props) => props.theme['base-label']};
        }
    }
`
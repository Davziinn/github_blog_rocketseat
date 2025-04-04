import styled from 'styled-components'

export const IssuesContainer = styled.div`
    width: 416px;
    height: 260px;
    background: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 2px solid transparent;
    transition: border-color 0.2s;
    cursor: pointer;

    &:hover {
        border-color: ${(props) => props.theme['base-label']};
    }

    p {
        font-size: 16px;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
    }
`

export const TitleContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    
    h1 {
        font-size: 20px;
        color: ${(props) => props.theme['base-title']};
        flex: 1;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    span {
        font-size: 14px;
        color: ${(props) => props.theme['base-span']};
        white-space: nowrap;
    }
`
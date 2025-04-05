import styled from 'styled-components'

export const Container = styled.div`
  background-color: #1f2a38;
  padding: 2rem;
  border-radius: 6px;
  width: 100%;
  max-width: 864px;
  margin: 2rem auto;
  font-family: 'Fira Code', monospace;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`

export const CodeBlock = styled.pre`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  width: 100%;

  code {
    display: block;
    width: 100%;
    
    div {
      margin-bottom: 0.4rem;
    }
  }

  .blue {
    color: #5db0ff;
  }

  .green {
    color: #3fe87f;
  }

  .comment {
    color: #888;
    margin-left: 0.5rem;
  }
`
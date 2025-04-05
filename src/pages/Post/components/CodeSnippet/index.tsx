import { Container, CodeBlock } from './styles'

export function CodeSnippet() {
  return (
    <Container>
      <CodeBlock>
        <span>
          <code>
            <span className="blue">let</span> foo = <span className="green">42</span>;{' '}
            <span className="comment">// foo is now a number</span>
          </code>
          <br />
        </span>
        <span>
          <code>
            foo = <span className="green">‘bar’</span>;{' '}
            <span className="comment">// foo is now a string</span>
          </code>
          <br />
        </span>
        <span>
          <code>
            foo = <span className="green">true</span>;{' '}
            <span className="comment">// foo is now a boolean</span>
          </code>
          <br />
        </span>
      </CodeBlock>
    </Container>
  )
}

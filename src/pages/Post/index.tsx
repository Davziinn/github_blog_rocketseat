import { CodeSnippet } from "./components/CodeSnippet"
import { Descricao } from "./components/Descricao"
import { HeaderPost } from "./components/HeaderPost"
import { GlobalPerfil } from "./styles"

export function Post() {
  return (
    <GlobalPerfil>
      <HeaderPost />
      <Descricao />
      <CodeSnippet />
    </GlobalPerfil>
  )
}

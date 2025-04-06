import { useParams } from "react-router-dom"
import { CodeSnippet } from "./components/CodeSnippet"
import { Descricao } from "./components/Descricao"
import { HeaderPost } from "./components/HeaderPost"
import { GlobalPerfil } from "./styles"
import { useEffect, useState } from "react"

type Issues = {
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
  html_url: string
}


export function Post() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issues | null>(null)

  useEffect(() => {
    async function fetchIssue() {
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const url = `https://api.github.com/repos/facebook/react/issues/${id}`
      const response = await fetch(proxy + url)
      const data = await response.json()
      setIssue(data)
    }

    fetchIssue()

  }, [id])

  if (!issue) {
    return <p>Carregando...</p>
  }

  return (
    <GlobalPerfil>
      <HeaderPost issue={issue} />
      <Descricao body={issue.body} />
      <CodeSnippet />
    </GlobalPerfil>
  )
}
//         
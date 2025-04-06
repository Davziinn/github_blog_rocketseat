import { useEffect, useState } from "react"
import { Buscar } from "./components/Buscar"
import { Issues } from "./components/Issues"
import { Perfil } from "./components/Perfil"
import { BlogContainer, ListaIssues } from "./styles"

type Issue = {
    id: number
    number: number
    title: string
    body: string
    created_at: string
}

type PerfilData = {
    avatar_url: string
    name: string
    bio: string
    login: string
    company: string
    followers: number
}

export function Blog() {
    const [issues, setIssues] = useState<Issue[]>([])
    const [perfil, setPerfil] = useState<PerfilData | null>(null)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        async function fetchData() {
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const issuesResponse = await fetch(proxy + 'https://api.github.com/repos/facebook/react/issues')
            const issuesData = await issuesResponse.json()
            setIssues(issuesData)

            const perfilResponse = await fetch('https://api.github.com/users/Davziinn')
            const perfilData = await perfilResponse.json()
            setPerfil(perfilData)
        }

        fetchData()
    }, [])

    const filteredIssues = issues.filter(issue =>
        (issue.title?.toLowerCase().includes(searchText.toLowerCase()) || 
         issue.body?.toLowerCase().includes(searchText.toLowerCase()))
      )
      

    return (
        <BlogContainer>
            {perfil && (
                <Perfil
                    avatar_url={perfil.avatar_url}
                    name={perfil.name}
                    bio={perfil.bio}
                    login={perfil.login}
                    company={perfil.company}
                    followers={perfil.followers}
                />
            )}

            <Buscar
                total={filteredIssues.length}
                search={searchText}
                onSearchChange={setSearchText}
            />

            <ListaIssues>
                {filteredIssues.map(issue => (
                    <Issues
                        key={issue.id}
                        id={issue.number}
                        title={issue.title}
                        body={issue.body}
                        created_at={issue.created_at}
                    />
                ))}
            </ListaIssues>
        </BlogContainer>
    )
}

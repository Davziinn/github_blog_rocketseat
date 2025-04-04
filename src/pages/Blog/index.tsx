import { Buscar } from "./components/Buscar";
import { Issues } from "./components/Issues";
import { Perfil } from "./components/Perfil";
import { BlogContainer, ListaIssues } from "./styles";

export function Blog() {
    return (
        <BlogContainer>
            <Perfil />
            <Buscar />
            <ListaIssues>     
                <Issues />
                <Issues />
                <Issues />
                <Issues />
                <Issues />
                <Issues />
            </ListaIssues>

        </BlogContainer>
    )
}
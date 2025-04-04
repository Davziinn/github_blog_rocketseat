import { BuscarContainer, Title } from "./styles";

export function Buscar() {
    return (
        <BuscarContainer>
            <Title>
                <strong>Publicações</strong>
                <span>6 publicações</span>
            </Title>

            <input type="text" placeholder="Texto da busca"/>
        </BuscarContainer>
    )
}
import { BuscarContainer, Title } from "./styles";

type BuscarProps = {
    total: number;
    search: string
    onSearchChange: (value: string) => void
}

export function Buscar({ total, search, onSearchChange }: BuscarProps) {
    return (
        <BuscarContainer>
            <Title>
                <strong>Publicações</strong>
                <span>{total} publicações</span>
            </Title>

            <input 
                type="text" 
                placeholder="Texto da busca"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </BuscarContainer>
    )
}
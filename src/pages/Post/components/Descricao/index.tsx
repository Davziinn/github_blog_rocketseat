import { DescricaoTexto, Topico } from "./style";

type DescricaoProps = {
    body: string
  }

export function Descricao({ body }: DescricaoProps) {
    return (
        <>
            <DescricaoTexto>
               {body}
            </DescricaoTexto>


            <DescricaoTexto>
                <Topico>
                    Dynamic typing
                </Topico>
                <br />
                JavaScript is a loosely typed and dynamic language. 
                Variables in JavaScript are not directly associated with any particular value type,
                and any variable can be assigned (and re-assigned) values of all types:
            </DescricaoTexto>
        </>
    )
}

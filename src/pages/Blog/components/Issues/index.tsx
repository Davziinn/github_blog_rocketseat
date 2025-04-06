import { NavLink } from "react-router-dom";
import { IssuesContainer, TitleContent } from "./styles";

type IssuesProps = {
    id: number;
    title: string;
    body: string;
    created_at: string;
}

export function Issues({ id, title, body, created_at }: IssuesProps) {
    return (
        <NavLink to={`/post/${id}`}>
            <IssuesContainer>
                <TitleContent>
                    <h1>
                        {title}
                    </h1>
                    <span>{new Date(created_at).toLocaleDateString()}</span>
                </TitleContent>

                <p>
                    {body}
                </p>
        </IssuesContainer>
       </NavLink>
    )
}
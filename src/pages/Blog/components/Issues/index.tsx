import { NavLink } from "react-router-dom";
import { IssuesContainer, TitleContent } from "./styles";

export function Issues() {
    return (
       <NavLink to="post">
            <IssuesContainer>
                <TitleContent>
                    <h1>
                        JavaScript data types and data structures
                    </h1>
                    <span>Há 1 dia</span>
                </TitleContent>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda, voluptates. Unde soluta labore harum. 
                    Maiores exercitationem in nihil accusantium eveniet corporis veritatis provident debitis aliquid, 
                    architecto odit! Cum, doloremque eos.
                </p>
        </IssuesContainer>
       </NavLink>
    )
}
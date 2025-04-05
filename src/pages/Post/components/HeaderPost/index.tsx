import { FaGithub, FaRegCalendarAlt } from "react-icons/fa";
import { PerfilContainer, PerfilContent, PerfilHeader, PerfilIcons, PerfilInfo, PerfilLink } from "./styles";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export function HeaderPost() {
    return (
        <PerfilContainer>
            <PerfilHeader>
                <PerfilLink href="/">← VOLTAR</PerfilLink>
                <PerfilLink href="https://github.com" target="_blank">
                    VER NO GITHUB <span>↗</span>
                </PerfilLink>
            </PerfilHeader>

            <PerfilContent>
                <PerfilInfo>
                    <h1>JavaScript data types and data structures</h1>
                    <PerfilIcons>
                        <span>
                            <FaGithub />
                            cameronwll
                        </span>
                        <span>
                            <FaRegCalendarAlt />
                            Há 1 dia
                        </span>
                        <span>
                            <HiChatBubbleLeftRight />
                            5 comentários
                        </span>
                    </PerfilIcons>
                </PerfilInfo>
            </PerfilContent>

        </PerfilContainer>
    )
}
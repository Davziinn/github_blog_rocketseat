import { FaGithub, FaRegCalendarAlt } from "react-icons/fa";
import { PerfilContainer, PerfilContent, PerfilHeader, PerfilIcons, PerfilInfo, PerfilLink } from "./styles";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

type HeaderPostProps = {
    issue: {
      title: string
      user: {
        login: string
      }
      created_at: string
      comments: number
      html_url: string
    }
  }

  export function HeaderPost({ issue }: HeaderPostProps) {
    if (!issue || !issue.user) return <p>Carregando...</p>

    return (
        <PerfilContainer>
            <PerfilHeader>
                <PerfilLink href="/">← VOLTAR</PerfilLink>
                <PerfilLink href={issue.html_url} target="_blank">
                    VER NO GITHUB <span>↗</span>
                </PerfilLink>
            </PerfilHeader>

            <PerfilContent>
                <PerfilInfo>
                    <h1>{issue.title}</h1>
                    <PerfilIcons>
                        <span>
                            <FaGithub />
                            {issue.user.login}
                        </span>
                        <span>
                            <FaRegCalendarAlt />
                            {new Date(issue.created_at).toDateString()}
                        </span>
                        <span>
                            <HiChatBubbleLeftRight />
                            {issue.comments} comentários
                        </span>
                    </PerfilIcons>
                </PerfilInfo>
            </PerfilContent>
        </PerfilContainer>
    )
}
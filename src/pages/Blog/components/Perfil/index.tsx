import { PerfilContainer, PerfilContent, PerfilInfo, PerfilIcons, PerfilLink } from './styles'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'


type PerfilProps = {
    avatar_url: string
    name: string
    bio: string
    login: string
    company: string
    followers: number
}

export function Perfil({ avatar_url, bio, company, followers, login, name }: PerfilProps) {
    return (
        <PerfilContainer>
            <PerfilContent>
                <img src={avatar_url} alt="Avatar" />
                <PerfilInfo>
                    <h1>{name}</h1>
                    <p>
                        {bio}
                    </p>
                    <PerfilIcons>
                        <span>
                            <FaGithub />
                            {login}
                        </span>
                        <span>
                            <FaBuilding />
                            {company}
                        </span>
                        <span>
                            <FaUserFriends />
                            {followers} seguidores
                        </span>
                    </PerfilIcons>
                </PerfilInfo>
            </PerfilContent>
            <PerfilLink href={`https://github.com/${login}`} target="_blank">
                GITHUB
                <span>↗</span>
            </PerfilLink>
        </PerfilContainer>
    )
}
import { PerfilContainer, PerfilContent, PerfilInfo, PerfilIcons, PerfilLink } from './styles'
import avatar from '../../../../assets/avatar.svg'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'

export function Perfil() {
    return (
        <PerfilContainer>
            <PerfilContent>
                <img src={avatar} alt="Avatar" />
                <PerfilInfo>
                    <h1>Cameron Williamson</h1>
                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                        Eu viverra massa quam dignissim aenean malesuada suscipit. 
                        Nunc, volutpat pulvinar vel mass.
                    </p>
                    <PerfilIcons>
                        <span>
                            <FaGithub />
                            cameronwll
                        </span>
                        <span>
                            <FaBuilding />
                            Rocketseat
                        </span>
                        <span>
                            <FaUserFriends />
                            32 seguidores
                        </span>
                    </PerfilIcons>
                </PerfilInfo>
            </PerfilContent>
            <PerfilLink href="https://github.com" target="_blank">
                GITHUB
                <span>↗</span>
            </PerfilLink>
        </PerfilContainer>
    )
}
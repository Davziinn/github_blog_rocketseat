import cover from '../../assets/cover-principal.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={cover} alt="" />
        </HeaderContainer>
    )
}
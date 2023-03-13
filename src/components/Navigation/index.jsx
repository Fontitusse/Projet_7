import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

function Navigation() {
    return  (
        <nav>
            <UlHeader>
            <li><LinkHeader to="/">Accueil</LinkHeader></li>
            <li><LinkHeader to="/propos">A propos</LinkHeader></li>
            </UlHeader>
        </nav>
    )     
}

export default Navigation

const UlHeader = styled.ul`
    display:flex;
    flex-direction:row;
    list-style:none;
    gap: 50px;
    font-size: clamp(12px, 2.5vw, 24px);
    @media screen and (max-width: 700px){
        gap: 10px;
    }
`

const LinkHeader = styled(Link)`
    color: ${colors.secondary};
    text-decoration:none;
    &:hover {
        cursor:pointer;
        position: relative;
        color: ${colors.secondary};
        transition: all 0.2s ease-in-out;
        text-decoration: underline solid ${colors.secondary}; 
    }
    @media screen and (max-width: 700px){
        text-transform: uppercase;
    }
`

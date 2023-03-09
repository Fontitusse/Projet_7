import logo from '../../assets/logo.png'
import Navigation from '../Navigation'
import styled from 'styled-components'
 
function Header() {
    return (
        <HeaderContainer>
        <img src={logo} alt="Logo Kasa - Chez vous, partout et ailleur"/>
        <Navigation />
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between; 
    height: 68px;
    max-width: 95%;
    margin: 0 auto;
    @media screen and (max-width: 900px){
        height: 40px;
    }
`
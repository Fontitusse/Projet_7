import styled from 'styled-components'
import home_cover from '../../assets/home_cover.png'
import colors from '../../utils/style/colors'

function Banner() {
    return (
        <BannerHome>
            <BannerText>Chez vous, partout&#160;et&#160;ailleurs</BannerText>
        </BannerHome>
    )
}

export default Banner

const BannerHome = styled.div`
    position: relative;
    border-radius: 25px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${home_cover}');
    background-position: center;
    background-size: cover;
    height: 223px;
    padding: 20px;
    max-width: 95%;
    margin: 43px auto;
    @media screen and (max-width: 550px){
        max-width: 95%;
        margin: 25px auto;
        height: 120px;
`

const BannerText = styled.p`
        color: ${colors.primary};
        font-size: clamp(20px, 4vw, 48px);
        text-align: center;
        font-weight: 500;
        position: relative;
        margin:60px;
        @media screen and (max-width: 550px){
            text-align: left;
            margin:15px 45px 15px 5px;
        }
        `
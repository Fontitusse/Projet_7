import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export default function Card({id, title, cover}) {

	return (
		
		<CardContainerLink to={`/Logements/${id}`} className="flexbox">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</CardContainerLink>
	)
}


const CardContainerLink = styled(Link)`
	position: relative;
    width: 30%;
    height: 340px;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    transition : box-shadow 0.2s ease-in-out;
    @media screen and (max-width: 1230px){
        width: 47%;   
    }
    @media screen and (max-width: 900px){
        width: 100%;    
    }
    @media screen and (max-width: 500px){
        height: 200px;
    }
    &::after{
        content: '';
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    }
    &:hover{
        box-shadow: 0 2px 8px rgb(0, 0, 0);
    }
    &:hover img{
        transform: scale(1.1);
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.2s ease-in-out;
        will-change: transform;
    }
    h3{
        z-index: 20;
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        font-weight: 500;
        font-size: clamp(12px, 3vw, 18px);
        color: ${colors.primary};
    }
`

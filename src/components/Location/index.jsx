import datas from '../../data/data'
import Card from '../Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


export default function Location() {
    return (
        <LocationCard>
            {datas.map((data, index) => (
                <Card
                key={data.id}
                id={data.id}
                title={data.title}
                cover={data.cover}
                />
            ))}
        </LocationCard>
    )
}

const LocationCard = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    background-color: ${colors.tertiary};
    padding: 50px;
    border-radius: 25px;
    width: 95%;
    margin: 0 auto;
    @media screen and (max-width: 1230px){
        gap: 25px; 
        padding:25px 15px;       
    }
    @media screen and (max-width: 550px){  
        width: 100%;
    }
`

import Header from "../../components/Header";
import styled from "styled-components";
import Carousel from "../../components/Carousel"

function Logements() {
    return (
      <LogementsContainer>
        <Header />
        <Carousel />
      </LogementsContainer>
    );
  }
  
  export default Logements;

  const LogementsContainer = styled.div`
  font-family: 'Montserrat';
    max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
        padding-top: 20px;
        margin:10px;
    } 
  `
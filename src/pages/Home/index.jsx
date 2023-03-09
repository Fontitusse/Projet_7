import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import styled from "styled-components";
import '../../index.css'

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <Location />
      <Footer />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
    font-family: 'Montserrat';
    max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
        padding-top: 20px;
        margin:10px;
    } 
`

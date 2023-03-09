import Header from "../../components/Header";
import { Link } from 'react-router-dom'
import styled from "styled-components";

export default function Error() {
  return (
    <ErrorPage>
        <Header />
        <h1>404</h1>
        <div className="error__message">Oops! La page que vous demandez n'existe pas.</div>
        <p className="error__retour--acceuil"><Link to="/">Retourner sur la page d'accueil</Link></p>
    </ErrorPage>
  );
}

const ErrorPage = styled.div`
  font-family: 'Montserrat';
  max-width: 1440px;
    padding-top: 40px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
        padding-top: 20px;
        margin:10px;
    }
`
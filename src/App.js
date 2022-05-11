import styled from 'styled-components';
import MkLogo from './imagens/mk.jpg';
import Counter from './components/container_contador'
import './App.css';


const App = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  font-family: 'Press Start 2P';
`;
const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  `;
const Logo = styled.img`
  height: 170px;
`;



const Aplication = () => {
  return (
    <App>
      <LogoContainer>
        <Logo 
        src={MkLogo}
        alt='Logo of Aplication practice' />
      </LogoContainer>
      <Counter />

    </App>
      
  );
}

export default Aplication;

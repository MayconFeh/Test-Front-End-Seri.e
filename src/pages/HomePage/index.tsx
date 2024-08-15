import { Header } from '../../components/Header/index';
import { InfoHome } from '../../components/CharacterHomeInfos';
import { SearchBar } from '../../components/SearchBar';
import { HomePageStyled } from './HomePage.styles';

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header />
      <InfoHome/>
      <SearchBar/>

    </HomePageStyled>
  );
};

export default HomePage;

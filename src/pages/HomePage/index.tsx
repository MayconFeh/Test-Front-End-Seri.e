import { Header } from "../../components/Header";
import { InfoHome } from "../../components/CharacterHomeInfos";
import { SearchBar } from "../../components/SearchBar";
import { HomePageStyled } from "./HomePage.styles";
import { ListCharacter } from "../../components/CharacterList";
import { useMarvel } from "../../providers/CharacterContext";

const HomePage = () => {
  const { setSearchTerm } = useMarvel();

  const handleSearch = (searchQuery?: string) => {
    setSearchTerm(searchQuery || '');
  };

  return (
    <HomePageStyled>
      <Header />
      <InfoHome />
      <SearchBar onSearch={handleSearch} />
      <ListCharacter />
    </HomePageStyled>
  );
};

export default HomePage;

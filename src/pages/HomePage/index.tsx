import { useEffect } from "react";
import { Header } from "../../components/Header";
import { InfoHome } from "../../components/CharacterHomeInfos";
import { SearchBar } from "../../components/SearchBar";
import { HomePageStyled } from "./HomePage.styles";
import { ListCharacter } from "../../components/CharacterList";
import { useMarvel } from "../../providers/CharacterContext";

const HomePage = () => {
  const { characters, fetchCharacters } = useMarvel();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleSearch = (query: string) => {
    fetchCharacters(query);
  };

  return (
    <HomePageStyled>
      <Header />
      <InfoHome />
      <SearchBar onSearch={handleSearch} />
      <ListCharacter characters={characters} />
    </HomePageStyled>
  );
};

export default HomePage;

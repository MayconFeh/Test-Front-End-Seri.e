import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { InfoHome } from "../../components/CharacterHomeInfos";
import { SearchBar } from "../../components/SearchBar";
import { HomePageStyled } from "./HomePage.styles";
import { ListCharacter } from "../../components/CharacterList";
import { useMarvel } from "../../providers/CharacterContext";
import { Footer } from "../../components/Footer";

const HomePage = () => {
  const {  setSearchTerm, fetchCharacters } = useMarvel();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('nameStartsWith') || '';
    setSearchTerm(searchQuery);
    fetchCharacters(searchQuery); 
  }, [location.search, setSearchTerm, fetchCharacters]);

  const handleSearch = (searchQuery?: string) => {
    setSearchTerm(searchQuery || '');
    navigate(`/?nameStartsWith=${encodeURIComponent(searchQuery || '')}`);
  };

  return (
    <HomePageStyled>
      <Header />
      <InfoHome />
      <SearchBar onSearch={handleSearch} />
      <ListCharacter />
      <Footer />
    </HomePageStyled>
  );
};

export default HomePage;

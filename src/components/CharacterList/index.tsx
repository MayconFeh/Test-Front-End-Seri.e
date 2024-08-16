import { useEffect, useState } from "react";
import { CardCharacter } from "./CharacterCard/index";
import { ListCharacterStyled } from "./CharacterList.styles";
import { useMarvel } from "../../providers/CharacterContext";

export const ListCharacter = () => {
  const { characters, loading, fetchCharacters } = useMarvel();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCharacters(searchTerm);
  }, [searchTerm, fetchCharacters]);

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      
      <ListCharacterStyled>
        {characters.map((character) => (
          <CardCharacter key={character.id} name={character.name} imageSrc={character.thumbnail.extension}>
          </CardCharacter>
        ))}
      </ListCharacterStyled>
    </main>
  );
};

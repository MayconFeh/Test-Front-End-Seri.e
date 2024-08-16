import { useEffect } from "react";
import { CardCharacter } from "./CharacterCard/index";
import { ListCharacterStyled } from "./CharacterList.styles";
import { useMarvel } from "../../providers/CharacterContext";

export const ListCharacter = () => {
  const { characters, loading, searchTerm, fetchCharacters } = useMarvel();

  useEffect(() => {
    if (searchTerm !== "") {
      fetchCharacters(searchTerm);
    } else {
      fetchCharacters();
    }
  }, [searchTerm, fetchCharacters]);

  return (
    <main>
      {loading ? (
        <div className="loadingContainer">
          <div className="loading"></div>
        </div>
      ) : (
        <ListCharacterStyled>
          {characters.map((character) => (
            <CardCharacter
              key={character.id}
              name={character.name}
              imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </ListCharacterStyled>
      )}
    </main>
  );
  // return (
  //   <ListCharacterStyled>
  //     <CardCharacter name="Iron Man" imageSrc="jpg" />
  //   </ListCharacterStyled>
  // )
};

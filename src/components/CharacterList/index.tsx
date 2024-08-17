import { useEffect } from "react";
import { CardCharacter } from "./CharacterCard/index";
import { ListCharacterStyled } from "./CharacterList.styles";
import { useMarvel } from "../../providers/CharacterContext";
import { FilterBar } from "../FilterBar";

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
      <FilterBar/>
      {loading ? (
        <div className="loadingContainer">
          <div className="loading"></div>
        </div>
      ) : (
        <ListCharacterStyled>
          {characters.map((character) => (
            <CardCharacter
              key={character.id}
              modified={character.modified}
              name={character.name}
              id={character.id}
              comics={character.comics}
              series={character.series}
              description={character.description}
              thumbnail={character.thumbnail}
              imageSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))}
        </ListCharacterStyled>
      )}
    </main>
  );
};

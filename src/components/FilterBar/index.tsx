import { StyledText } from "../../styles/typography";
import { FilterBarButtonsContainerStyled, FilterBarStyled } from "./FilterBar.styles";
import imgHero from "../../assets/img/icones/heroi/noun_Superhero_2227044.png";
import heartR from "../../assets/img/icones/heart/Path Copy 7@1,5x.png";
import { useMarvel } from "../../providers/CharacterContext";
import { useState } from "react";

const imghero = imgHero;
const heartRed = heartR;

export const FilterBar = () => {
  const { totalCharacters, showFavorites, setShowFavorites } = useMarvel();
  const [toggled, setToggled] = useState(showFavorites);

  const handleToggleFavorites = () => {
    setToggled(!toggled);
    setShowFavorites(!toggled);
  };

  return (
    <FilterBarStyled>
      <StyledText>{`Encontrados ${totalCharacters} herois`}</StyledText>
      <FilterBarButtonsContainerStyled>
        <img src={imghero} alt="" />
        <StyledText>Ordenar por nome - A/Z </StyledText>
        <button
          className={`toggle-btn ${toggled ? "toggled" : "not-toggled"}`}
          onClick={handleToggleFavorites}
        >
          <div className="thumb"></div>
        </button>
        <img src={heartRed} alt="" />
        <StyledText>Somente favoritos</StyledText>
      </FilterBarButtonsContainerStyled>
    </FilterBarStyled>
  );
};

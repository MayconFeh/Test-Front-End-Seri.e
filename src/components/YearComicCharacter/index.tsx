import React from "react";
import { Comic } from "../../interfaces/Comic.interface";
import { YearComicCharacterStyled } from "./YearComicCharacter.styles";
import { StyledH3 } from "../../styles/typography";

interface YearComicCharacterProps {
  comic: Comic | null;
}

const formatBrazilianDate = (isoDate: string) => {
  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",
  ];

  const date = new Date(isoDate);

  if (isNaN(date.getTime())) {
    console.error("Invalid date:", isoDate);
    return "Data não disponível";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const YearComicCharacter: React.FC<YearComicCharacterProps> = ({ comic }) => {
  const firstComicDate = comic && comic.dates && comic.dates.length > 0
    ? formatBrazilianDate(comic.dates[0].date)
    : "Data não disponível";

  return (
    <YearComicCharacterStyled>
      <StyledH3>Último quadrinho:</StyledH3>
      <p>{firstComicDate}</p>
    </YearComicCharacterStyled>
  );
};

export { YearComicCharacter };

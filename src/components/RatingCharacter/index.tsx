import emptyStar from "../../assets/img/review/Path Copy 6.png";
import fullStar from "../../assets/img/review/Path.png";
import { StyledH3 } from "../../styles/typography";
import { RatingCharacterStyled } from "./RatingCharacter.styles";
import { useState } from "react";

interface RatingCharacterProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

export const RatingCharacter = ({
  rating,
  onRatingChange,
}: RatingCharacterProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (index: number) => {
    onRatingChange(index);
  };

  return (
    <RatingCharacterStyled>
    <StyledH3>Rating:</StyledH3>
      {Array.from({ length: 5 }, (_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= (hoveredRating || rating);
        return (
          <img
            key={starIndex}
            src={isFilled ? fullStar : emptyStar}
            alt={`Star ${starIndex}`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          />
        );
      })}
    </RatingCharacterStyled>
  );
};

import styled from 'styled-components';

export const LogoStyled = styled.img`
  max-height: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    max-height: 80%;
  }

  @media (max-width: 480px) {
    max-height: 60%;
  }
`;
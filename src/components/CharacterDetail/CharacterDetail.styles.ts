import styled from "styled-components";

export const CharacterDetailStyled = styled.div`
  margin-top: 50px;
  height: 80vh;
  max-width:80% ;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  
  gap: 20px;
  padding: 20px;

  > img {
    height: 500px;
    width: 500px;
  }

 
`;
export const CharacterDetailInFoStyled = styled.div`
  width: 100%;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  

  >.info-comics{
    display: flex;
    flex-direction: column;
    gap:20px;
  }
`;

export const CharacterDetailLoadingStyled = styled.div`
  height: 100vh;
`;


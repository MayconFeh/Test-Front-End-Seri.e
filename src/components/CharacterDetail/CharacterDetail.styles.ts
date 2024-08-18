import styled from "styled-components";

export const CharacterDetailStyled = styled.div`
  margin-top: 50px;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  > img {
    height: 500px;
    width: 400px;
  }

 
`;
export const CharacterDetailInFoStyled = styled.div`
  width: 40%;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  > div {
    display: flex;
    flex-direction: row;
    > h1 {
      font-size: 50px;
    }
  }
  >.info-comics{
    display: flex;
    flex-direction: column;
    gap:20px;
  }
`;

export const CharacterDetailLoadingStyled = styled.div`
  height: 100vh;
`;


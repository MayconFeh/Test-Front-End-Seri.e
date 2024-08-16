import styled from "styled-components";

export const CardCharacterStyled = styled.li`
  
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  height: 160px;
  width: 250px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 15px;

  >img{
    width: 100%;
    height: 120px;
    border-bottom:solid red;
  }
  
`;

export const CardCharacterInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  
  >button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    >img{
      width: 20px;
      height: 20px;
    }
  }
`
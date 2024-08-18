import styled from "styled-components";

export const CardCharacterStyled = styled.li`
  
  
  cursor: pointer;
  height: 160px;
  width: 250px;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 15px;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, border 0.3s ease;

  >img{
    width: 100%;
    height: 120px;
    display: block;
    transition: transform 0.3s ease;
    border-bottom:solid red;
  }
  &:hover {
    transform: scale(1.05s);
    border: 2px solid red;
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
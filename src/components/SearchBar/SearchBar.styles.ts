import styled from "styled-components";

export const ConteinerSearch = styled.div`
    width: 100%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    > button {
        border: none;
        background-color: transparent;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        > img {
            width: 100%;
        }
    }
`;

export const SearchBarStyled = styled.input`
  width: 100%;
  max-width: 700px;
  height: 40px;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 50px;
  font-size: 16px;
  background-color: var(--color-color-primary-2);
  color: var(--color-color-primary);
  box-sizing: border-box;

  &::placeholder {
    color: var(--color-color-primary);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px; 
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 50px;
  }
`;

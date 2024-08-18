import styled from "styled-components";

export const ConteinerSearch = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  max-width: 700px;
  > form {
    width: 100%;
    > button {
      border: none;
      background-color: transparent;
      width: 30px;
      height: 30px;
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      left: 1rem;
      top: 5px;

      > img {
        width: 100%;
      }
    }
  }
`;

export const SearchBarStyled = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 50px;
  font-size: 16px;
  background-color: var(--color-color-primary-2);
  color: black;
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

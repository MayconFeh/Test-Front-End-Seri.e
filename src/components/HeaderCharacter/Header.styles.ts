import styled from "styled-components";

export const StyledHeaderCharacter = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 0 1.25rem;
  display: flex;
  justify-content: row;
  gap: 20px;

  > img {
    width: 100px;
    height: 50px;
  }
  > div {
    > form {
      > input {
        background-color: var(--color-white);
        color: black;
        width: 80%;

        &::placeholder {
          color: var(--color-grey-3);
        }
      }
    }
  }
`;

import styled from "styled-components";

export const CharacterNameStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    > h1 {
      font-size: 100px;
    }
    >img{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`
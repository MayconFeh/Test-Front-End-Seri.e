import styled from "styled-components";

export const CharacterNameStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100px;
    justify-content: space-between;
    > h1 {
      font-size: 35px;
    }
    >img{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`
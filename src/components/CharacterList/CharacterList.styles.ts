import styled from 'styled-components';

export const ListCharacterStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

`;



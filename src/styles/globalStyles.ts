import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
	--color-color-primary: #ff1510;
	--color-color-primary-2: #fdecec;
	--color-color-secondary: #e7f6e7;
	--color-grey-1: #404040;
	--color-grey-2: #8c8c8c;
	--color-grey-3: #b9b9b9;
    --color-white:#ffffff ;

}


body{
  background-color: var(--color-white);
  min-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  color:var(--color-color-primary);

}

#root{
  display:flex;
  flex-direction: column;

  justify-content: flex-start;
  
  gap: 20px;
  box-sizing: border-box;

}


`
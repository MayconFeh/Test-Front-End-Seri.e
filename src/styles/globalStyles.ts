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
 
  color:var(--color-color-primary);

}

main {
  min-height: 100vh;
  max-width: 100vw;
  width:80vw;
}

.toggle-btn {
  background-color: var(--color-grey-3);
  width: 60px;
  height: 20px;
  border-radius: 99px;
  border: none;
  outline: none;
  transition: background-color 0.6 ease,;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.70);
  position: relative;

  >.thumb{
    width: 15px;
    height: 15px;
    background-color: var(--color-color-primary);
    border-radius: 50%;
    transform: translateX(0);
    transition: left 0.15s ease;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
  }
}



.toggle-btn.toggled{
  >.thumb{
    left: calc(100% - 18px);
  }
}



#root{
  display:flex;
  flex-direction: column;

  justify-content: flex-start;
  
  gap: 20px;
  box-sizing: border-box;

}

.loadingContainer{
  display: flex;
  flex-direction:column;

  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  top: 50%;
}
.loading{
  width: 60px;
  height: 60px;
  border-radius:50%;
  animation: spin 1.2s linear infinite;
 
  &::before,
  &::after{
  content: "";
  position: absolute;
  border-radius: inherit;
  }
  &::before{
    width: 100%;
    height: 100%;
   background-image: 
   linear-gradient(0deg,
    red 0%,
    yellow 100%
    );
  }
    &::after{
      width: 85%;
    height: 85%;
    background:white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }


}


@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.comics{
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 width: 90%;
 margin: 0 auto;
 gap: 50px;
 >h2{
  font-size: 20px;
  color: black;
 }
}
`;

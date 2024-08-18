import { MarvelProvider } from "./providers/CharacterContext";
import AppRoutes from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { Reset } from "./styles/reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MarvelProvider>
        <AppRoutes />
      </MarvelProvider>
    </>
  );
}

export default App;

import AppRoutes from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { Reset } from "./styles/reset";



function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <AppRoutes/>
    </>
  );
}

export default App;

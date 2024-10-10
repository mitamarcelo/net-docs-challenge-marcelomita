import Grid from "./components/Grid";
import ActionButtons from "./components/ActionButtons";
import { useGridResize } from "./hooks/useGridResize";
import * as Styled from "./App.styles";

function App() {
  useGridResize();

  return (
    <Styled.AppContainer>
      <Styled.Title>Game of Life</Styled.Title>
      <Styled.GridWrapper>
        <Grid />
      </Styled.GridWrapper>
      <ActionButtons />
    </Styled.AppContainer>
  );
}

export default App;

import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem
        area="aside"
        bg="lightblue"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem area="main" bg="lightgreen">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

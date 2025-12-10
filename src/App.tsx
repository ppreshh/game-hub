import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        paddingX={2}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          onGenreSelected={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <GridItem area="main">
        <HStack justifyContent="stretch" paddingLeft="12px" paddingBottom={5}>
          <PlatformSelector
            onPlatformSelected={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;

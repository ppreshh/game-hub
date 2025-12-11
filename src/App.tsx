import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/ui/SortSelector";
import GameHeading from "./components/ui/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "270px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearched={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </GridItem>
      <GridItem
        area="aside"
        paddingX={2}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          onGenreSelected={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft="10px">
          <GameHeading gameQuery={gameQuery} />
          <HStack justifyContent="stretch" marginBottom={5} spaceX={4}>
            <PlatformSelector
              onPlatformSelected={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSortOrderSelected={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { Genres } from "./hooks/userGenres";

function App() {

  const [selectedgenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main'`,
        }}

        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg={"coral"} >
          <Navbar></Navbar>
        </GridItem>

        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingY={2}
          marginLeft={2}
          borderRight={"1px solid gray"}
        >
          <GenresList onSelectGenres={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>

        <GridItem area="main">
          <GamesGrid selectedGenres={selectedgenre}></GamesGrid>
        </GridItem>
      </Grid>
  );
}

export default App;

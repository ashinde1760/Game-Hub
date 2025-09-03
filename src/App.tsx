import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";

function App() {
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
          borderRight={"1px solid gray"}
        >
          <GenresList/>
        </GridItem>

        <GridItem area="main">
          <GamesGrid></GamesGrid>
        </GridItem>
      </Grid>
  );
}

export default App;

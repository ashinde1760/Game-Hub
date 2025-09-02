import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GamesCard";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={5} gap={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;

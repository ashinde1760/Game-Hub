import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GamesCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";
import type { Genres } from "@/hooks/userGenres";

interface Props {
  selectedGenres:Genres | null
}
const GamesGrid = ({selectedGenres}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenres);
  const Skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={3} gap={4}>
        {isLoading &&
          Skeleton.map((skeleton) => (
            <GamesCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GamesCardContainer>
          ))}
        {data.map((game) => (
          <GamesCardContainer key={game.id}>
            <GameCard game={game} />
          </GamesCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;

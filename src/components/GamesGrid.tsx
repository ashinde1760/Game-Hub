import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GamesCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
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

import type { Game } from "@/hooks/useGames";
import { Card } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <img src={game.background_image} alt={game.name} />
      <Card.Body>
        <Card.Header fontSize={'2xl'}>{game.name}</Card.Header>
      </Card.Body>
    </Card.Root>
  );
};
export default GameCard;

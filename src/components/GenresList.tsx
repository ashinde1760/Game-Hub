import useGenres, { type Genres } from "@/hooks/userGenres";
import { Button, HStack, Image, List } from "@chakra-ui/react";
import getCroppedImageUrl from "./getCroppedImageUrl";

interface Props {
  onSelectGenres: (genre: Genres) => void;
}
const GenresList = ({ onSelectGenres }: Props) => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <List.Root>
        {data.map((genre) => (
          <HStack key={genre.id} padding={1}>
            <Image boxSize={'32px'} borderRadius={8} alt={genre.name} src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button onClick={() =>  onSelectGenres(genre)} variant={'plain'} key={genre.id} fontSize={'lg'} fontWeight={'medium'}>{genre.name}</Button>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};


function onClickGenres(genre: Genres) {
  console.log(genre);
}
export default GenresList;

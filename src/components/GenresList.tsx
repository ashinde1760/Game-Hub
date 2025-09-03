import useGenres from "@/hooks/userGenres";
import { HStack, Image, List } from "@chakra-ui/react";
import getCroppedImageUrl from "./getCroppedImageUrl";

const GenresList = () => {
  const { data, error } = useGenres();
    
  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <List.Root>
        {data.map((genre) => (
          <HStack key={genre.id} padding={1}>
            <Image boxSize={'32px'} borderRadius={8} alt={genre.name} src={ getCroppedImageUrl(genre.image_background)}></Image>
            <List.Item key={genre.id} fontSize={'lg'}  fontWeight={'medium'}>{genre.name}</List.Item>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

export default GenresList;

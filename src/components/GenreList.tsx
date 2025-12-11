import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onGenreSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({
  onGenreSelected: onSelectGenre,
  selectedGenre,
}: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading textAlign="left" size="2xl" marginTop={2} marginBottom={2}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="4px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="plain"
                textDecoration={
                  genre.id === selectedGenre?.id ? "underline" : "none"
                }
                textUnderlineOffset="3px"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

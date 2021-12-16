import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IMAGE from "../../assets/album.jpg";
import Photos from "./Photos";

function Album({ artistAlbum, artist }) {
  console.log(artistAlbum);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {artistAlbum.map((album) => (
          <Center py={12} key={album}>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg={"white"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${IMAGE})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={IMAGE}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {album.title}
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {artist.name}
                </Heading>
                <Stack direction={"row"} align={"center"}>
                  <Photos id={album.id} />
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Album;

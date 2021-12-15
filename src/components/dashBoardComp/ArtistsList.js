import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAlbums, fetchAllArtist } from "../../redux/actions/actions";
import ArtistDetails from "./ArtistDetails";

function ArtistsList() {
  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { userReducer } = state;
  const { allArtists, allAlbum } = userReducer;

  useEffect(() => {
    dispatch(fetchAllArtist());
    dispatch(fetchAllAlbums());
  }, []);
  return (
    <Box px={{ base: "18px", md: "122px" }}>
      <Text
        fontSize="20px"
        fontWeight="500"
        color="#04435F"
        mb="10px"
        pl="24px"
      >
        All Artist
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th isNumeric>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allArtists.length !== 0 &&
            allArtists.map((artist) => (
              <Tr key={artist.id}>
                <Td>{artist.name}</Td>
                <Td>{artist.username}</Td>
                <Td isNumeric>
                  <ArtistDetails artist={artist} album={allAlbum} />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default ArtistsList;

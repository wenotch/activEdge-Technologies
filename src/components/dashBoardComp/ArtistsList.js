import { Box, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllAlbums,
  fetchAllArtist,
  fetchAllTweets,
} from "../../redux/actions/actions";
import ArtistDetails from "./ArtistDetails";

function ArtistsList() {
  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { userReducer } = state;
  const { allArtists, allAlbum, allTweets } = userReducer;

  console.log(allTweets);

  useEffect(() => {
    dispatch(fetchAllArtist());
    dispatch(fetchAllAlbums());
    dispatch(fetchAllTweets());
  }, []);
  return (
    <Box px={{ base: "18px", md: "122px" }} overflowY={"scroll"}>
      <Text
        fontSize="20px"
        fontWeight="500"
        color="#04435F"
        mb="10px"
        pl="24px"
      >
        All Artist
      </Text>
      <Box textAlign={"center"} justifyContent={"center"}>
        <Table variant="simple" size={"sm"}>
          <Thead>
            <Tr>
              <Th px={{ base: "0", md: "12px" }}>Name</Th>
              <Th px={{ base: "0", md: "12px" }}>Username</Th>
              <Th px={{ base: "0", md: "12px" }} isNumeric>
                Details
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {allArtists.length !== 0 &&
              allArtists.map((artist) => (
                <Tr key={artist.id}>
                  <Td px={{ base: "0", md: "12px" }}>{artist.name}</Td>
                  <Td px={{ base: "0", md: "12px" }}>{artist.username}</Td>
                  <Td px={{ base: "0", md: "12px" }} isNumeric>
                    <ArtistDetails
                      artist={artist}
                      album={allAlbum}
                      tweets={allTweets}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default ArtistsList;

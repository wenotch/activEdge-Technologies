import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

function ArtistDetails({ artist, album }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="brand.yellow"
        rounded={"xl"}
        color={"white"}
        px="30px"
        onClick={onOpen}
      >
        View
      </Button>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Header />{" "}
          <ModalHeader px={{ base: "18px", md: "100px" }}>
            {artist.name}'s Details
          </ModalHeader>
          <ModalBody px={{ base: "18px", md: "100px" }}>
            <Text>Name: {artist.name}</Text>
            <Text>Username: {artist.username}</Text>
            <Text>Email: {artist.email}</Text>
            <Text>Phone: {artist.phone}</Text>

            <Tabs isFitted>
              <TabList w={{ base: "100%", md: "40%" }} mx="auto">
                <Tab>Albums</Tab>
                <Tab>Tweets</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Back</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ArtistDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "./Header";

function Photos({ id }) {
  const [photos, setphotos] = useState([]);
  useEffect(async () => {
    const options = {
      url: "https://jsonplaceholder.typicode.com/albums/" + id + "/photos",
      method: "GET",
    };
    try {
      const response = await axios(options);
      console.log(response.data);
      setphotos(response.data);
    } catch {
      toast.error("Something went wrong");
    }
  }, []);
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
        Album photos
      </Button>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <Header />{" "}
          <ModalHeader
            pos={"sticky"}
            top={0}
            zIndex={2}
            bg="white"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            px={{ base: "18px", md: "100px" }}
          >
            {/* <Text> {artist.name}'s Details </Text> */}
            <Button color="white" bg="brand.yellow" onClick={onClose}>
              Back
            </Button>
          </ModalHeader>
          <ModalBody px={{ base: "18px", md: "100px" }}>
            <Box overflow={"hidden"}>
              <Text> Album: {id} photos </Text>
              <Carousel autoPlay={true}>
                {photos.map((photo) => (
                  <div>
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={photo.url}
                    />{" "}
                  </div>
                ))}
              </Carousel>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Back</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Photos;

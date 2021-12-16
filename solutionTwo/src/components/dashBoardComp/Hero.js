import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../../assets/singer.svg";

function Hero() {
  return (
    <Box
      px={{ base: "30px", md: "150px" }}
      py={{ base: "30px", md: "50px" }}
      justifyContent={"center"}
    >
      <Flex
        p="30px"
        bg="#04435F"
        h={"200px"}
        w={{ base: "full", md: "500px" }}
        mx="auto"
        rounded="lg"
        justifyContent={"center"}
        overflow={"hidden"}
        align={"center"}
        pos={"relative"}
      >
        <Image
          src={image}
          pos={"relative"}
          bottom={{ base: "-90px", md: "-100px" }}
          left={{ base: "-110px", md: "-180px" }}
          w="300px"
        />
        <Box
          textAlign={"center"}
          w={"full"}
          pos={"absolute"}
          top={"16"}
          left={0}
        >
          <Text
            fontFamily={"DM Sans"}
            color={"white"}
            fontSize={"20px"}
            fontWeight={"500"}
          >
            {" "}
            Welcome <br />
            {}
            Chocolate City Studios
          </Text>
          {/* <Text
            fontFamily={"DM Sans"}
            color={"white"}
            fontSize={"16px"}
            fontWeight={"400"}
            mt="10px"
          >
            Artists:{" "}
            <Text as="span" fontWeight={"700"} fontSize={"20px"}>
              222
            </Text>
          </Text>
          <Text
            fontFamily={"DM Sans"}
            color={"white"}
            fontSize={"16px"}
            fontWeight={"400"}
          >
            Albums:{" "}
            <Text as="span" fontWeight={"700"} fontSize={"20px"}>
              222
            </Text>   </Text>*/}
        </Box>
      </Flex>
    </Box>
  );
}

export default Hero;

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import authImage from "../../assets/auth-image.svg";
import logo from "../../assets/logo.svg";

function LeftBox() {
  return (
    <Box
      width="25%"
      display={{ base: "none", lg: "block" }}
      minH="100vh"
      bg="#04435F"
      position="fixed"
      mr="25%"
    >
      <Image
        cursor="pointer"
        pos="fixed"
        ml="80px"
        mt="60px"
        src={logo}
        alt="coin-hero logo"
        w="120px"
        display={{ base: "none", lg: "block" }}
      />{" "}
      <Image
        src={authImage}
        w="100%"
        mt="100px"
        maxH="100%"
        alt="illustration of the cryptocurrencies"
      />
    </Box>
  );
}

export default LeftBox;

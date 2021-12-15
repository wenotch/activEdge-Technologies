import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";
import logo from "../../assets/logo.svg";
import darkLogo from "../../assets/dark-logo.png";

function RightBoxLogin() {
  return (
    <Box
      w={{ base: "100%", lg: "75%" }}
      textAlign="right"
      ml={{ base: "0", lg: "25%" }}
    >
      <Box>
        <Header />
      </Box>
      <Box w={{ base: "100%", md: "50%" }} mx="auto" textAlign="center">
        <Text
          fontFamily="DM Sans"
          fontSize={{ base: "24px", md: "30px" }}
          fontWeight="700"
          color="brand.black"
          mt={{ base: "20px", md: "40px", lg: "60px" }}
        >
          Sign in to your account
        </Text>{" "}
        <Text
          fontFamily="DM Sans"
          fontSize={"12px"}
          fontWeight="400"
          color="brand.texts"
          pt="25px"
        >
          Fake sign in to test the app. Any email and password will work.
        </Text>
        <LoginForm />
      </Box>
    </Box>
  );
}

export default RightBoxLogin;

function Header() {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      px={{ base: "30px", md: "80px" }}
      w="100%"
      pos={"static"}
      top="0"
      mt={{ base: "30px", md: "60px" }}
      direction={{ base: "column", md: "row" }}
    >
      <Image
        cursor="pointer"
        src={logo}
        alt="coin-hero logo"
        w="120px"
        visibility={{ lg: "hidden" }}
        display={{ base: "none", lg: "block" }}
      />{" "}
      <Image
        cursor="pointer"
        src={darkLogo}
        alt="coin-hero logo"
        w="120px"
        display={{ base: "block", lg: "none" }}
      />
      <Box>
        {" "}
        <Link
          onClick={() => {
            alert("try dey calm down abeg😂");
          }}
        >
          <Text
            textAlign="center"
            mt={{ base: "20px", md: "0" }}
            color="brand.black"
            fontFamily="DM Sans"
            fontWeight="400"
            fontSize="14px"
            mx={{ base: "30px", md: "80px" }}
          >
            Don't have an account?{" "}
            <Text as="span" color="brand.yellow">
              Sign up
            </Text>
          </Text>
        </Link>
      </Box>
    </Flex>
  );
}

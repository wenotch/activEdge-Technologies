import { Flex } from "@chakra-ui/layout";
import React from "react"; 
import LeftBox from "../components/loginComp/LeftBox";
import RightBoxLogin from "../components/loginComp/RightBox";

function Login() {
  return (
    <Flex bg="white" pos="relative">
      <LeftBox />
      <RightBoxLogin />
    </Flex>
  );
}

export default Login;

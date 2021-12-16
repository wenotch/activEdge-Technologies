import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Checkbox,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../lib/validations";

function LoginForm() {
  //react-router for navigation
  let navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { userReducer } = state;
  const { isLoggedIn, loading } = userReducer;

  // redirects if user (logged in already)
  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/dashboard");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  //handle form submission
  const handleSubmit = async (values, actions) => {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "LOGGED_IN", payload: true });
      navigate("/dashboard");
    }, 1000);
  };

  //handle password visibility
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  //controlling check box
  const [checked, setChecked] = useState(false);

  return (
    <Box px="30px" w="full">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel
                    mt="28px"
                    htmlFor="email"
                    color="#B1B5C3"
                    fontSize="12px"
                    fontFamily="DM Sans"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email address"
                    borderRadius="10px"
                    color="#777E90"
                    _placeholder={{ color: "#777E90" }}
                    h="48px"
                    fontFamily="DM Sans"
                    border="2px solid #E6E8EC !important"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password" validate={validatePassword}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <FormLabel
                    mt="28px"
                    htmlFor="password"
                    color="#B1B5C3"
                    fontSize="12px"
                    fontFamily="DM Sans"
                  >
                    PASSWORD
                  </FormLabel>

                  <InputGroup h="48px">
                    <Input
                      {...field}
                      id="password"
                      placeholder="Password"
                      type={show ? "text" : "password"}
                      borderRadius="10px"
                      color="#777E90"
                      fontFamily="DM Sans"
                      _placeholder={{ color: "#777E90" }}
                      h="48px"
                      border="2px solid #E6E8EC !important"
                    />
                    <InputRightElement>
                      <Button
                        color="#777E90"
                        h="1.75rem"
                        size="sm"
                        alignItems="center"
                        onClick={handleClick}
                        mt="5px"
                        mr="20px"
                      >
                        {show ? (
                          <Icon h="5" w="5" as={BsEyeSlash} />
                        ) : (
                          <Icon h="5" w="5" as={AiOutlineEye} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Flex alignItems="flex-start" my="28px" justify="space-between">
              {" "}
              <Checkbox
                size="lg"
                mr="10px"
                fontSize="14px"
                colorScheme="yellow"
                defaultIsChecked={false}
                onChange={() => setChecked(!checked)}
                iconColor="white"
                color="brand.black"
                fontFamily="DM Sans"
                p="5px"
              >
                <Text fontSize="12px" fontFamily="DM Sans">
                  Keep me logged in
                </Text>
              </Checkbox>
              <Link
                onClick={() => {
                  alert("try dey calm down abeg😂");
                }}
                _hover={{ color: "brand.texts", textDecoration: "none" }}
                fontSize="14px"
                color="brand.yellow"
                fontFamily="DM Sans"
                p="5px"
              >
                Forgot password?
              </Link>
            </Flex>

            <Button
              mt={4}
              mb="200px"
              isLoading={loading}
              type="submit"
              h="48px"
              w="full"
              bg="brand.yellow"
              rounded="full"
              color="white"
              fontFamily="DM Sans"
              _hover={{
                bg: "#04435F",
              }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default LoginForm;

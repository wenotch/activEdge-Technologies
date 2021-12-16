import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { validateField } from "../lib/validations";
import { Field, Form, Formik } from "formik";
import {
  createTweet,
  deleteTweet,
  editTweet,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Tweets(artistTweets, artist) {
  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { userReducer } = state;
  const { loading } = userReducer;

  //toggle create tweet form
  const [show, setShow] = React.useState(false);

  //toggle edit tweet form
  const [edit, setEdit] = React.useState(false);

  //handle create submit
  const handleSubmit = async (values, actions) => {
    dispatch({ type: "LOADING" });
    dispatch(createTweet(values.body));
  };

  //handle delete submit
  const handleSubmitTwo = async (values, actions) => {
    dispatch({ type: "LOADING" });
    dispatch(editTweet(values.body));
  };

  return (
    <>
      {!show ? (
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
          Add Tweets
        </Button>
      ) : (
        <Button
          onClick={() => {
            setShow(false);
          }}
        >
          close
        </Button>
      )}
      {show && (
        <Box mx="auto" w={{ base: "100%", md: "30%" }}>
          <Formik initialValues={{ body: "" }} onSubmit={handleSubmit}>
            {(props) => (
              <Form>
                <Field name="body" validate={validateField}>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.body && form.touched.body}
                    >
                      <FormLabel
                        mt="28px"
                        htmlFor="body"
                        color="#B1B5C3"
                        fontSize="12px"
                        fontFamily="DM Sans"
                      >
                        TWEET
                      </FormLabel>
                      <Input
                        {...field}
                        id="body"
                        placeholder="Enter tweet"
                        borderRadius="10px"
                        color="#777E90"
                        _placeholder={{ color: "#777E90" }}
                        h="48px"
                        fontFamily="DM Sans"
                        border="2px solid #E6E8EC !important"
                      />
                      <FormErrorMessage>{form.errors.body}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  mt={4}
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
                  Tweet
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {artistTweets.artistTweets.map((tweets) => (
          <Center py={12}>
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
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {tweets.name}
                </Text>
                <Text color={"gray.500"} fontSize={"sm"}>
                  {tweets.body}
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {artist.name}
                </Heading>

                {edit && (
                  <Box mx="auto" w={{ base: "100%" }}>
                    <Formik
                      initialValues={{ body: "" }}
                      onSubmit={handleSubmitTwo}
                    >
                      {(props) => (
                        <Form>
                          <Field name="body" validate={validateField}>
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.body && form.touched.body
                                }
                              >
                                <FormLabel
                                  mt="28px"
                                  htmlFor="body"
                                  color="#B1B5C3"
                                  fontSize="12px"
                                  fontFamily="DM Sans"
                                >
                                  Body
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="body"
                                  placeholder="Enter tweet"
                                  borderRadius="10px"
                                  color="#777E90"
                                  _placeholder={{ color: "#777E90" }}
                                  h="48px"
                                  fontFamily="DM Sans"
                                  border="2px solid #E6E8EC !important"
                                />
                                <FormErrorMessage>
                                  {form.errors.body}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Button
                            mt={4}
                            isLoading={loading}
                            type="submit"
                            h="28px"
                            w="70px"
                            mx="auto"
                            bg="brand.yellow"
                            color="white"
                            fontFamily="DM Sans"
                            _hover={{
                              bg: "#04435F",
                            }}
                          >
                            Edit Tweet
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                )}
                <Stack
                  direction={"row"}
                  w="full"
                  align={"center"}
                  justifyContent={"space-between"}
                >
                  <Button
                    colorScheme={"blue"}
                    bg="#04435F"
                    size={"sm"}
                    w="70px"
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    colorScheme={"red"}
                    size={"sm"}
                    w="70px"
                    onClick={() => {
                      dispatch(deleteTweet(tweets.id));
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Tweets;

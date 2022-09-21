import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  HStack,
  VStack,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useBigContext } from "../contexts/BigContexts";

const SettingsPage = () => {
  const toast = useToast();

  const { setIsLoggedIn, setLoggedUser, loggedUser } = useBigContext();

  const cookie = document.cookie;

  const [userInfo, setUserInfo] = useState({ loggedUser });
  let navigate = useNavigate();

  const handleTextChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:8080/user/logout",

        {
          withCredentials: true,
        }
      );
      if (data) {
        setIsLoggedIn(false);
        setLoggedUser({});
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:8080/user/`,
        userInfo,
        {
          withCredentials: true,
        }
      );
      if (data) {
        toast({
          position: "top",
          title: "User updated!",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        setIsLoggedIn(true);
        setLoggedUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <Text
          className="main-title"
          fontWeight="600"
          mb={5}
          textAlign="center"
          fontSize="3xl"
        >
          Update Account
        </Text>
        <VStack
          maxWidth="75%"
          boxShadow="md"
          rounded="lg"
          px={10}
          py={5}
          bg="#D6CDA4"
          gap={2}
          mx="auto"
          mb={3}
        >
          <FormControl>
            <FormLabel htmlFor="firstName">First Name:</FormLabel>
            <Input
              bg="white"
              id="firstName"
              type="text"
              placeholder="First name"
              onChange={handleTextChange}
              defaultValue={loggedUser.firstName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name:</FormLabel>
            <Input
              bg="white"
              id="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleTextChange}
              defaultValue={loggedUser.lastName}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              bg="white"
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleTextChange}
              defaultValue={loggedUser.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              bg="white"
              id="password"
              type="password"
              placeholder="Choose your password"
              onChange={handleTextChange}
            />
          </FormControl>
          <HStack width="100%" mt={5}>
            <Spacer />
            <Button color="white" bg="#3D8361" type="submit">
              Update
            </Button>
            {cookie && (
              <Flex>
                <Button
                  me={1}
                  color="white"
                  bg="red"
                  fontWeight={300}
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </Flex>
            )}
          </HStack>
        </VStack>
      </form>
    </div>
  );
};

export default SettingsPage;

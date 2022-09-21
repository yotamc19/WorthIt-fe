import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useBigContext } from "../contexts/BigContexts";

const LoginPage = () => {
  const { setIsLoggedIn, setLoggedUser } = useBigContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogIn = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:8080/user/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      if (data) {
        // decide which page to navigate to
        setIsLoggedIn(true);
        setLoggedUser(data);
        navigate("/home")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleLogIn}>
        <Text fontWeight="600" mb={5} textAlign="center" fontSize="3xl">
          Login
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
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              bg="white"
              id="email"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              bg="white"
              id="password"
              type="password"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <HStack width="100%" mt={5}>
            <Spacer />
            <Button color="white" bg="#3D8361" type="submit">
              Submit
            </Button>
          </HStack>
        </VStack>
      </form>
    </div>
  );
};

export default LoginPage;

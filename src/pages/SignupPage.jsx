import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  HStack,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useBigContext } from "../contexts/BigContexts";

const SignupPage = () => {
  const toast = useToast();
  const { setIsLoggedIn, setLoggedUser } = useBigContext();

  const [userInfo, setUserInfo] = useState({});
  let navigate = useNavigate();

  const handleTextChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/user/signup",
        userInfo,
        {
          withCredentials: true,
        }
      );
      if (data) {
        toast({
          position: "top",
          title: "Sign up successful!",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        setIsLoggedIn(true);
        setLoggedUser(data);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <Text
          mt={-2}
          className="main-title"
          fontWeight="600"
          mb={2}
          textAlign="center"
          fontSize="3xl"
        >
          Register
        </Text>
        <VStack
          maxWidth="75%"
          boxShadow="md"
          rounded="lg"
          px={10}
          py={5}
          bg="#D6CDA4"
          mx="auto"
          mb={3}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First Name:</FormLabel>
            <Input
              height={8}
              bg="white"
              id="firstName"
              type="text"
              placeholder="First name"
              onChange={handleTextChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Last Name:</FormLabel>
            <Input
              height={8}
              bg="white"
              id="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleTextChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              height={8}
              bg="white"
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleTextChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <Input
              height={8}
              bg="white"
              id="password"
              type="password"
              placeholder="Choose your password"
              onChange={handleTextChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirmPassword">Confirm password:</FormLabel>
            <Input
              mb={3}
              height={8}
              bg="white"
              id="repassword"
              type="password"
              placeholder="Confirm your password"
              onChange={handleTextChange}
            />
          </FormControl>
          <HStack width="100%">
            <Spacer />
            <Button color="white" bg="#3D8361" type="submit">
              Submit
            </Button>
          </HStack>
        </VStack>
      </form>
      <Text textAlign="center">
        Already a user? Click
        <strong>
          <Link to={"/"}> here </Link>
        </strong>
        to log in.
      </Text>
    </div>
  );
};

export default SignupPage;

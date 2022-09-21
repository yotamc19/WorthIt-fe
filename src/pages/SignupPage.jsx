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
  
  const SignupPage = () => {
    return (
      <div>
        <form>
          <Text fontWeight="600" mb={5} textAlign="center" fontSize="3xl">
            Register
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
              <FormLabel htmlFor="firstName">First Name:</FormLabel>
              <Input
                bg="white"
                id="firstName"
                type="text"
                placeholder="First name"
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="lastName">Last Name:</FormLabel>
              <Input
                bg="white"
                id="lastName"
                type="text"
                placeholder="Last name"
                // onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                bg="white"
                id="email"
                type="email"
                placeholder="Email"
                // onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                bg="white"
                id="password"
                type="password"
                placeholder="Choose your password"
                // onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="confirmPassword">Confirm password:</FormLabel>
              <Input
                bg="white"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                // onChange={(e) => setConfirmPassword(e.target.value)}
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
  
  export default SignupPage;
  
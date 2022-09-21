import { Text, Image, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBigContext } from "../contexts/BigContexts";

const HomePage = () => {
  const {  loggedUser } = useBigContext();
  const cookie = document.cookie;
  return (
    <div>
        <Text>
            Welcome, {loggedUser.firstName}
        </Text>
      <Image
        src="../images/Logo-big.png"
        alt="WorthIt"
        mb={8}
        mt={10}
        mx="auto"
        maxW="25%"
      />
      <Text align="center">
        What are you worth?
        <br />
        <strong>Find out with WorthIt!</strong>
      </Text>
      {!cookie && (
        <Flex mt={5}>
          <Button color="white" bg="#3D8361" me="2.5" ms="auto">
            <Link to="/">Login</Link>
          </Button>
          <Button me="auto" ms="2.5">
            <Link to="/signup">Register</Link>
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default HomePage;

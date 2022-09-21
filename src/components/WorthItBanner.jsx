import React from "react";
import { Box, Text } from "@chakra-ui/react";

const WorthItBanner = () => {
  return (
    <div>
      <Box mt={7} bg="#1C6758" w="75%" mx="auto" rounded="full">
        <Text
          color="white"
          fontWeight="400"
          mb={5}
          textAlign="center"
          fontSize="2xl"
          fontFamily="DM Serif Display"
        >
          WorthIt
        </Text>
      </Box>
    </div>
  );
};

export default WorthItBanner;
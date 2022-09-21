import { Button, Flex, FormControl, FormLabel, HStack, Input, Spacer, Text, Textarea, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const PostPage = () => {
    const [postInfo, setPostInfo] = useState({
        heading: '', 
        text: '', 
    });

    const handleTextChange = (e) => {
        e.preventDefault();
        setPostInfo({ ...postInfo, [e.target.id]: e.target.value });
    };

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/posts', {
                heading: postInfo.heading, 
                text: postInfo.text, 
            }, { withCredentials: true });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <form onSubmit={handlePost}>
                <Text
                    className="main-title"
                    fontWeight="600"
                    mb={5}
                    textAlign="center"
                    fontSize="3xl"
                >
                    Create a new post
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
                        <FormLabel htmlFor="heading">Title:</FormLabel>
                        <Input
                            bg="white"
                            id="heading"
                            type="text"
                            onChange={handleTextChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="Text">Text:</FormLabel>
                        <Textarea
                            bg="white"
                            id="text"
                            type="text"
                            onChange={handleTextChange}
                        />
                    </FormControl>
                    <HStack width="100%" mt={5}>
                        <Spacer />
                        <Button color="white" bg="#3D8361" type="submit">
                            Post
                        </Button>
                    </HStack>
                </VStack>
            </form>
        </div>
    );
}

export default PostPage;
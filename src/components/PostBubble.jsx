import { Circle, Toast, useDisclosure, useToast } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Button, Flex, FormControl, FormLabel, HStack, Input, Spacer, Text, Textarea, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const PostBubble = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

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
            onClose();
            toast({
                position: "top",
                title: "Post uploaded!",
                status: "success",
                duration: 1500,
                isClosable: true,
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Circle zIndex={1} size='50px' bg='green' color='white' onClick={onOpen} className='bubble'>
                <PlusSquareIcon />
            </Circle>
            <Modal isOpen={isOpen} onClose={onClose} size='xs'
            >
                <form onSubmit={handlePost}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>
                            <Text
                                className="main-title"
                                fontWeight="600"
                                mb={5}
                                textAlign="center"
                                fontSize="3xl"
                            >
                                Create a new post
                            </Text>
                        </ModalHeader>
                        <VStack
                            maxWidth="75%"
                            boxShadow="md"
                            rounded="lg"
                            px={10}
                            py={5}
                            gap={2}
                            bg="#D6CDA4"
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
                        </VStack>
                        <ModalFooter>
                            <Button color="white" bg="#3D8361" type="submit">
                                Post
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}

export default PostBubble;
import { Box, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useBigContext } from "../contexts/BigContexts";

const NotificationsPage = () => {
    const { postsList, setPostsList } = useBigContext();

    useEffect(() => {
        const getAllPosts = async () => {
            const res = await axios.get('http://localhost:8080/posts', { withCredentials: true });
            let arr = res.data;
            arr.reverse();
            setPostsList(arr);
        }
        getAllPosts()
            .catch((err) => { console.log(err) });
    }, []);

    return (
        <div>
            <Text
                className="main-title"
                fontWeight="600"
                mb={5}
                textAlign="center"
                fontSize="3xl"
            >
                Feed
            </Text>
            {postsList.map(post => {
                const current = new Date();
                const d = new Date(post.createdAt);
                const days = (current.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
                return (
                    <Box
                        key={post._id}
                        className='post'
                        maxWidth="75%"
                        boxShadow="md"
                        rounded="lg"
                        px={3}
                        py={3}
                        bg="#D6CDA4"
                        gap={2}
                        mx="auto"
                        mb={3}
                    >
                        <Box display='flex' justifyContent='space-between'>
                            <Text fontSize='2xl' fontWeight='700' noOfLines={1}>{post.heading}</Text>
                            <Text fontSize='xs'>{days < 1 ? 'Today' : `${days.floor()} days ago`}</Text>
                        </Box>
                        <Text fontSize='md' noOfLines={3}>{post.text}</Text>
                    </Box>
                )
            })}
        </div>
    );
}

export default NotificationsPage;
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ postId, heading, text, createdDate }) => {
    const navigate = useNavigate();

    const current = new Date();
    const d = new Date(createdDate);
    const hours = Math.floor((current.getTime() - d.getTime()) / (1000 * 60 * 60));
    const days = Math.floor((current.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));

    const handleClick = () => {
        navigate(`/post/${postId}`);
    }

    return (
        <Box
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
            onClick={handleClick}
        >
            <Box display='flex' justifyContent='space-between'>
                <Text fontSize='1xl' fontWeight='700' noOfLines={1}>{heading}</Text>
                <Text fontSize='xs'>{days < 1 ? `${hours}h` : `${days}d`}</Text>
            </Box>
            <Text fontSize='md' noOfLines={3}>{text}</Text>
        </Box>
    )
}

export default Post;
import { Button, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBigContext } from "../contexts/BigContexts";

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({
        heading: '',
        text: '',
    });

    const toast = useToast();
    const navigate = useNavigate();

    const { isAdmin } = useBigContext();

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:8080/posts/${postId}`, { withCredentials: true });
            const { heading, text } = res.data;
            setPost({ heading, text });
        }

        getPost()
            .catch((err) => { console.log(err) });
    }, []);

    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:8080/posts/${postId}`, { withCredentials: true });
            toast({
                position: "top",
                title: "Post deleted",
                status: "error",
                duration: 1500,
                isClosable: true,
            });
            navigate('/notifications');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div maxwidth="75%" >
            <VStack px={10}>
                <Text
                    className="main-title"
                    fontWeight="600"
                    mb={3}
                    width='100%'
                    fontSize="3xl"
                >
                    {post.heading}
                </Text>
                <Text
                    mb={5}
                    width='100%'
                >
                    {post.text}
                </Text>
                {isAdmin ? <Button colorScheme='red' onClick={handleDelete}>Delete post</Button> : ''}
            </VStack>
        </div>
    );
}

export default PostPage;
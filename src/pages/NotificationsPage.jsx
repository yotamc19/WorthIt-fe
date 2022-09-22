import { Box, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { useBigContext } from "../contexts/BigContexts";

const NotificationsPage = () => {
    const { postsList, setPostsList } = useBigContext();
    const navigate = useNavigate();

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
                return (
                    <Post key={post._id} postId={post._id} heading={post.heading} text={post.text} createdDate={post.createdAt} />
                )
            })}
        </div>
    );
}

export default NotificationsPage;
import { Circle, HStack } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

const PostBubble = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/upload');
    }

    return (
        <Circle size='50px' bg='green' color='white' onClick={handleClick} className='bubble'>
            <PlusSquareIcon />
        </Circle>
    );
}

export default PostBubble;
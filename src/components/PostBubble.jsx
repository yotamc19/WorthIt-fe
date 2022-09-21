import { Circle, HStack } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons'

const PostBubble = () => {
    const handleClick = () => {
        console.log(1);
    }

    return (
        <Circle size='40px' bg='green' color='white' onClick={handleClick} className='bubble'>
            <PlusSquareIcon />
        </Circle>
    );
}

export default PostBubble;
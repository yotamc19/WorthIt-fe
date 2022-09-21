import { List, ListItem, ListIcon, VStack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useBigContext } from "../contexts/BigContexts";

const ProfilePage = () => {
  const { loggedUser } = useBigContext();

  return (
    <div maxwidth="75%" >
      <Text
        className="main-title"
        fontWeight="600"
        mb={5}
        textAlign="center"
        fontSize="3xl"
      >
        {loggedUser.firstName} {loggedUser.lastName}'s Profile
      </Text>
      <VStack px={10}>
        <List fontSize="md" spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Job Title:</strong> My title{loggedUser.jobTitle}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Experience Level:</strong> My level{loggedUser.expLevel}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Company Location:</strong> My company location{loggedUser.companyLocation}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Company Size:</strong> My company size{loggedUser.companySize}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Employment Type:</strong> My employment type{loggedUser.empType}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Remote Work Ratio:</strong> My remote work ratio{loggedUser.remoteWorkRatio}
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <strong>Current Salary Expectation:</strong> $$$$$$$${loggedUser.salaryExpectation}
          </ListItem>
        </List>
      </VStack>
    </div>
  );
};

export default ProfilePage;

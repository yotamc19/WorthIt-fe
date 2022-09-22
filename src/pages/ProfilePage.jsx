import React, { useState } from "react";
import {
  List,
  ListItem,
  ListIcon,
  VStack,
  Text,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  HStack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { CheckCircleIcon, EditIcon } from "@chakra-ui/icons";
import Form from "react-bootstrap/Form";
import { useBigContext } from "../contexts/BigContexts";
import SearchableJobLocation from "../components/SearchableLocationSelect/SearchableLocationSelect";
import SearchableJobSelect from "../components/SearchableJobSelect/SearchableJobSelect";

const ProfilePage = () => {
  const { loggedUser } = useBigContext();
  const [titleHidden, setTitleHidden] = useState(true);
  const [jobTitle, setJobTitle] = useState("");
  const [expLevelHidden, setExpLevelHidden] = useState(true);
  const [expLevel, setExpLevel] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyLocHidden, setCompanyLocHidden] = useState(true);
  const [companySize, setCompanySize] = useState("");
  const [companySizeHidden, setCompanySizeHidden] = useState(true);
  const [employType, setEmployType] = useState("");
  const [employTypeHidden, setEmployTypeHidden] = useState(true);
  const [remoteRatio, setRemoteRatio] = useState(50);
  const [remoteRatioHidden, setRemoteRatioHidden] = useState(true);
  const [salaryExpectation, setSalaryExpectation] = useState("");
  const [salaryExpectationHidden, setSalaryExpectationHidden] = useState(true);
  const getJobLocation = (selectedOption) => {
    if (selectedOption !== null) setCompanyLocation(selectedOption.value);
  };
  const getJobTitle = (selectedOption) => {
    if (selectedOption !== null) {
      const jobTitleUnspaced = selectedOption.value.replace(/ /g, "%20");
      setJobTitle(jobTitleUnspaced);
    }
  };

  return (
    <div maxwidth="75%">
      <Text
        className="main-title"
        fontWeight="600"
        mb={5}
        textAlign="center"
        fontSize="3xl"
      >
        {loggedUser.firstName} {loggedUser.lastName}'s Profile
      </Text>
      <form onSubmit={"handleSubmit"}>
        <VStack px={10}>
          <List fontSize="md" spacing={3}>
            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Job Title:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setTitleHidden(!titleHidden)}
                />
                My title
              </ListItem>
            </Flex>
            <FormControl hidden={titleHidden}>
              <SearchableJobSelect getJobTitle={getJobTitle} />
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Experience Level:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setExpLevelHidden(!expLevelHidden)}
                />
                My level{loggedUser.expLevel}
              </ListItem>
            </Flex>
            <FormControl hidden={expLevelHidden}>
              <Form.Select
                aria-label="experience level"
                value={expLevel}
                defaultValue={loggedUser.expLevel}
                onChange={(e) => setExpLevel(e.target.value)}
              >
                <option value="EN">Junior</option>
                <option value="MI">Intermediate</option>
                <option value="SE">Senior</option>
                <option value="EX">Executive</option>
              </Form.Select>
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Company Location:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setCompanyLocHidden(!companyLocHidden)}
                  defaultValue={loggedUser.companyLocation}
                />
                My company location
                {loggedUser.companyLocation}
              </ListItem>
            </Flex>
            <FormControl hidden={companyLocHidden}>
              <SearchableJobLocation getJobLocation={getJobLocation} />
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Company Size:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setCompanySizeHidden(!companySizeHidden)}
                />
                My company size
                {loggedUser.companySize}
              </ListItem>
            </Flex>
            <FormControl hidden={companySizeHidden}>
              <Form.Select
                aria-label="company size"
                value={companySize}
                defaultValue={loggedUser.companySize}
                onChange={(e) => setCompanySize(e.target.value)}
              >
                <option>Past Year Average</option>
                <option value="S">Less than 50 employees</option>
                <option value="M">50 to 250 employees</option>
                <option value="L">More than 250 employees</option>
              </Form.Select>
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Employment Type:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setEmployTypeHidden(!employTypeHidden)}
                />
                My employment type
                {loggedUser.empType}
              </ListItem>
            </Flex>
            <FormControl hidden={employTypeHidden}>
              <Form.Select
                aria-label="employment type"
                value={employType}
                defaultValue={loggedUser.empType}
                onChange={(e) => setEmployType(e.target.value)}
              >
                <option value="FT">Full-time</option>
                <option value="PT">Part-time</option>
                <option value="CT">Contract Work</option>
                <option value="FL">Freelance</option>
              </Form.Select>
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Remote Work Ratio:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() => setRemoteRatioHidden(!remoteRatioHidden)}
                />
                My remote work ratio
                {loggedUser.remoteWorkRatio}
              </ListItem>
            </Flex>
            <FormControl hidden={remoteRatioHidden}>
              <Form.Select
                aria-label="company size"
                value={parseInt(remoteRatio)}
                defaultValue={loggedUser.remoteWorkRatio}
                onChange={(e) => setRemoteRatio(e.target.value)}
              >
                <option value="50">Partially remote (20-80%)</option>
                <option value="100">Fully remote (more than 80%)</option>
                <option value="0">No remote work (less than 20%)</option>
              </Form.Select>
            </FormControl>

            {/* //////////////////////////////// */}

            <Flex minWidth="max-content" alignItems="center">
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <strong>Current Salary Expectation:</strong> <Spacer />{" "}
                <ListIcon
                  as={EditIcon}
                  color="green.500"
                  onClick={() =>
                    setSalaryExpectationHidden(!salaryExpectationHidden)
                  }
                />
                $alary
                {loggedUser.salaryExpectation}
              </ListItem>
            </Flex>
            <FormControl hidden={salaryExpectationHidden}>
              <input
                bg="white"
                id="salaryExpectation"
                type="text"
                placeholder="Salary expectation"
                onChange={"handleTextChange"}
                defaultValue={loggedUser.salaryExpectation}
              />
            </FormControl>
          </List>
          <Spacer />
          <Button color="white" bg="#3D8361" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </div>
  );
};

export default ProfilePage;

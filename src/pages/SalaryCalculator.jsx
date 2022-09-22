// import Form from "react-bootstrap/Form";
import {
  Box,
  Button,
  Text,
  VStack,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import SearchableJobSelect from "../components/SearchableJobSelect/SearchableJobSelect";
import SearchableJobLocation from "../components/SearchableLocationSelect/SearchableLocationSelect";

const SalaryCalculator = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [jobLocation, setJobLocation] = useState({});
  const [companySize, setCompanySize] = useState("");
  const [employType, setEmployType] = useState("");
  const [remoteRatio, setRemoteRatio] = useState("");

  const getJobLocation = (selectedOption) => {
    if (selectedOption !== null) setJobLocation(selectedOption.value);
  };

  const getJobTitle = (selectedOption) => {
    if (selectedOption !== null) {
      const jobTitleUnspaced = selectedOption.value.replace(/ /g, "%20");
      setJobTitle(jobTitleUnspaced);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const dbURL = `http://ec2-3-125-155-208.eu-central-1.compute.amazonaws.com:8080/?work_year=2022&experience_level=${expLevel}&employment_type=${employType}&job_title=${jobTitle}&remote_ratio=${remoteRatio}&company_location=${jobLocation}&company_size=${companySize}`;
    try {
      const res = await axios.get(dbURL);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div maxwidth="75%">
      <Text
        className="main-title"
        fontWeight="600"
        mt={-2}
        mb={2}
        textAlign="center"
        fontSize="2xl"
      >
        Salary calculator
      </Text>
      <VStack px={10}>
        <form onSubmit={handleClick}>
          <FormControl isRequired mb={1}>
            <FormLabel fontSize="sm">Job Title</FormLabel>
            <SearchableJobSelect getJobTitle={getJobTitle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Experience Level</FormLabel>
            <Select
              mb={1}
              bg="white"
              aria-label="experience level"
              value={expLevel}
              onChange={(e) => setExpLevel(e.target.value)}
            >
              <option></option>
              <option value="EN">Junior</option>
              <option value="MI">Intermediate</option>
              <option value="SE">Senior</option>
              <option value="EX">Executive</option>
            </Select>
          </FormControl>

          <FormControl isRequired mb={1}>
            <FormLabel fontSize="sm">Company Location</FormLabel>
            <SearchableJobLocation getJobLocation={getJobLocation} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Company Size</FormLabel>
            <Select
              mb={1}
              bg="white"
              aria-label="company size"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
            >
              <option></option>
              <option value="S">Less than 50 employees</option>
              <option value="M">50 to 250 employees</option>
              <option value="L">More than 250 employees</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Employment Type</FormLabel>
            <Select
              mb={1}
              bg="white"
              aria-label="employment type"
              value={employType}
              onChange={(e) => setEmployType(e.target.value)}
            >
              <option></option>
              <option value="FT">Full-time</option>
              <option value="PT">Part-time</option>
              <option value="CT">Contract Work</option>
              <option value="FL">Freelance</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm">Remote Work Ratio</FormLabel>
            <Select
              mb={1}
              bg="white"
              aria-label="company size"
              value={remoteRatio}
              onChange={(e) => setRemoteRatio(e.target.value)}
            >
              <option></option>
              <option value="50">Partially remote (20-80%)</option>
              <option value="100">Fully remote (more than 80%)</option>
              <option value="0">No remote work (less than 20%)</option>
            </Select>
          </FormControl>
          <Box width="100%" display="flex" justifyContent="center">
            <Button mt={4} colorScheme="green" type="submit">
              Calculate
            </Button>
          </Box>
        </form>
      </VStack>
    </div>
  );
};

export default SalaryCalculator;

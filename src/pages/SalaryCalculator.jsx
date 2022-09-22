import {
  Box,
  Button,
  Text,
  VStack,
  FormLabel,
  FormControl,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchableJobSelect from "../components/SearchableJobSelect/SearchableJobSelect";
import SearchableJobLocation from "../components/SearchableLocationSelect/SearchableLocationSelect";

const SalaryCalculator = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jobTitle, setJobTitle] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [jobLocation, setJobLocation] = useState({});
  const [companySize, setCompanySize] = useState("");
  const [employType, setEmployType] = useState("");
  const [remoteRatio, setRemoteRatio] = useState("");
  const [answer, setAnswer] = useState("");
  const [minAnswer, setMinAnswer] = useState("");
  const [maxAnswer, setMaxAnswer] = useState("");

  const getJobLocation = (selectedOption) => {
    if (selectedOption !== null) setJobLocation(selectedOption.value);
  };

  const getJobTitle = (selectedOption) => {
    if (selectedOption !== null) {
      const jobTitleUnspaced = selectedOption.value.replace(/ /g, "%20");
      setJobTitle(jobTitleUnspaced);
    }
  };

  useEffect(() => {
    let roundNumber = Math.round(Number(answer) / 50) * 50;
    if (roundNumber > 40000) {
      let higherNumber = Math.round(Number(roundNumber * 1.02) / 50) * 50;
      setMaxAnswer(higherNumber.toString())
      let lowerNumber = Math.round(Number(roundNumber * 0.98) / 50) * 50;
      setMinAnswer(lowerNumber.toString())
    } else {
      let higherNumber = Math.round(Number(roundNumber * 1.04) / 50) * 50;
      setMaxAnswer(higherNumber.toString())
      let lowerNumber = Math.round(Number(roundNumber * 0.96) / 50) * 50;
      setMinAnswer(lowerNumber.toString())
    }
  }, [answer])

  const handleClick = async (e) => {
    e.preventDefault();
    const dbURL = `http://ec2-3-125-155-208.eu-central-1.compute.amazonaws.com:8080/?work_year=2022&experience_level=${expLevel}&employment_type=${employType}&job_title=${jobTitle}&remote_ratio=${remoteRatio}&company_location=${jobLocation}&company_size=${companySize}`;
    try {
      const res = await axios.get(dbURL);
      if (res.data) {
        setAnswer(res.data.answer);
        onOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={7}>
          <ModalHeader>Salary Estimate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign="center" fontSize="xl" fontWeight="bold">
              Your salary range is:
            </Text>
            <Text
              textAlign="center"
              fontSize="sm"
              fontStyle="italic"
              fontWeight="400"
            >
              Last calculated at: 15/06/2022
            </Text>
            <Text>
              <BsFillCaretUpFill className="mx-auto mt-3 fs-3 text-success" />
              <Text textAlign="center" className="top-value fs-4 fw-bolder">
                $ {maxAnswer}
              </Text>
              <div className="opacity-25 d-flex flex-column align-items-center">
                <FaEllipsisV />
                <FaEllipsisV />
                <FaEllipsisV />
              </div>
              <Text textAlign="center" className="bottom-value fs-4 fw-bolder">
                $ {minAnswer}
              </Text>
              <BsFillCaretDownFill className="mx-auto mb-3 fs-3 text-danger" />
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
    </>
  );
};

export default SalaryCalculator;

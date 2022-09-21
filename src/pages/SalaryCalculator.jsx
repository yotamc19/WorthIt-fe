import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SearchableJobSelect from "../components/SearchableJobSelect/SearchableJobSelect";
import SearchableJobLocation from "../components/SearchableLocationSelect/SearchableLocationSelect";

const SalaryCalculator = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [jobLocation, setJobLocation] = useState({});
  const [companySize, setCompanySize] = useState("");
  const [employType, setEmployType] = useState("");
  const [remoteRatio, setRemoteRatio] = useState(50);

  const getJobLocation = (selectedOption) => {
    if (selectedOption !== null) setJobLocation(selectedOption.value);
  };

  const getJobTitle = (selectedOption) => {
    if (selectedOption !== null) {
      const jobTitleUnspaced = (selectedOption.value).replace(/ /g, "%20");
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
    <div className="wrapper">
      <h1>Salary Calculator</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <SearchableJobSelect getJobTitle={getJobTitle} />
        </Form.Group>

        <Form.Label>Experience Level</Form.Label>
        <Form.Select
          aria-label="experience level"
          value={expLevel}
          onChange={(e) => setExpLevel(e.target.value)}
        >
          <option value="EN">Junior</option>
          <option value="MI">Intermediate</option>
          <option value="SE">Senior</option>
          <option value="EX">Executive</option>
        </Form.Select>

        <Form.Group className="mb-3">
          <Form.Label>Company Location</Form.Label>
          <SearchableJobLocation getJobLocation={getJobLocation} />
        </Form.Group>

        <Form.Label>Company Size</Form.Label>
        <Form.Select
          aria-label="company size"
          value={companySize}
          onChange={(e) => setCompanySize(e.target.value)}
        >
          <option>Past Year Average</option>
          <option value="S">Less than 50 employees</option>
          <option value="M">50 to 250 employees</option>
          <option value="L">More than 250 employees</option>
        </Form.Select>

        <Form.Label>Employment Type</Form.Label>
        <Form.Select
          aria-label="employment type"
          value={employType}
          onChange={(e) => setEmployType(e.target.value)}
        >
          <option value="FT">Full-time</option>
          <option value="PT">Part-time</option>
          <option value="CT">Contract Work</option>
          <option value="FL">Freelance</option>
        </Form.Select>

        <Form.Label>Remote Work Ratio</Form.Label>
        <Form.Select
          aria-label="company size"
          value={parseInt(remoteRatio)}
          onChange={(e) => setRemoteRatio(e.target.value)}
        >
          <option value="50">Partially remote (20-80%)</option>
          <option value="100">Fully remote (more than 80%)</option>
          <option value="0">No remote work (less than 20%)</option>
        </Form.Select>

        <Button variant="primary" type="submit" onClick={handleClick}>
          My Salary Expectations
        </Button>
      </Form>
    </div>
  );
};

export default SalaryCalculator;

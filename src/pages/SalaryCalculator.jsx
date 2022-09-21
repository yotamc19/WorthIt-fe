import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchableJobSelect from '../components/SearchableJobSelect/SearchableJobSelect';
import SearchableJobLocation from '../components/SearchableLocationSelect/SearchableLocationSelect';

const SalaryCalculator = () => {
    return (
    <div className='wrapper'>
        <h1>Salary Calculator</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Job Title</Form.Label>
        < SearchableJobSelect/>
      </Form.Group>
     
      <Form.Label>Experience Level</Form.Label>
        <Form.Select aria-label="experience level">
      <option value="EN">Junior</option>
      <option value="MI">Intermediate</option>
      <option value="SE">Senior</option>
      <option value="EX">Executive</option>
    </Form.Select>
      

      <Form.Label>Company Location</Form.Label>
      <SearchableJobLocation />

      <Form.Label>Company Size</Form.Label>
        <Form.Select aria-label="company size">
      <option>Past Year Average</option>
      <option value="S">Less than 50 employees</option>
      <option value="M">50 to 250 employees</option>
      <option value="L">More than 250 employees</option>
    </Form.Select>

    <Form.Label>Employment Type</Form.Label>
        <Form.Select aria-label="employment type">
      <option value="FT">Full-time</option>
      <option value="PT">Part-time</option>
      <option value="CT">Contract Work</option>
      <option value="FL">Freelance</option>
    </Form.Select>

    <Form.Label>Remote Work Ratio</Form.Label>
        <Form.Select aria-label="company size">
      <option value="50">Partially remote (20-80%)</option>
      <option value="100">Fully remote (more than 80%)</option>
      <option value="0">No remote work (less than 20%)</option>
    </Form.Select>
      
      <Button variant="primary" type="submit">
        My Salary Expectations
      </Button>
    </Form>
    </div>
    )
}

export default SalaryCalculator;
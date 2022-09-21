import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const MySalaryPage = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <div className="mt-3">WorthIt banner placeholder</div>
      <h1 className="fs-4 fw-bolder mt-3">My Salary</h1>
      <div className="main-content bg-info p-4 mt-3">
        <div className="salary-range">
          <h2 className="fs-2 fw-bolder text-center">
            Your Current Salary
            <br />
            Range Is:
          </h2>
          <div className="calc-date text-center fst-italic fw-light">
            Last calculated at: 15/06/2022
          </div>
          <div className="salary-range text-center">
            <BsFillCaretUpFill className="mx-auto mt-3 fs-3 text-success" />
            <div className="top-value fs-4 fw-bolder">$ 9.5K</div>
            <div className="d-flex flex-column align-items-center">
              <FaEllipsisV />
              <FaEllipsisV />
              <FaEllipsisV />
            </div>
            <div className="bottom-value fs-4 fw-bolder">$ 7K</div>
            <BsFillCaretDownFill className="mx-auto fs-3 text-danger" />
            <Button variant="success" className="mb-4">I Want a New Estimate!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySalaryPage;

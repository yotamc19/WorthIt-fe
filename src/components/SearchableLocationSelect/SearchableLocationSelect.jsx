import jobLocation from "./JobLocation";
import React from "react";
import Select from "react-select";
import { useState } from "react";

function SearchableJobLocation({ getJobLocation }) {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  getJobLocation(selectedOption);

  return (
    <Select
      options={jobLocation}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
    />
  );
}

export default SearchableJobLocation;

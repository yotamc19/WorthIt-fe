import React from "react";
import Select from "react-select";
import jobTitles from "./JobTitles";
import { useState } from "react";

function SearchableJobSelect({ getJobTitle }) {
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });
  getJobTitle(selectedOption);

  return (
    <Select
      options={jobTitles}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
    />
  );
}
export default SearchableJobSelect;

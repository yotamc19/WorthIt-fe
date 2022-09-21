import React from 'react'
import Select from 'react-select'
import jobTitles from './JobTitles';

const SearchableJobSelect = () => (
  <Select options={jobTitles} />
)

export default SearchableJobSelect;
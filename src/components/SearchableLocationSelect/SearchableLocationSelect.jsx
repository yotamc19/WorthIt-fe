import jobLocation from './JobLocation';
import React from 'react'
import Select from 'react-select'


const SearchableJobLocation = () => (
  <Select options={jobLocation} />
)

export default SearchableJobLocation;
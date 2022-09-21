import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaDollarSign,
  FaUser,
  FaSlidersH,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <Link to="/home">
              <FaHome />
            </Link>
          </Tab>
          <Tab>
            <Link to="/notifications">
              <FaBell />
            </Link>
          </Tab>
          <Tab>
            <Link to="/mySalary">
              <FaDollarSign />
            </Link>
          </Tab>
          <Tab>
            <Link to="/profile">
              <FaUser />
            </Link>
          </Tab>
          <Tab>
            <Link to="/settings">
              <FaSlidersH />
            </Link>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default NavBar;

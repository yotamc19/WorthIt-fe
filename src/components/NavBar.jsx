import React, { useEffect } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaDollarSign,
  FaUser,
  FaSlidersH,
} from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [])

  return (
    <>
      <Tabs bg="white" w="100%" bottom="0" position="fixed" isFitted variant="enclosed">
        <TabList>
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
            <Link to="/calculator">
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
    </>
  );
};

export default NavBar;

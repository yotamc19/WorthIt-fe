import { Text, Image, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBigContext } from "../contexts/BigContexts";import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';

const HomePage = () => {
  const {  loggedUser } = useBigContext();
  const cookie = document.cookie;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Text textAlign="center" >
            Welcome, {loggedUser.firstName} {loggedUser.lastName}
        </Text>
      <Image
        src="../images/Logo-big.png"
        alt="WorthIt"
        mb={8}
        mt={10}
        mx="auto"
        maxW="25%"
      />
      <Text align="center">
        What are you worth?
        <br />
        <strong>Find out with WorthIt!</strong>
      </Text>
      <Text align="center" className="mt-3"
      onClick={handleShow}
      style={{cursor:'pointer'}}
      ><small><u>How does it work?</u></small></Text>
      <Modal show={show} onHide={handleClose} className="p-3">
        <Modal.Header closeButton>
          <Modal.Title>How Does WorthIt Work?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can WorthIt assist me in determining my salary expectations?</Accordion.Header>
        <Accordion.Body style={{textAlign: "justify"}}><small>
        WorthIt uses a Machine Learning Model, which is constantly updated and trained with data on salaries and other related parameters. The data for the model is harvested from multiple and reliable resources, and 
          also comes directly — and discretely — from WorthIt users who give their consent to share it with the app. 
          </small>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is WorthIt free to use?</Accordion.Header>
        <Accordion.Body><small>
        Yes, and it always will be!
        </small>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>So am I the product? 🤔</Accordion.Header>
        <Accordion.Body style={{textAlign: "justify"}}><small>
        No, you are the app's co-producer! your salary, and other work-related info, will remain hidden and protected from employers. It will only serve as one entry among tens of thousands, for the app's ML model to feed upon, and therefore, serve you with you up-to-date predictions next time you use it!
        </small></Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            OK, got it!
          </Button>
        </Modal.Footer>
      </Modal>
      {!cookie && (
        <Flex mt={5}>
          <Button color="white" bg="#3D8361" me="2.5" ms="auto">
            <Link to="/">Login</Link>
          </Button>
          <Button me="auto" ms="2.5">
            <Link to="/signup">Register</Link>
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default HomePage;

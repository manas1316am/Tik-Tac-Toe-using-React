import React, { useState } from 'react';

import Icon from "./components/icon"

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Reactstrap
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';

// Creating an array of 9 digits and filling it with empty(pen)
const itemArray = new Array(9).fill("empty")

// App component
const App = () => {
  // UseState to check if the box is croseed or not. 
  // Initial value of isCross is false.
  const [isCross, setIsCross] = useState(false)
  // UseState to show the win message
  const [winMessage, setWinMessage] = useState("")
  

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9) 
    
  };

  const checkIsWinner = () => {
    // Check for rows
    if(
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
      ) {
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5]
      ) {
        setWinMessage(`${itemArray[3]} won`)
      }
      else if (
        itemArray[6] !== "empty" &&
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8] 
      ) {
        setWinMessage(`${itemArray[6]} won`)
      }

      // Check for columns
      else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6] 
      ) {
        setWinMessage(`${itemArray[0]} won`)
      }
      else if (
        itemArray[1] !== "empty" &&
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7] 
      ) {
        setWinMessage(`${itemArray[1]} won`)
      }
      else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8] 
      ) {
        setWinMessage(`${itemArray[2]} won`)
      }
      // Checking Diagonally
      else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8] 
      ) {
        setWinMessage(`${itemArray[0]} won`)
      }
      else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6] 
      ) {
        setWinMessage(`${itemArray[2]} won`)
      }



  };
  
  const changeItem = itemNumber => {
    if(winMessage) {
      return toast(winMessage, {type: "success"})
    }
    
    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return toast("Already Filled", {type: "error"})
    }

    checkIsWinner();

  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
               color="success" 
               block 
               onClick = {reloadGame}
              >
                Reload the Game
              </Button>
            </div>
          ) : (
            <h1 
              className="text-center text-warning" 
              style={{fontWeight:"bold"}}  
            >
              {isCross ? "Cross" : "Circle" } turns
            </h1>
          ) }
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" 
                onClick={ () => changeItem(index) }
              >  
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
          };

export default App;

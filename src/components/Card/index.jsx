import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Card = (props) => (
          <Button className="shadow p-3 mb-2 rounded " href={props.webLink} bg="dark" variant="dark">
            <Row xs="auto">
              <Col>
              <FontAwesomeIcon className="fab fa-2x" icon={props.icon} />
              </Col>

              <Col className="mt-2 mx-auto">
                <h5>{props.name}</h5>
              </Col>   

            </Row>

          </Button>
  
);

export default Card;

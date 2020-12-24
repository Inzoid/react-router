import React from 'react';
import './team/Team.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from "reactstrap";

//component 
import Team_J from './team/Team_J';
import Team_K from './team/Team_K';

function Schedule() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="title">Semua Jadwal Theater</h3>
        </Col>
        <Team_J col="sm-4">
          <Link to="/team-j">
            <Button className="mt-3" style={{ backgroundColor: "teal", width: '100%' }}>
              Detail
            </Button>
          </Link>
        </Team_J>
        <Team_K>
          <Link to="/team-k">
            <Button className="mt-3" style={{ backgroundColor: "teal", width: '100%' }}>
              Detail
            </Button>
          </Link>
        </Team_K>
      </Row>
    </Container>
  );
}

export default Schedule;

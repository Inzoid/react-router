import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

//component
import '../team/Team.css';
import Description from '../menu/Description';
import Schedule from '../menu/Schedule';
import CardTicket from '../menu/CardTicket';

function TeamT() {
  return (
    <Container>
      {window.location.pathname !== '/all-schedule' &&
        <Row>
          <Col>
            <h3>JKT48 Team T Waiting Stage (Fly Team T)</h3>
          </Col>
        </Row>
      }
      <Row>
        <Col sm="6" className="mb-3">
          <CardTicket price="IDR 30.000" />
        </Col>
        
        <Col>
          <Card body outline color="info">
            <CardText>
              <CardTitle tag="h5">Jadwal Team T Minggu ini </CardTitle>
              <Schedule setlist="Fly Team T" />
              <Description team="Team T" />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default TeamT;
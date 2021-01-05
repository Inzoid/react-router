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
      <Row>
        <Col>
          <h3>JKT48 Team T Waiting Stage (Fly Team T)</h3>
        </Col>
      </Row>
      <Row>
        <CardTicket price="IDR 30.000" />
        
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
import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

//component
import '../team/Team.css';
import Description from '../menu/Description';
import Schedule from '../menu/Schedule';
import CardTicket from '../menu/CardTicket';

function TeamJ() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Team J 5th Stage (Idol No Yoake / Fajar Sang Idola)</h3>
        </Col>
      </Row>
      <Row>
        <CardTicket price="IDR 30.000" />
        
        <Col>
          <Card body outline color="info">
            <CardText>
              <CardTitle tag="h5">Jadwal Team J Minggu ini </CardTitle>
              <Schedule setlist="Idol No Yoake" />
              <Description team="Team J" />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamJ;

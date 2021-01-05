import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

//component
import '../team/Team.css';
import Description from '../menu/Description';
import Schedule from '../menu/Schedule';
import CardTicket from '../menu/CardTicket';

function Academy() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Academy Class A</h3>
        </Col>
      </Row>
      <Row>
        <CardTicket price="IDR 25.000" />
        
        <Col>
          <Card body outline color="info">
            <CardText>
              <CardTitle tag="h5">Jadwal Academy Class A Minggu ini </CardTitle>
              <Schedule setlist="Pajama Drive" />
              <Description team="Academy Class A" />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Academy;

import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

//component
import '../team/Team.css';
import Description from '../menu/Description';
import Schedule from '../menu/Schedule';
import CardTicket from '../menu/CardTicket';

function TeamK() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Team KIII 5th Stage (Ramune no Nomikata / Cara Meminum Ramune)</h3>
        </Col>
      </Row>
      <Row>
        <CardTicket price="IDR 30.000" />
        
        <Col>
          <Card body outline color="info">
            <CardText>
              <CardTitle tag="h5">Jadwal Team KIII Minggu ini </CardTitle>
              <Schedule setlist="Ramune no Nomikata" />
              <Description team="Team KIII" />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamK;
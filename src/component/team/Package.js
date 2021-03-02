import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

import '../team/Team.css';
import SchedulePackages from '../menu/ScheduleList';
import CardTicket from '../menu/CardTicket';

function Package() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>JKT48 Theater Show (7 Show Package) – 1st Week March 2021</h3>
        </Col>
      </Row>
      <Row>
        <CardTicket price="IDR 175.000" />
        <Col>
          <Card body outline color="info">
            <CardText>
              <CardTitle tag="h5">Jadwal JKT48 Theater 1st Week March 2021 </CardTitle>
              <SchedulePackages />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Package;

import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col style={{marginTop: '25px'}}>
          <Card body outline color="info">
          <CardTitle><h3>About</h3></CardTitle>
          <CardText>
            This site is developed by <a href="https://twitter.com/inzoid" target="_blank"><b>Inzoid</b></a> this website is work on progress <br /> Site is developed at 21 December 2020 
          </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

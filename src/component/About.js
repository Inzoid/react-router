import React from 'react';
import { Container, Row, Col } from 'reactstrap';


function About() {
  return (
    <Container>
      <Row>
        <Col style={{marginTop: '25px'}}>
          <h1>About</h1>
          <p>
            This site is developed by inzoid this website is work on progress
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

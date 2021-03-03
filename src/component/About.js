import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';

function About() {
  return (
    <Container>
      <Row>
        <Col className="mt-3">
          <Card body outline color="info">
            <CardTitle tag="h2">About</CardTitle>
            <CardText>
              This site is developed by{' '}
              <a
                href="https://twitter.com/inzoid"
                target="_blank"
                rel="noreferrer"
              >
                <b>Inzoid</b>
              </a>{' '}
              this website is work on progress. <br /> 
              Site is developed at 21 December 2020 <br />
            </CardText>
            <CardTitle tag="h4">Source:</CardTitle>
            <CardText>
              There are three websites that I have used as a source content for
              info setlist, schedule, link, member and image asset
            </CardText>
            <ul>
              <li>
                <a
                  href="https://jkt48.com/calendar/list?lang=id"
                  target="_blank"
                  rel="noreferrer"
                >
                  jkt48.com
                </a>
              </li>
              <li>
                <a href="https://tiket.com" target="_blank" rel="noreferrer">
                  tiket.com
                </a>
              </li>
              <li>
                <a
                  href="http://stage48.net/wiki/index.php/JKT48"
                  target="_blank"
                  rel="noreferrer"
                >
                  stage48.net
                </a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

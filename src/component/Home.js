import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import Team from '../store/Team';

function Home() {
  return (
    <Container>
      <h1 className="title">
        WELCOME TO JKT48 THEATER SCHEDULE
      </h1>
      <Row className="App">
        {Team && Team.slice(0, 3).map((item, idx) => (
          <Col key={idx}>
            <CardImg src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-j'>
                <Button 
                  className="btn-schedule"
                  style={{ backgroundColor: '#373f48', border: 'none' }}>
                    Lihat Jadwal
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="App">
        {Team && Team.slice(3, 4).map((item, idx) => (
          <Col key={idx}>
            <CardImg src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-j'>
                <Button 
                  className="btn-schedule"
                  style={{ backgroundColor: item.button, border: 'none' }}>
                    Lihat Jadwal
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home;
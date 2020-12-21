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
      <Row style={{ marginTop: '16px', marginBottom: '25px' }}>
        {Team && Team.slice(0, 3).map((item, idx) => (
          <Col key={idx}>
            <CardImg className="card" src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-j'>
                <Button style={{ backgroundColor: item.button, border: 'none' }}>Lihat Jadwal</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <Row style={{ marginTop: '16px', marginBottom: '25px' }}>
        {Team && Team.slice(2, 4).map((item, idx) => (
          <Col key={idx}>
            <CardImg className="card" src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-j'>
                <Button style={{ backgroundColor: 'rgb(97 11 160)', border: 'none' }}>Lihat Jadwal</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home;
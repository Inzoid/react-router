import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import Team from "../../store/Team";
import '../../component/team/Team.css';

function TeamJ() {
  return(
    <Container>
      <Row>
        <Col>
          <h1>Team T</h1>
        </Col>
      </Row>
      <Row>
        {Team && Team.slice(2,3).map((item, idx) => (
          <Col  sm="6" key={idx} className="App">
            <CardImg src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-j'>
                <Button style={{ backgroundColor: item.button, border: 'none' }}>Lihat Jadwal</Button>
              </Link>
            </Card>
          </Col>
        ))}
        {Team && Team.slice(2,3).map((item, idx) => (
          <Col className="mt-3" key={idx} className="App">
            <CardImg src={item.img} alt={item.name} />
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
    </Container>
  )
}

export default TeamJ;
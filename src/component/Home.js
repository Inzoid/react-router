import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import Team from '../store/Team';

function Home() {
  return (
    <Container>
      <Col>
        <h2 className="title">
          WELCOME TO JKT48 THEATER SCHEDULE
        </h2>
      </Col>
      <Row className="App">
        {Team && Team.slice(0, 3).map((item, idx) => (
          <Col sm="4" key={idx} style={{marginBottom: '15px'}}>
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={{borderTopLeftRadius: '0', borderTopRightRadius: '0',  borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}} />
            </Link>
            <Card body inverse color={item.color} style={{borderTopLeftRadius: '0', borderTopRightRadius: '0',  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to={item.route}>
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
      <Row className="App">
        {Team && Team.slice(3, 5).map((item, idx) => (
          <Col style={{marginBottom: '15px'}} sm="6" key={idx}>
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={{borderTopLeftRadius: '0', borderTopRightRadius: '0',  borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}} />
            </Link>
            <Card body inverse color={item.color} style={{borderTopLeftRadius: '0', borderTopRightRadius: '0',  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to={item.route}>
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
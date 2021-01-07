import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Card, CardImg, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';

import '../App.css';
import './team/Team.css';
import Team from '../store/Team';

function Schedule() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="title">Semua Jadwal Theater</h3>
        </Col>
      </Row>
      <Row className="App">
        {Team.slice(4,5).map((item, idx) => (
          <Col sm="12" key={idx}>
            <CardImg src={item.img} />
            <Card body inverse color={item.color} className="mb-3">
              <CardTitle tag="h4">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <CardTitle tag="h5">
                <b>IDR 150.000</b> (On Tiket.com)
              </CardTitle>
              <Link to={item.route}>
                <Button className="btn-full" color="dark" onClick="">
                  Detail
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
        {Team.slice(0,3).map((item, idx) => (
          <Col sm="6" key={idx}>
            <UncontrolledCarousel items={item.banner} />
            <Card body inverse color={item.color} className="mb-3">
              <CardTitle tag="h2">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <CardTitle tag="h4">
                <b>IDR 30.000</b> (On Tiket.com)
              </CardTitle>
              <Link to={item.route}>
                <Button className="btn-full" color="dark" onClick="">
                  Detail
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
        {Team.slice(3,4).map((item, idx) => (
          <Col sm="6" key={idx}>
            <UncontrolledCarousel items={item.banner} />
            <Card body inverse color={item.color} className="mb-3">
              <CardTitle tag="h2">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <CardTitle tag="h4">
                <b>IDR 25.000</b> (On Tiket.com)
              </CardTitle>
              <Link to={item.route}>
                <Button className="btn-full" color="dark" onClick="">
                  Detail
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Schedule;

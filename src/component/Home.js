import React, { useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import storeTeam from '../store/Team';

function Home() {
  const { data } = useSelector(state => state.storeHome);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'HOME',
      payload: storeTeam
    })
  }, [])

  return (
    <Container>
      <Col>
        <h2 className="title">
          WELCOME TO JKT48 THEATER SCHEDULE
        </h2>
      </Col>
      <Row className="App">
        {data.slice(0, 3).map((item, idx) => (
          <Col sm="4" key={idx} className="mb-3">
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={{borderRadius: '0'}} />
            </Link>
            <Card body inverse color={item.color} style={{borderRadius: '0px 0px 20px 20px'}}>
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
        {data.slice(3, 5).map((item, idx) => (
          <Col sm="6" className="mb-3" key={idx}>
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={{borderRadius: '0'}} />
            </Link>
            <Card body inverse color={item.color} style={{borderRadius: '0px 0px 20px 20px'}}>
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
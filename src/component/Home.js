import React, { useEffect } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const {dataTeam, name} = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('team: ', dataTeam )
  console.log('name: ', name )

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'TEAM_K'})
    }, 2000)
  })

  const imgStyle = {borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}
  const cardStyle = {borderTopLeftRadius: '0', borderTopRightRadius: '0',  borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}
  
  return (
    <Container>
      <Col>
        <h2 className="title">
          WELCOME TO JKT48 THEATER SCHEDULE
        </h2>
        <p>{name}</p>
      </Col>
      <Row className="App">
        {dataTeam.slice(0, 3).map((item, idx) => (
          <Col sm="4" key={idx} style={{marginBottom: '15px'}}>
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={imgStyle} />
            </Link>
            <Card body inverse color={item.color} style={cardStyle}>
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
        {dataTeam.slice(3, 5).map((item, idx) => (
          <Col style={{marginBottom: '15px'}} sm="6" key={idx}>
            <Link to={item.route}>
              <CardImg src={item.img} alt={item.name} style={imgStyle} />
            </Link>
            <Card body inverse color={item.color} style={cardStyle}>
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
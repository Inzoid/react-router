import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';

//component
import '../team/Team.css';
import Loading from '../menu/Loading';
import Description from '../menu/Description';
import Schedule from '../menu/Schedule';

//store
import Team from '../../store/Team';
import Members from '../../store/Member';
import Schedules from '../../store/Schedule';
import Carousels from '../../store/Carousel';

function TeamT(props) {
  const [section, setSection] = useState('description');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [section])

  const Lineup = () => {
    return (
      Members[2].Team_T.map((item, idx) => (
        <CardText key={idx}>{item.member}</CardText>
      ))
    )
  }

  const TicketButton = () => {
    return (
      Schedules.TEAM_T.DECEMBER.map((item, idx) => (
        <Button 
          key={idx}
          style={{ marginBottom: '16px' }}
          color={item.color}
          href={item.link}
          target="_blank"
        >
          Beli Tiket untuk {item.date}
        </Button>
      ))
    )
  }

  return (
    <Container>
      {window.location.pathname !== '/all-schedule' &&
        <Row>
          <Col>
            <h3>JKT48 Team T Waiting Stage (Fly Team T)</h3>
          </Col>
        </Row>
      }
      <Row>
        {section == 'description' ? (
          Team.slice(2, 3).map((item, idx) => (
            <Col className="mb-3" sm="6" key={idx}>
              <UncontrolledCarousel items={Carousels.TEAM_T} />
              <Card body inverse color={item.color}>
                {loading && <Loading />}
                <CardTitle tag="h2">{item.name}</CardTitle>
                <CardText>{item.desc}</CardText>
                <CardTitle tag="h4">
                  <b>IDR 25.000</b> (On Tiket.com)
                  </CardTitle>
                <TicketButton />
                <Button color="success" onClick={() => setSection('member')}>
                  Lihat Line Up Member
                </Button>
                {props.children}
              </Card>
            </Col>
          ))
        ) : (
          <Col className="mb-3" sm="6">
            <Card body inverse color="info">
              { loading ?  <Loading />  : 
                <div>
                  <CardTitle tag="h4">
                    Daftar Member Team T yang akan tampil
                  </CardTitle>
                  <Lineup />
                  <Button className="btn-full" color="danger" onClick={() => setSection('description')}>
                    Lihat Deskripsi 
                  </Button> 
                </div>
              }
            </Card>
          </Col>
        )}
        {window.location.pathname !== '/all-schedule' &&
          <Col>
            <Card body outline color="info">
              <CardText>
                <CardTitle tag="h5">Jadwal Team T Minggu ini </CardTitle>
                <Schedule setlist="Fly Team T" />
                <Description team="Team T" />
              </CardText>
            </Card>
          </Col>
        }
      </Row>
    </Container>
  )
}

export default TeamT;
import React, { useState, useEffect } from 'react';

//component
import '../../component/team/Team.css';
import Loading from '../menu/Loading';
import Description from '../../component/menu/Description';
import { Container, Row, Col, Card, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';

//store
import Team from '../../store/Team';
import Members from '../../store/Member';
import Schedules from '../../store/Schedule';
import Carousels from '../../store/Carousel';

function TeamJ(props) {
  const [section, setSection] = useState('description');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [section])

  const Schedule = () => {
    return (
      Schedules.TEAM_J.DECEMBER.map((item, idx) => (
        <CardText className="schedule" key={idx}>
          Idol No Yoake <b>({item.day}, {item.date} {item.time})</b>
        </CardText>
      ))
    )
  }

  const Lineup = () => {
    return (
      Members[0].Team_J.map((item, idx) => (
        <CardText key={idx}>{item.member}</CardText>
      ))
    )
  }

  const TicketButton = () => {
    return (
      Schedules.TEAM_J.DECEMBER.map((item, idx) => (
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
            <h3>Team J 5th Stage (Idol No Yoake / Fajar Sang Idola)</h3>
          </Col>
        </Row>
      }
      <Row>
        {section == 'description' ? (
          Team.slice(0, 1).map((item, idx) => (
            <Col className="mb-3" sm="6" key={idx}>
              <UncontrolledCarousel items={Carousels.TEAM_J} />
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
              { loading ? <Loading /> : 
                <div>
                  <CardTitle tag="h4">
                    Daftar Member Team J yang akan tampil
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
                <CardTitle tag="h5">Jadwal Team J Minggu ini </CardTitle>
                <Schedule />
                <Description />
              </CardText>
            </Card>
          </Col>
        }
      </Row>
    </Container>
  );
}

export default TeamJ;

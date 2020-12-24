import React, { useState } from 'react';

//component
import '../../component/team/Team.css';
import Description from '../../component/menu/Description';
import { Container, Row, Col, Card, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';

//store
import Team from '../../store/Team';
import Members from '../../store/Member';
import Schedules from '../../store/Schedule';
import Carousels from '../../store/Carousel';

function TeamJ() {
  const [section, setSection] = useState('description');

  const Schedule = () => {
    return (
      Schedules.TEAM_J.DECEMBER.map((item, idx) => (
        <CardText key={idx}>
          Fajar Sang Idola <b>{item.day} {item.date} {item.time}</b>
        </CardText>
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
      <Row>
        <Col>
          <h3>Team J 5th Stage (Idol No Yoake / Fajar Sang Idola)</h3>
        </Col>
      </Row>
      <Row>
        {section == 'description' ? (
          Team.slice(0, 1).map((item, idx) => (
            <Col sm="6" key={idx}>
              <UncontrolledCarousel items={Carousels.TEAM_J} />
              <Card body inverse color={item.color}>
                <CardTitle tag="h2">{item.name}</CardTitle>
                <CardText>{item.desc}</CardText>
                <CardTitle tag="h4">
                  <b>IDR 25.000</b> ( Tersedia di Tiket.com )
                </CardTitle>
                <TicketButton />
                <Button color="success" onClick={() => setSection('member')}>
                  Lihat Line Up Member
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <Col sm="6">
            <Card body inverse color="danger">
              <CardTitle style={{ marginTop: '15px' }} tag="h4">
                Daftar Member Team J yang akan tampil
              </CardTitle>
                {Members[0].Team_J.map((item, idx) => (
                  <CardText key={idx}>{item.member}</CardText>
                ))}
              <Button color="success" onClick={() => setSection('description')}>
                Lihat Description
              </Button>
            </Card>
          </Col>
        )}

        <Col>
          <Card body outline color="danger">
            <CardText>
              <CardTitle tag="h5">Jadwal Theater Team J Minggu ini </CardTitle>
              <Schedule />
              <Description />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamJ;

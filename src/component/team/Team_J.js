import React, { useState } from 'react';
import '../../component/team/Team.css';
import Carousel from '../Carousel';
import {Container, Row, Col, Card, Button, CardTitle, CardText, CardImg} from 'reactstrap';
import Team from '../../store/Team';
import Setlists from '../../store/Setlist';
import Members from '../../store/Member';

function TeamJ() {
  const Setlist = Setlists[0].Team_J.map((item, idx) => (
    <CardText key={idx}>
      <b>{item.id}</b> {item.song}
    </CardText>
  ));

  const Member = Members[0].Team_J.map((item, idx) => (
    <CardText key={idx}> 
      {item.member} 
    </CardText>
  ));

  const Encore = Setlists[0].Team_J.slice(14, 17).map((item, idx) => (
    <CardText key={idx}>
      <b>{item.id}</b> {item.song}
    </CardText>
  ));

  const [menu, setMenu] = useState(Setlist);
  const [menuType, setMenuType] = useState('setlist');
  const [section, setSection] = useState('description')

  const handleClickDesc = () => {
    setSection('description')
  }

  const handleClickSetlist = () => {
    setMenuType('setlist');
    setMenu(Setlist);
  };

  const handleClickMember = () => {
    setMenuType('member');
    setMenu(Member);
    setSection(Member)
  };

  const handleClickEncore = () => {
    setMenuType('Encore');
    setMenu(Encore);
  };

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
              <Carousel />
              <Card body inverse color={item.color}>
                <CardTitle tag="h2">{item.name}</CardTitle>
                <CardText>{item.desc}</CardText>
                <CardTitle tag="h4">
                  <b>IDR 25.000</b> ( Tersedia di Tiket.com )
                </CardTitle>
                <Button
                  style={{ marginBottom: '16px' }}
                  color="info"
                  href="https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-23-desember"
                  target="_blank"
                >
                  Buy Ticket for 23 December
                </Button>
                <Button
                  color="primary"
                  href="https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-27-desember"
                  target="_blank"
                >
                  Buy Ticket for 27 December
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
            </Card>
          </Col>
        )}

        <Col>
          <Card body outline color="danger">
            <CardImg style={{marginBottom: '15px'}} src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/11/09/84c72536-c9f7-4088-ab95-0e08d7adceaa-1604894616801-159481f69e6ccd24a5cdd083eced2194.jpg" alt="Team J" />
            <CardText>
              <CardTitle tag="h5">Jadwal Theater Team J Minggu ini </CardTitle>
              <CardText>
                Fajar Sang Idola 
                <b> Rabu 23 Desember (Pukul 19.00 WIB) </b>
              </CardText>
              <CardText>
                Fajar Sang Idola 
                <b> Minggu 27 Desember (Pukul 16.00 WIB) </b>
              </CardText>
            </CardText>
            <CardText>
              <Row>
                <Col>
                  <Button color="danger" style={{ marginRight: '7px' }} onClick={handleClickDesc}>
                    Deskripsi
                  </Button>
                  <Button color="danger" onClick={handleClickMember}>
                    Member
                  </Button>
                  <Button className="setlist-btn" onClick={handleClickSetlist}>
                    Lagu Setlist
                  </Button>
                  <Button
                    color="info"
                    style={{ marginLeft: '7px' }}
                    onClick={handleClickEncore}
                  >
                    Encore
                  </Button>
                </Col>
              </Row>

              {menuType == 'setlist' ? (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Lagu yang akan dibawakan di Setlist ini
                  </CardTitle>
                  <CardText>{menu}</CardText>
                </div>
              ) : menuType == 'member' ? (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Member Team J yang akan tampil
                  </CardTitle>
                  <CardText>{menu}</CardText>
                </div>
              ) : (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Lagu Ankoru
                  </CardTitle>
                  <CardText>{menu}</CardText>
                </div>
              )}
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamJ;

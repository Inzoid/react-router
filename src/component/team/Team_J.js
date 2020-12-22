import React, { useState } from 'react';
import '../../component/team/Team.css';
import Carousel from "../Carousel";
import { Container, Row, Col, Card,Button, CardTitle, CardText} from 'reactstrap';
import Team from '../../store/Team';
import Setlists from '../../store/Setlist';
import Members from '../../store/Member';

function TeamJ() {
  const Setlist = Setlists[0].Team_J.map((item, idx) => (
    <p key={idx}> <b>{item.id}</b> {item.song} </p>
  ));

  const Member = Members[0].Team_J.map((item, idx) => (
    <p key={idx}> {item.member} </p>
  ));

  const [menuType, setMenuType] = useState('setlist');
  const [menu, setMenu] = useState(Setlist);
  
  const handleClickSetlist = () => {
    setMenuType('setlist')
    setMenu(Setlist)
  }

  const handleClickMember = () => {
    setMenuType('member')
    setMenu(Member)
  }

  const handleClickEncore = () => {
    setMenuType('Encore')
    setMenu(
      Setlists[0].Team_J.slice(14, 17).map((item, idx) => (
        <p key={idx}> <b>{item.id}</b> {item.song} </p>
      ))
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Team J 5th Stage (Idol No Yoake / Fajar Sang Idola)</h2>
        </Col>
      </Row>
      <Row>
        {Team && Team.slice(0, 1).map((item, idx) => (
          <Col xs="6" key={idx}>
            <Carousel />
            <Card body inverse color={item.color}>
              <CardTitle tag="h2">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <CardTitle tag="h4"><b>IDR 25.000</b> ( Tersedia di Tiket.com )</CardTitle>
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
        ))}
        <Col>
          <Card body outline color="danger">
            <CardText>
              <CardTitle tag="h5">Jadwal Theater Team J Minggu ini </CardTitle>
              <p>Fajar Sang Idola Oleh JKT48 Team J <b> 23 Desember (Pukul 19.00 WIB) </b></p>
              <p>Fajar Sang Idola Oleh JKT48 Team J <b> 27 Desember (Pukul 16.00 WIB) </b></p>
            </CardText>
            <CardText>
              <Button color="danger" onClick={handleClickMember}>Daftar Member</Button>
              <Button className="setlist-btn" onClick={handleClickSetlist} >Lagu Setlist</Button>
              <Button color="info" style={{marginLeft: '10px'}} onClick={handleClickEncore}>Encore</Button>

              { menuType == 'setlist' ? (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Lagu yang akan dibawakan di Setlist ini
                  </CardTitle>
                  <CardText>
                    {menu}
                  </CardText>
                </div>
              ) : menuType == 'member' ? (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Member Team J yang akan tampil
                  </CardTitle>
                  <CardText>
                  {menu}
                </CardText>
                </div>
              ) : (
                <div>
                  <CardTitle style={{ marginTop: '15px' }} tag="h5">
                    Daftar Lagu Ankoru
                  </CardTitle>
                  <CardText>
                    {menu}
                  </CardText>
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

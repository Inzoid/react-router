import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
} from 'reactstrap';
import Team from '../../store/Team';
import '../../component/team/Team.css';
import Carousel from "../Carousel";

function TeamJ() {
  return (
    <Container>
      <Row>
        <h1>Team J (Fajar Sang Idola / Idol No Yoake)</h1>
      </Row>
      <Row>
        {Team && Team.slice(0, 1).map((item, idx) => (
          <Col xs="5" key={idx}>
            <Carousel />
            <Card body inverse color={item.color}>
              <CardTitle tag="h3">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <CardTitle tag="h5">IDR 25.000 <b>( Tersedia di Tiket.com )</b></CardTitle>
              <Button style={{marginBottom: '16px'}} color="info">Buy Ticket 23 Desember</Button> 
              <Button color="primary" href="https://www.tiket.com/to-do/konser-jkt48-fajar-sang-idola-27-desember" target="blank">Buy Ticket 27 Desember</Button>
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
              <Button color="primary" style={{marginRight: '10px', backgroundColor: '#424C58'}} >Lagu Setlist</Button>
              <Button color="danger">Daftar Member</Button>
              <CardTitle style={{marginTop: '15px'}} tag="h5">Daftar Lagu yang akan dibawakan di Setlist Fajar Sang Idola </CardTitle>
              <p>M00.　overture (JKT48 ver.)</p>
              <p>M01.　Idol no Yoake  Fajar Sang Idola)</p>
              <p>M02.　Minasan mo go Issho ni (Bersama-sama Semuanya)</p>
              <p>M03.　Haru Ichiban ga Fuku Koro (Angin Musim Semi Pertama)</p>
              <p>M04.　Kobushi no Seigi (Kebenaran Tinju Ini)</p>
              <p>M05.　Zannen Shoujo (Gadis yang Celaka) </p>
              <p>M06.　Kuchi Utsushi no Chocolate ( Berikan Coklat dengan Bibir)</p>
              <p>M07.　Kataomoi no Taikakusen (Garis Diagonal Cinta Searah)</p>
              <p>M08.　Tengoku Yarou (Berandalan di Surga) </p>
              <p>M10.　Joshikousei wa Yamerarenai (Tak Bisa Berhenti Jadi Gadis SMA)</p>
              <p>M11.　Suki to Ieba Yokatta (Andai Ku Dapat Ungkapkan Cinta)</p>
              <p>M12.　Sobakasu no Kiss (Freckles' Kiss)</p>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamJ;

import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { Row, Col, Button, CardTitle, CardText } from 'reactstrap';

//store
import Setlists from '../../store/Setlist';
import Members from '../../store/Member';

// Member description
const Member = () => {
  let path = window.location.pathname
  const Team_J = Members[0].Team_J;
  const Team_K = Members[1].Team_K;

  return (
    path === '/team-j' ? (
      <div>
        <CardTitle tag="h5">
          Daftar Member Team J yang akan tampil
        </CardTitle>
        {Team_J.map((item, idx) => (
          <CardText key={idx}>
            {item.member}
          </CardText>
        ))}
      </div>
    ) : path === '/team-k' ? (
      <div>
        <CardTitle tag="h5">
          Daftar Member Team KIII yang akan tampil
        </CardTitle>
        {Team_K.map((item, idx) => (
          <CardText key={idx}>
            {item.member}
          </CardText>
        ))}
      </div>
    ) : (
      'null'
    )
  )
}

// Setlist description
const Setlist = () => {
  let path = window.location.pathname
  const Team_J = Setlists[0].Team_J;
  const Team_K = Setlists[1].Team_K;

  return (
    path === '/team-j' ? (
      Team_J.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    ) : path === '/team-k' ? (
      Team_K.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    ) : (
      'null'
    )
  )
}

// Encore Description
const Encore = () => {
  let path = window.location.pathname
  const Team_J = Setlists[0].Team_J.slice(14, 17);
  const Team_K = Setlists[1].Team_K.slice(13, 17);

  return (
    path === '/team-j' ? (
      Team_J.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    ) : path === '/team-k' ? (
      Team_K.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    ) : (
      'null'
    )
  )
}

function Description() {

  const handleClickSetlist = () => {
    setMenuType('setlist');
  };

  const handleClickMember = () => {
    setMenuType('member');
  };

  const handleClickEncore = () => {
    setMenuType('Encore');
  };

  const [menuType, setMenuType] = useState('setlist');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [menuType])

  return (
    <CardText>
      <Row>
        <Col>
          <Button 
            className="setlist-btn" 
            onClick={handleClickSetlist}
            style={{backgroundColor: 'teal'}}
          >
            Lagu Setlist
          </Button>
          <Button 
            color="danger" 
            onClick={handleClickMember}
          >
            Member
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
      {loading && 
        <PulseLoader
          size={12}
          color={"teal"}
          loading={loading}
          style={{alignItem: 'center'}}
        />
      }
      {menuType === 'setlist' ? (
        <div>
          <CardTitle tag="h5">
            Daftar Lagu Yang akan dibawakan
          </CardTitle>
          <Setlist />
        </div>
      ) : menuType === 'member' ? (
        <div>
          <Member />
        </div>
      ) : (
        <div>
          <CardTitle style={{ marginTop: '15px' }} tag="h5">
            Daftar Lagu Ankoru
          </CardTitle>
          <Encore />
        </div>
      )}
    </CardText>
  )
}

export default Description;
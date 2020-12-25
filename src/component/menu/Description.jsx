import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { Row, Col, Button, CardTitle, CardText } from 'reactstrap';

//store
import Setlists from '../../store/Setlist';
import Members from '../../store/Member';

function Description() {
  let team = '';
  let member = '';
  let setlist = '';
  let encore = '';
  let path = window.location.pathname;

  const Member_J = Members[0].Team_J;
  const Member_K = Members[1].Team_K;

  const Setlist_J = Setlists[0].Team_J;
  const Setlist_K = Setlists[1].Team_K;

  const Encore_J = Setlists[0].Team_J.slice(14, 17);
  const Encore_K = Setlists[1].Team_K.slice(13, 17);

  switch(path) {
    case '/team-j':
      team = 'J'
      member = Member_J;
      setlist = Setlist_J;
      encore = Encore_J;
      break
    case '/team-k':
      team = 'KII'
      member = Member_K;
      setlist = Setlist_K
      encore = Encore_K;
      break
  }

  // Member description
  const Member = () => {
    return (
      <div>
        <CardTitle tag="h5">
          Daftar Member Team {team} yang akan tampil
        </CardTitle>
        {member.map((item, idx) => (
          <CardText key={idx}>
            {item.member}
          </CardText>
        ))}
      </div>
    )
  }

  // Setlist description
  const Setlist = () => {
    return (
      setlist.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    )
  }

  // Encore Description
  const Encore = () => {
    return (
      encore.map((item, idx) => (
        <CardText key={idx}>
          <b>{item.id}</b> {item.song}
        </CardText>
      ))
    )
  }

  const handleClickSetlist = () => {
    setMenuType('setlist');
  };

  const handleClickMember = () => {
    setMenuType('member');
  };

  const handleClickEncore = () => {
    setMenuType('encore');
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
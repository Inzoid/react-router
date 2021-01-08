import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { Row, Col, Button, CardTitle, CardText, Table } from 'reactstrap';

//store
import Setlists from '../../store/Setlist';
import Members from '../../store/Member';

function Description(props) {
  let team =  props.team ;
  let member = '';
  let setlist = '';
  let encore = '';
  let path = window.location.pathname;

  const Member_J = Members[0].Team_J;
  const Member_K = Members[1].Team_K;
  const Member_T = Members[2].Team_T;
  const Member_A = Members[3].Academy;

  const Setlist_J = Setlists[0].Team_J;
  const Setlist_K = Setlists[1].Team_K;
  const Setlist_T = Setlists[2].Team_T;
  const Setlist_A = Setlists[3].Academy;

  const Encore_J = Setlists[0].Team_J.slice(13, 17);
  const Encore_K = Setlists[1].Team_K.slice(13, 17);
  const Encore_T = Setlists[2].Team_T.slice(13, 17);
  const Encore_A = Setlists[3].Academy.slice(13, 17);

  switch(path) {
    case '/team-j':
      member = Member_J;
      setlist = Setlist_J;
      encore = Encore_J;
      break
    case '/team-k':
      member = Member_K;
      setlist = Setlist_K
      encore = Encore_K;
      break
    case '/team-t':
      member = Member_T;
      setlist = Setlist_T;
      encore = Encore_T;
      break;
    case '/academy-class-a':
      member = Member_A;
      setlist = Setlist_A;
      encore = Encore_A
      break
    default: 
      team = 'J'
      member = Member_J;
      setlist = Setlist_J;
      encore = Encore_J;
      break
  }

  // Member description
  const Member = () => {
    return (
      <>
        <Table>
          <thead style={tableCss}>
            <th>Daftar member {team} yang akan tampil</th>
          </thead>
          {member.map((item, idx) => (
            <tbody>
              <tr>
                <td key={idx}>{item.member}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>
    )
  }

  // Setlist description
  const Setlist = () => {
    return (
      <Table>
        <thead style={tableCss}>
          <tr>
            <th>No</th>
            <th>Nama Lagu</th>
          </tr>
        </thead>
        {setlist.map((item) => (
          <tbody>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.song}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    )
  }

  // Encore Description
  const Encore = () => {
    return (
      <Table>
        <thead style={tableCss}>
          <tr>
            <th>No</th>
            <th>Nama Lagu</th>
          </tr>
        </thead>
        {encore.map((item) => (
          <tbody>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.song}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    )
  }

  // Setting Menu
  const [menuType, setMenuType] = useState('setlist');

  const handleClickSetlist = () => {
    setMenuType('setlist');
  };

  const handleClickMember = () => {
    setMenuType('member');
  };

  const handleClickEncore = () => {
    setMenuType('encore');
  };

  //Set Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [menuType])

  const Loading = () => {
    return (
      <PulseLoader
        size={12}
        color={"teal"}
        loading={loading}
      />
    )
  }

  const tableCss = {
    backgroundColor: 'teal', 
    color: 'white'
  }

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
            color="info"
            style={{ marginRight: '7px' }}
            onClick={handleClickEncore}
          >
            Encore
          </Button>
          <Button 
            color="danger" 
            onClick={handleClickMember}
          >
            Member
          </Button>
        </Col>
      </Row>
      {menuType === 'setlist' ? (
        loading ? <Loading /> :
        <>
          <CardTitle tag="h5">
            Daftar lagu yang akan dibawakan:
          </CardTitle>
          <Setlist />
        </>
      ) : menuType === 'member' ? (
        loading ? <Loading /> :
        <>
          <Member />
        </>
      ) : (
        loading ? <Loading /> :
        <>
          <CardTitle style={{ marginTop: '15px' }} tag="h5">
            Daftar Lagu Ankoru
          </CardTitle>
          <Encore />
        </>
      )}
    </CardText>
  )
}

export default Description;
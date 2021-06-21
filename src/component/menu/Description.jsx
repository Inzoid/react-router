import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { Row, Col, Button, CardTitle, CardText, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

function Description(props) {
  const { team, setlist, member, encore } = useSelector(state => state.storeDescription)
  const dispatch = useDispatch();

  let dispatchType = '';
  let teamName =  props.team ;
  let path = window.location.pathname;

  switch(path) {
    case '/team-j':
      dispatchType = 'GET_DESC_TEAM_J'
      break
    case '/team-k':
      dispatchType = 'GET_DESC_TEAM_K'
      break
    case '/team-t':
      dispatchType = 'GET_DESC_TEAM_T'
      break
    case '/academy-class-a':
      dispatchType = 'GET_DESC_ACADEMY'
      break
    default: 
      dispatchType = 'GET_DESC_PACKAGES'
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
            <tbody key={idx}>
              <tr>
                <td>{item.member}</td>
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
      <>
        <CardTitle tag="h5">
          Daftar lagu yang akan dibawakan:
        </CardTitle>
        <Table>
          <thead style={tableCss}>
            <tr>
              <th>No</th>
              <th>Nama Lagu</th>
            </tr>
          </thead>
          {setlist.map((item, idx) => (
            <tbody key={idx}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.song}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>
    )
  }

  // Encore Description
  const Encore = () => {
    return (
      <>
        <CardTitle style={{ marginTop: '15px' }} tag="h5">
          Daftar Lagu Ankoru
        </CardTitle>
        <Table>
          <thead style={tableCss}>
            <tr>
              <th>No</th>
              <th>Nama Lagu</th>
            </tr>
          </thead>
          {encore.map((item, idx) => (
            <tbody key={idx}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.song}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>
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
    dispatch({ 
      type: dispatchType, 
      payload: teamName 
    })
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
          <Setlist />
      ) : menuType === 'member' ? (
        loading ? <Loading /> :
          <Member />
      ) : (
        loading ? <Loading /> :
          <Encore />
      )}
    </CardText>
  )
}

export default Description;
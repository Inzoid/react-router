import React, { useState, useEffect } from 'react';
import { Col, Card, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import '../team/Team.css';
import Loading from '../menu/Loading';

function CardTicket(props) {
  const [section, setSection] = useState('description');
  const [loading, setLoading] = useState(false);

  const {team, name, member, schedule, banner} = useSelector(state => state.TeamReducer);
  const dispatch = useDispatch();

  let dispatchType = '';
  let path = window.location.pathname;

  useEffect(() => {
    setLoading(true)
    dispatch({ type: dispatchType })
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [section])
  
  switch(path) {
    case '/team-j':
      dispatchType = 'TEAM_J'
      break
    case '/team-k':
      dispatchType = 'TEAM_K'
      break
    case '/team-t':
      dispatchType = 'TEAM_T'
      break
    case '/academy-class-a':
      dispatchType = 'ACADEMY'
      break
    default: 
      dispatchType = 'PACKAGES'
    break
  }

  const Lineup = () => {
    return (
      member.map((item, idx) => (
        <CardText key={idx}>{item.member}</CardText>
      ))
    )
  }

  const TicketButton = () => {
    return (
      schedule.map((item, idx) => (
        <Button
          key={idx}
          style={{ marginBottom: '8px' }}
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
    <>
      {section === 'description' ? (
        team.map((item, idx) => (
          <Col sm="6" key={idx}>
            <UncontrolledCarousel items={banner} />
            <Card style={{borderRadius: '0px 0px 20px 20px'}} body inverse color={item.color} className="mb-3">
              { loading ? <Loading /> :
                <>
                  <CardTitle tag="h2">{item.name}</CardTitle>
                  <CardText>{item.desc}</CardText>
                  <CardTitle tag="h4">
                    <b>{props.price}</b> (On Tiket.com)
                  </CardTitle>
                  <TicketButton />
                  {path !== '/jkt48-theater-7-show-package' && 
                    <Button className="mb-2" color="success" onClick={() => setSection('member')}>
                      Lihat Line Up Member
                    </Button>
                  }
                </>
              }
              {props.children}
            </Card>
          </Col>
        ))
      ) : (
        <Col className="mb-3" sm="6">
          <Card body inverse color="info">
            { loading ? <Loading /> :
              <>
                <CardTitle tag="h4">
                  Daftar Member Team {name} yang akan tampil
                </CardTitle>
                <Lineup />
                <Button className="btn-full" color="danger" onClick={() => setSection('description')}>
                  Lihat Deskripsi
                </Button>
              </>
            }
          </Card>
        </Col>
      )}
    </>
  )
}

export default CardTicket;
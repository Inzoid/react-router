import React, { useState, useEffect } from 'react';
import { Card, Button, CardTitle, CardText, UncontrolledCarousel } from 'reactstrap';

//component
import '../team/Team.css';
import Loading from '../menu/Loading';

//store
import Team from '../../store/Team';
import Members from '../../store/Member';
import Carousels from '../../store/Carousel';
import Schedules from '../../store/Schedule';

function CardTicket(props) {
  const [section, setSection] = useState('description');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [section])
  
  let name = '';
  let team = '';
  let member = '';
  let schedule = '';
  let banner = '';
  const month = 'DECEMBER';
  let path = window.location.pathname;

  const All = Team;
  const Team_J = Team.slice(0, 1);
  const Team_K = Team.slice(1, 2);
  const Team_T = Team.slice(2, 3);
  const Academy = Team.slice(3, 4);

  const Member_J = Members[0].Team_J;
  const Member_K = Members[1].Team_K;
  const Member_T = Members[2].Team_T;
  const Member_A = Members[3].Academy;

  const Banner_J = Carousels.TEAM_J;
  const Banner_K = Carousels.TEAM_K;
  const Banner_T = Carousels.TEAM_T;
  const Banner_A = Carousels.ACADEMY;

  const Schedule_J = Schedules.TEAM_J[month];
  const Schedule_K = Schedules.TEAM_K[month];
  const Schedule_T = Schedules.TEAM_T[month];
  const Schedule_A = Schedules.ACADEMY[month];

  switch(path) {
    case '/team-j':
      name = 'J'
      team = Team_J
      member = Member_J
      banner = Banner_J
      schedule = Schedule_J
      break
    case '/team-k':
      name = 'KIII'
      team = Team_K
      member = Member_K
      banner = Banner_K
      schedule = Schedule_K
      break
    case '/team-t':
      name = 'T'
      team = Team_T
      member = Member_T
      banner = Banner_T
      schedule = Schedule_T
      break
    case '/academy-class-a':
      name = 'Academy Class A'
      team = Academy
      member = Member_A
      banner = Banner_A
      schedule = Schedule_A
      break
    default: 
      team = All
      member = Member_J
      banner = Banner_J
      schedule = Schedule_J
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
    <div>
      {section == 'description' ? (
        team.map((item, idx) => (
          <div key={idx}>
            <UncontrolledCarousel items={banner} />
            <Card body inverse color={item.color} className="mb-3">
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
          </div>
        ))
      ) : (
        <Card body inverse color="info">
          { loading ? <Loading /> :
            <div>
              <CardTitle tag="h4">
                Daftar Member Team {name} yang akan tampil
              </CardTitle>
              <Lineup />
              <Button className="btn-full" color="danger" onClick={() => setSection('description')}>
                Lihat Deskripsi
              </Button>
            </div>
          }
        </Card>
      )}
    </div>
  )
}

export default CardTicket;
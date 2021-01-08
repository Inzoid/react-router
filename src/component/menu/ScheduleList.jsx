import React from 'react';
import { CardText } from 'reactstrap';
import Schedules from '../../store/Schedule';
import Packages from './Packages';

export default function Schedule(props) {
  let team = '';
  const setlist = props.setlist;
  const path = window.location.pathname;
  
  const J = Schedules.TEAM_J;
  const K = Schedules.TEAM_K;
  const T = Schedules.TEAM_T;
  const A = Schedules.ACADEMY;

  switch(path) {
    case '/team-j': team = J; break
    case '/team-k': team = K; break
    case '/team-t': team = T; break;
    case '/academy-class-a': team = A; break
    default: team = J; break
  }

  return (
    path === '/jkt48-theater-7-show-package' ? (
      <CardText className="schedule">
        <Packages />
      </CardText>
    ) : (
      team.map((item, idx) => (
        <CardText className="schedule" key={idx}>
         {setlist} <b>({item.day}, {item.date} {item.time}) ({item.info})</b> 
        </CardText>
      ))
    )
  )
}

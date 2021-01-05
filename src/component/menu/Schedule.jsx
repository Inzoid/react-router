import React from 'react';
import { CardText } from 'reactstrap';
import Schedules from '../../store/Schedule';

export default function Schedule(props) {
  let team = '';
  const setlist = props.setlist;
  const path = window.location.pathname;
  
  const month = 'JANUARY';
  const week = 'WEEK_1';
  const J = Schedules.TEAM_J[month][week];
  const K = Schedules.TEAM_K[month][week];
  const T = Schedules.TEAM_T[month][week];
  const A = Schedules.ACADEMY[month][week];

  switch(path) {
    case '/team-j':
      team = J
      break
    case '/team-k':
      team = K
      break
    case '/team-t':
      team = T
      break;
    case '/academy-class-a':
      team = A
      break
    default: 
      team = J
    break
  }

  return (
    team.map((item, idx) => (
      <CardText className="schedule" key={idx}>
       {setlist} <b>({item.day}, {item.date} {item.time})({item.info})</b> 
      </CardText>
    ))
  )
}

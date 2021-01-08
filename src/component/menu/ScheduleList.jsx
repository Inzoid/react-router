import React from 'react';
import { Table } from 'reactstrap';
import Schedules from '../../store/Schedule';
import Packages from './Packages';

export default function Schedule() {
  let team = '';
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
      <Packages />
    ) : (
      <Table>
        <thead>
          <tr style={{backgroundColor: 'teal', color: 'white'}}>
            <th>Tanggal</th>
            <th>Jam</th>
            <th className="text-center">Show</th>
          </tr>
        </thead>
        {team.map((item, idx) => (
          <tbody >
            <tr key={idx}>
              <td>{item.day}, {item.date}</td>
              <td><b>{item.time}</b></td>
              <td className="text-center"><b>{item.info}</b></td>
            </tr>
          </tbody>
        ))}
      </Table>
    )
  )
}
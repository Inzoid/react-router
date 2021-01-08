import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';

import Show from '../../store/ShowPackages';
import FilterTeam from '../../store/Schedule';
import PulseLoader from "react-spinners/PulseLoader";

export default function Packages() {
  const [filter, setFilter] = useState('team');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [filter])

  const Loading = () => {
    return (
      <PulseLoader
        size={12}
        color={"teal"}
        loading={loading}
      />
    )
  }

  const SETLIST_J = 'Idol No Yoake';
  const SETLIST_K = 'Ramune no Nomikata';
  const SETLIST_T = 'Fly Team T';
  const SETLIST_A = 'Pajama Drive';

  const Thead = () => (
    <thead>
      <tr style={{backgroundColor: '#343a40', color: 'white'}}>
        <th>Setlist</th>
        <th>Tanggal</th>
        <th>Jam</th>
      </tr>
    </thead>
  )

  return (
    <>
      <div>
        <Button
          className="setlist-btn"
          onClick={() => setFilter('team')}
          style={{ backgroundColor: 'teal', marginBottom: '15px' }}
        >
          Filter Team
        </Button>
        <Button
          className="setlist-btn"
          onClick={() => setFilter('week')}
          color="danger"
          style={{ marginBottom: '15px' }}
        >
          Filter Week
        </Button>
      </div>

      {filter === 'week' ? (
        <>
          {loading ? <Loading /> :
            <Table>
              <thead>
                <tr style={{backgroundColor: '#343a40', color: 'white'}}>
                  <th>Setlist & Team</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              {Show.map((item, idx) => (
                <tbody>
                  <tr key={idx}>
                    <td >{item.name}</td>
                    <td>{item.date}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          }
        </>
      ) : (
        <>
          {loading ? <Loading /> :
            <>
              <h5>Team J :</h5>
              <Table>
                <Thead />
                {FilterTeam.TEAM_J.map((item, idx) => (
                  <tbody >
                    <tr key={idx}>
                      <th scope="row">{SETLIST_J}</th>
                      <td>{item.day}, {item.date}</td>
                      <td><b>{item.time}</b></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <hr />
              
              <h5>Team KIII</h5>
              <Table>
                <Thead />
                {FilterTeam.TEAM_K.map((item, idx) => (
                  <tbody >
                    <tr key={idx}>
                      <th scope="row">{SETLIST_K}</th>
                      <td>{item.day}, {item.date}</td>
                      <td><b>{item.time}</b></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <hr />

              <h5>Team T</h5>
              <Table>
                <Thead />
                {FilterTeam.TEAM_T.map((item, idx) => (
                  <tbody >
                    <tr key={idx}>
                      <th scope="row">{SETLIST_T}</th>
                      <td>{item.day}, {item.date}</td>
                      <td><b>{item.time}</b></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <hr />

              <h5>Academy Class A</h5>
              <Table>
                <Thead />
                {FilterTeam.ACADEMY.map((item, idx) => (
                  <tbody >
                    <tr key={idx}>
                      <th scope="row">{SETLIST_A}</th>
                      <td>{item.day}, {item.date}</td>
                      <td><b>{item.time}</b></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <hr />
            </>
          }
        </>
      )}
    </>
  );
}
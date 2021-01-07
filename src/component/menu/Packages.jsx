import React, { useState, useEffect } from 'react';
import { CardText, Button } from 'reactstrap';

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

  return (
    <>
      <Button
        className="setlist-btn"
        onClick={() => setFilter('team')}
        style={{ backgroundColor: 'teal', marginBottom: '15px' }}
      >
        Filter by Team
      </Button>
      <Button
        className="setlist-btn"
        onClick={() => setFilter('week')}
        color="danger"
        style={{ marginBottom: '15px' }}
      >
        Filter by Week
      </Button>

      {filter === 'week' ? (
        <>
          {loading ? <Loading /> :
            <>
              <h4>By Week:</h4>
              <hr />
              {Show.map((item, idx) => (
                <CardText key={idx}>
                  {item.name} - <b>{item.date}</b>
                </CardText>
              ))}
            </>
          }
        </>
      ) : (
        <>
          {loading ? <Loading /> :
            <>
              <h4>By Team:</h4>
              <hr />
              <h5>Team J</h5>
              {FilterTeam.TEAM_J.map((item, idx) => (
                <CardText key={idx}>
                  {SETLIST_J}{' '}
                  <b>
                    ({item.day}, {item.date} {item.time}) ({item.info})
                  </b>
                </CardText>
              ))}
              <hr />

              <h5>Team KIII</h5>
              {FilterTeam.TEAM_K.map((item, idx) => (
                <CardText key={idx}>
                  {SETLIST_K}{' '}
                  <b>
                    ({item.day}, {item.date} {item.time}) ({item.info})
                  </b>
                </CardText>
              ))}
              <hr />

              <h5>Team T</h5>
              {FilterTeam.TEAM_T.map((item, idx) => (
                <CardText key={idx}>
                  {SETLIST_T}{' '}
                  <b>
                    ({item.day}, {item.date} {item.time}) ({item.info})
                  </b>
                </CardText>
              ))}
              <hr />

              <h5>Academy Class A</h5>
              {FilterTeam.ACADEMY.map((item, idx) => (
                <CardText key={idx}>
                  {SETLIST_A}{' '}
                  <b>
                    ({item.day}, {item.date} {item.time}) ({item.info})
                  </b>
                </CardText>
              ))}
            </>
          }
        </>
      )}
    </>
  );
}
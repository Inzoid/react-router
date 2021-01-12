import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Table } from 'reactstrap';
import axios from 'axios';

import './team/Team.css';
import Stream from '../component/menu/Stream';
import PulseLoader from "react-spinners/PulseLoader";

function Live() {
  const showroom = [
    {
      id: '317750',
      name: 'Julie',
    },
    {
      id: '318229',
      name: 'Jeji',
    }
  ]

  const [url, setUrl] = useState([]);
  const [menu, setMenu] = useState('chat')
  const [roomId, setRoomId] = useState(showroom[1].id);
  const [comment, setComment] = useState([]);
  const [profile , setProfile] = useState();
  const [rank, setRank] = useState([]);
  
  useEffect(() => {
    axios.get(`/streaming_url?room_id=${roomId}`).then(res => {
      const streamUrl = res.data.streaming_url_list
      setUrl(streamUrl)
      setRoomId(roomId)
    })

    axios.get(`/profile?room_id=${roomId}`).then(res => {
      const profiles = res.data
      setProfile(profiles)
      setRoomId(profiles.room_id)
    })

    axios.get(`/comment_log?room_id=${roomId}`).then(res => {
      const comments = res.data.comment_log
      setComment(comments)
    })

    axios.get(`/stage_user_list?room_id=${roomId}`).then(res => {
      const userRank = res.data.stage_user_list
      setRank(userRank)
    })
  }, [url])

  const List = () => (
    <>
      <Row>
        <Col>
        {showroom.map((item, idx) => (
          <Button
            key={idx}
            color="info"
            style={{ marginLeft: '6px' }}
            onClick={() => setRoomId(['317724'])}>
            {item.name}
          </Button>
        ))}
        </Col>
      </Row>
    </>
  )

  const Menu = () => (
    <Row>
      <Col>
        <Button
          color="info"
          style={{ marginLeft: '6px'}}
          onClick={() => setMenu('chat')}>
          Live Chat
        </Button>
        <Button
          color="info"
          style={{ marginLeft: '6px', marginRight: '16px' }}
          onClick={() => setMenu('rank')}>
          Rank
        </Button>
      </Col>
    </Row>
  )

  //Set Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [menu])

  const Loading = () => {
    return (
      <PulseLoader
        size={12}
        color={"teal"}
        loading={loading}
      />
    )
  }

  return (
    <>
      <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
        <Col sm="8" className="mb-3">
          {url.slice(0,1).map((item, idx) => (
            <>
              <Stream key={idx} url ={item.url} />
            </>
          ))}
          {loading ? <Loading /> : 
            profile && 
            <h3>
              {profile.room_url_key}
              <Button 
                style={{ marginLeft: '4px'}} 
                color="danger"
              >
                Views: {profile.view_num}
              </Button>
            </h3>
          }
        </Col>

        <Col sm="4">
          <Menu />
          <Card body outline color="info">
            {menu === 'chat' ? (
              comment && comment.length ?
                comment.slice(0,5).map((item, idx) => (
                  <>
                    <h5 key={idx}>
                      <img width="30" style={{marginRight: '4px'}} src={item.avatar_url} />
                      {item.name}
                    </h5>
                    <p>{item.comment}</p>
                    <hr />
                  </>
                )) : (
                  <Loading />
                )
            ) : (
              loading ? <Loading /> : 
              <Table>
                {rank.map((item, idx) => (
                  <tbody>
                    <tr>
                      <th key={idx} scope="row">{item.order_no}</th>
                      <td><img width="40" src={item.user.avatar_url} /></td>
                      <td>{item.user.name}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Live;
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, CardTitle } from 'reactstrap';
import axios from 'axios';

import './team/Team.css';
import Stream from '../component/menu/Stream';

function Live() {
  const showroom = [
    {
      id: '318219',
      name: 'Dey',
      url: 'https://hls-origin283.showroom-cdn.com/liveedge/ca6470a57db0777823739b55aaaacbce32364fce209b8eddb40960e71a0e7bc5_source/chunklist.m3u8'
    }
  ]

  const [url, setUrl] = useState(showroom[0].url);
  const [roomId, setRoomId] = useState(showroom[0].id);
  const [comment, setComment] = useState([]);
  const [profile , setProfile] = useState();
  
  useEffect(() => {
    axios.get(`/comment_log?room_id=${roomId}`).then(res => {
      const comments = res.data.comment_log
      setComment(comments)
      setRoomId(roomId)
    })
  }, [url])

  useEffect(() => {
    axios.get(`/streaming_url?room_id=${roomId}`).then(res => {
      const streamUrl = res.data.streaming_url_list
      setUrl(streamUrl)
      setRoomId(roomId)
    })
  }, [url])

  useEffect(() => {
    axios.get(`/profile?room_id=${roomId}`).then(res => {
      const profiles = res.data
      setProfile(profiles)
      setRoomId(roomId)
    })
  }, [url])

  const List = () => (
    <>
      {showroom.map((item, idx) => (
        <Button
          key={idx}
          color="info"
          onClick={() => setRoomId(item.id)}
          style={{ marginRight: '6px' }}
          onClick={() => setUrl(item.url)}>
          {item.name}
        </Button>
      ))}
    </>
  )

  return (
    <>
      <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
        <Col sm="8" className="mb-4">
          <Stream url ={showroom[0].url} />
          <List />
        </Col>
        <Col sm="4">
          <Card body color="info">
            <CardTitle style={{color: 'white'}} tag="h5">Live Chat</CardTitle>
          </Card>
          <Card body outline color="info">
            {comment && comment.length ?
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
                <h4>Loading...</h4>
              )
            }
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Live;
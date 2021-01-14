import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Table, CardHeader, CardText } from 'reactstrap';
import axios from 'axios';

import './team/Team.css';
import Stream from '../component/menu/Stream';
import Loading from "./menu/PulseLoader";

function Live() {
  const showroom = [
    {
      id: '317727',
      name: 'Zee',
    },
    {
      id: '318115',
      name: 'Fia'
    },
    {
      id: '318229',
      name: 'Jesslyn'
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
      setRoomId(roomId)
    })

    axios.get(`/stage_user_list?room_id=${roomId}`).then(res => {
      const userRank = res.data.stage_user_list
      setRank(userRank)
      console.log(userRank)
    })
  }, [url])

  const List = () => (
    <>
      <Row>
        <Col>
          <Button
            color="info"
            style={{ marginLeft: '6px' }}
            onClick={() => setRoomId('318115')}>
            Fia
          </Button>
          <Button
            color="info"
            style={{ marginLeft: '6px' }}
            onClick={() => setRoomId('318229')}>
            Jesslyn
          </Button>
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
          onClick={() => setMenu('chat')}
        >
          Live Chat
        </Button>
        <Button
          color="info"
          style={{ marginLeft: '6px'}}
          onClick={() => setMenu('rank')}
        >
          Rank
        </Button>
        <Button
          color="danger"
          style={{ marginLeft: '6px'}}
          onClick={() => setMenu('showroom')}
        >
          Showroom
        </Button>
      </Col>
    </Row>
  )

  const UserProfile = () => (
    <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
      <Col sm="4">
        <img width="280" src={profile.image} />
      </Col>
      <Col sm="8">
        {loading ? <Loading isLoad={loading} /> : 
          <>
            <h3>Showroom is Offline</h3>
            <b>Name:</b> {profile.room_name} <br />
            <b>Follower:</b> {profile.follower_num} <br />
            <b>Room Level: </b>{profile.room_level}
            <CardHeader style={{backgroundColor: '#dc3545', color: 'white', marginTop: '5px'}}>
              Fans Letter
            </CardHeader>
          </>
        }
        <Card body outline color="danger">
          <CardText>
            { profile.recommend_comment_list != null &&
              profile.recommend_comment_list.map((item, idx) => (
                <>
                  <h5 key={idx}>
                    <img width="30" style={{marginRight: '5px'}} src={item.user.image} />
                    {item.user.name}
                  </h5>
                  <p>{item.comment} </p>
                  <hr />
                </>
              ))
            }
          </CardText>
        </Card>
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

  return (
    <>
      <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
        <Col sm="8" className="mb-3">
          {url ? 
            url.slice(0,1).map((item, idx) => (
              <Stream key={idx} url={item.url} />
            ))
          : profile && 
            <UserProfile />
          }
          {loading ? <Loading isLoad={loading} /> : 
            url != null && profile && 
            <Col sm="8">
              <h3>
                {profile.room_url_key}
                <Button 
                  style={{ marginLeft: '4px'}} 
                  color="danger"
                >
                  Views: {profile.view_num}
                </Button>
              </h3>
            </Col>
          }
        </Col>
        <Col sm="4">
          <Menu />
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            {menu === 'chat' ? (
              comment && comment.length ?
                comment.slice(0,10).map((item, idx) => (
                  <>
                    <h5 key={idx}>
                      <img width="30" style={{marginRight: '4px'}} src={item.avatar_url} />
                      {item.name}
                    </h5>
                    <p>{item.comment}</p>
                    <hr />
                  </>
                )) : (
                  <Loading isLoad={loading} />
                )
            ) : menu == 'rank' ? ( 
              loading ? <Loading isLoad={loading} /> : 
              <Table dark>
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
            ) : (
              <List />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Live;
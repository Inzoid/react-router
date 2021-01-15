import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Table, CardHeader, CardText, Input } from 'reactstrap';
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
    },
    {
      id: '318213',
      name: 'Mira'
    },
    {
      id: '317724',
      name: 'Anin'
    },
    {
      id: '318217',
      name: 'Lord Nunu'
    },
    {
      id: '318225',
      name: 'Freya'
    },
    {
      id: '318204',
      name: 'Muthe'
    },
    {
      id: '317726',
      name: 'Yori'
    },
    {
      id: '318251',
      name: 'Ara'
    },
  ]

  const darkTable = {backgroundColor: '#333', borderColor: '#333', color: 'white'}
  const lightTable = {backgroundColor: '#0000'}

  const [url, setUrl] = useState([]);
  const [menu, setMenu] = useState('showroom')
  const [roomId, setRoomId] = useState(showroom[1].id);
  const [comment, setComment] = useState([]);
  const [profile, setProfile] = useState();
  const [rank, setRank] = useState([]);
  const [theme, setTheme] = useState(lightTable)

  useEffect(() => {
    axios.get(`/streaming_url?room_id=${roomId}`).then(res => {
      const streamUrl = res.data.streaming_url_list
      setUrl(streamUrl)
    })

    axios.get(`/profile?room_id=${roomId}`).then(res => {
      const profiles = res.data
      setProfile(profiles)
    })

    axios.get(`/comment_log?room_id=${roomId}`).then(res => {
      const comments = res.data.comment_log
      setComment(comments)
    })

    axios.get(`/stage_user_list?room_id=${roomId}`).then(res => {
      const userRank = res.data.stage_user_list
      setRank(userRank)
    })
  }, [url, roomId])

  const List = () => (
    <>
      <Row>
        <Col>
          <Table>
            <thead style={{backgroundColor: 'teal', color: 'white'}}>
              <tr>
                <th colSpan="2">Daftar Showroom Member JKT48 </th>
              </tr>
            </thead>
            {showroom.map((item, idx) => (
              <tbody style={theme}>
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      key={idx}
                      color="info"
                      onClick={() => setRoomId([item.id])}>
                      See Room
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </>
  )

  const switchTheme = () => {
    theme === darkTable ? setTheme(lightTable) : setTheme(darkTable)
  }

  const Menu = () => (
    <Row>
      <Col>
        {url != null && (
          <>
            <Button
              color="info"
              style={{ marginLeft: '6px' }}
              onClick={() => setMenu('chat')}
            >
              Live Chat
            </Button>
            <Button
              color="info"
              style={{ marginLeft: '6px' }}
              onClick={() => setMenu('rank')}
            >
              Rank
            </Button>
          </>
        )}
        <Button
          color="danger"
          style={{ marginLeft: '6px' }}
          onClick={() => setMenu('showroom')}
        >
          Showroom
        </Button>
        <Button
          style={{ marginLeft: '6px' }}
          onClick={() => setTheme(darkTable)}
        >
          Dark Theme
        </Button>
        <Button
          style={{ marginLeft: '6px' }}
          onClick={() => setTheme(lightTable)}
        >
          Light Theme
        </Button>
      </Col>
    </Row>
  )

  const getDescription = () => {
    let bio = profile.description
    let description = bio.replace('\n', '<br />')
    return bio
  }

  const UserProfile = () => (
    <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
      {profile &&
        <>
          <Col sm="4">
            <img width="300" src={profile.image} />
            <CardHeader style={{ backgroundColor: '#dc3545', color: 'white', marginTop: '15px' }}>
              Biodata
          </CardHeader>
            <Card style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }} body outline color="danger">
              <CardText>
                <b>Name:</b> {profile.room_name} <br />
                <b>Follower:</b> {profile.follower_num} <br />
                <b>Room Level: </b>{profile.room_level}
              </CardText>
            </Card>
          </Col>
          <Col sm="8">
            <h3 className="mt-3">Showroom is Offline</h3>
            {loading ? <Loading isLoad={loading} /> :
              <>
                {/* <h3>Showroom is Offline</h3>
              <b>Name:</b> {profile.room_name} <br />
              <b>Follower:</b> {profile.follower_num} <br />
              <b>Room Level: </b>{profile.room_level} */}
                <CardHeader style={{ backgroundColor: '#dc3545', color: 'white', marginTop: '15px' }}>
                  Fans Letter
              </CardHeader>
              </>
            }
            <Card style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }} body outline color="danger">
              <CardText>
                {profile.recommend_comment_list != null &&
                  profile.recommend_comment_list.map((item, idx) => (
                    <>
                      <h5 key={idx}>
                        <img width="30" style={{ marginRight: '5px' }} src={item.user.image} />
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
        </>
      }
    </Row>
  )

  //Set Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [menu, profile])

  return (
    <>
      <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
        <Col sm="8" className="mb-3">
          {url ?
            url.slice(0, 1).map((item, idx) => (
              <>
                <Stream key={idx} url={item.url} />
              </>
            ))
            : profile &&
              loading ? <Loading isLoad={loading} /> :
              <UserProfile />
          }
          {
            url != null && profile &&
            <Col sm="8">
              <h3>
                {profile.room_url_key}
                <Button
                  style={{ marginLeft: '4px', paddingTop: '5px' }}
                  color="primary"
                >
                  <img src="https://www.flaticon.com/svg/vstatic/svg/20/20079.svg?token=exp=1610707671~hmac=d9060d36240549cf1e511b8dab206899"
                    width="18"
                    className="mb-1 mr-1"
                  /> {profile.view_num}
                </Button>
              </h3>
            </Col>
          }
          {rank != null && rank.length ?
            rank.slice(0, 17).map((item, idx) => (
              <>
                <img width="50" style={{ marginRight: '4px' }} src={item.user.avatar_url} />
              </>
            )) : url != null && (
              <h4>Loading...</h4>
            )
          }
        </Col>
        <Col sm="4">
          <Menu />
          <Card body outline color="info" style={theme}>
            {menu === 'chat' ? (
              comment && comment.length ?
                comment.slice(0, 100).map((item, idx) => (
                  <>
                    <h5 key={idx}>
                      <img width="30" style={{ marginRight: '4px' }} src={item.avatar_url} />
                      {item.name}
                    </h5>
                    <p>{item.comment}</p>
                    <hr />
                  </>
                )) : (
                  <Loading isLoad={loading} />
                )
            ) : menu == 'rank' ? (
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
            ) : menu == 'showroom' && (
              <List />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Live;
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
      id: '317745',
      name: 'Lala'
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
    {
      id: '317739',
      name: 'Sisca'
    },
    {
      id: '317738',
      name: 'Feni'
    },
    {
      id: '318219',
      name: 'Dey'
    },
  ]

  const darkTable = { backgroundColor: '#333', borderColor: '#333', color: 'white' }
  const lightTable = { backgroundColor: '#0000' }

  const [url, setUrl] = useState([]);
  const [menu, setMenu] = useState('showroom')
  const [roomId, setRoomId] = useState(showroom[0].id);
  const [comment, setComment] = useState([]);
  const [profile, setProfile] = useState();
  const [rank, setRank] = useState([]);
  const [theme, setTheme] = useState(lightTable)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [menu, profile])

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

  const Showroom = () => (
    <>
      <Row>
        <Col>
          <Table dark>
            <thead style={{ backgroundColor: 'teal', color: 'white' }}>
              <tr>
                <th colSpan="2">Daftar Showroom Member JKT48 </th>
              </tr>
            </thead>
            {showroom.map((item, idx) => (
              <tbody key={idx} style={theme}>
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <Button
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

  const Menu = () => (
    <Row>
      <Col>
        {url != null && (
          <>
            <Button
              color="info"
              className="showroom-menu"
              onClick={() => setMenu('chat')}
            >
              Live Chat
            </Button>
            <Button
              color="info"
              className="showroom-menu"
              onClick={() => setMenu('rank')}
            >
              Rank
            </Button>
          </>
        )}
        <Button
          color="danger"
          className="showroom-menu"
          onClick={() => setMenu('showroom')}
        >
          Showroom
        </Button>
        <Button
          className="showroom-menu"
          onClick={() => setTheme(darkTable)}
        >
          Dark
        </Button>
        <Button
          style={{ marginLeft: '6px' }}
          onClick={() => setTheme(lightTable)}
        >
          Light
        </Button>
      </Col>
    </Row>
  )

  // const getDescription = () => {
  //   let bio = profile.description
  //   let description = bio.replace('\n', '<br />')
  //   return bio
  // }

  const UserProfile = () => (
    <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
      {profile &&
        <>
          <Col sm="4">
            <img width="280" src={profile.image} />
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
              <CardHeader style={{ backgroundColor: '#dc3545', color: 'white', marginTop: '15px' }}>
                Fans Letter
              </CardHeader>
            }
            <Card style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }} body outline color="danger">
              <CardText>
                {profile.recommend_comment_list != null &&
                  profile.recommend_comment_list.map((item, idx) => (
                    <div key={idx}>
                      <h5>
                        <img width="30" style={{ marginRight: '5px' }} src={item.user.image} />
                        {item.user.name}
                      </h5>
                      <p>{item.comment} </p>
                      <hr />
                    </div>
                  ))
                }
              </CardText>
            </Card>
          </Col>
        </>
      }
    </Row>
  )

  const UserRank = () => (
    rank != null && rank.length ? (
      rank.slice(0, 17).map((item, idx) => (
      <>
        <img key={idx} alt="rank" width="50" style={{ marginRight: '4px' }} src={item.user.avatar_url} />
      </> 
    ))) : url != null && (
      <h4>Loading...</h4>
    )
  )

  return (
    <Row style={{ marginLeft: '3px', marginRight: '3px' }}>
      <Col sm="8">
        {url ?
          url.slice(0, 1).map((item, idx) => (
            <Stream key={idx} url={item.url} />
          )) : profile && (
            loading ? <Loading isLoad={loading} /> :
            <UserProfile />
          )
        }
        {url != null && profile &&
          <Col sm="8">
            <h4 className="mt-1">
              {profile.main_name.slice(0, -8)}
              <Button
                style={{ marginLeft: '4px', paddingTop: '5px' }}
                color="primary"
              >
                <img src="https://pbs.twimg.com/media/Erx2IE1VQAEqdZD?format=png&name=small"
                  width="15"
                  className="mb-1 mr-1"
                /> {profile.view_num}
              </Button>
            </h4>
          </Col>
        }
        <UserRank />
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
            <Table dark>
              {rank.map((item, idx) => (
                <tbody key={idx} >
                  <tr>
                    <th scope="row">{item.order_no}</th>
                    <td><img width="40" src={item.user.avatar_url} /></td>
                    <td>{item.user.name}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          ) : menu == 'showroom' && (
            <Showroom />
          )}
        </Card>
      </Col>
    </Row>
  );
}

export default Live;
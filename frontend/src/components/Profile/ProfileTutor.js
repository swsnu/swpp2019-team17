import React, { Component } from 'react';
import image from './image.png';
import './ProfileTutor.css';
import Header from '../Header/header';

// bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

class ProfileTutor extends Component {
  state = {
    name: 'Gildong Hong',
    username: 'tutoring',
    photo: '',
    schedule: '',
    age: '23',
    subject: 'Math',
    gender: 'Male',
    phonenumber: '010-1234-5678',
    address: '관악로 25길 11, 402호',
    certificate: null,
    //dummy data
    //실제에서는 id(key값)-> data를 불러와서 setstate
  };

  render() {
    return (
      <Container>
        <Header isLoggedIn={true} />
        <Row>
          <Col xs={2}>
          </Col>
          <Col>
            <Jumbotron>
              <div className="profiletutor">
                <img src={image} className="photo" />
              </div>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <div className="button-list">
              <ButtonGroup vertical>
                <Button type="button">Edit Profile</Button>
                <Button type="button">Tutoring</Button>
                <Button type="button" variant="danger">Delete Account</Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col>
            <Jumbotron>
              <h1>
                Name:{this.state.name}
              </h1>
              <h2>
                ID:{this.state.username}
              </h2>
              <h2>
                Age:{this.state.age}
              </h2>
              <h2>
                Subject:{this.state.subject}
              </h2>
              <h2>
                gender:{this.state.gender}
              </h2>
              <h3>
                phonenumber:{this.state.phonenumber}
              </h3>
              <h3>
                address:{this.state.address}
              </h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}
//싹다 dummy data입니다
export default ProfileTutor;
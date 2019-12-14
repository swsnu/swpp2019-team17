import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../../../redux/profile';
import image from '../image.png';
import './ProfileTutor.css';
import Header from '../../Header/header';
import Navbar from "../../Navbar";
import Footer from "../../Footer";
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

  componentDidMount() {
    this.props.getTutor();
  }

  render() {
    let tutor = {
      name: "Hong Gil Dong",
      age: 23,
      subject: "Math",
      gender: "Male",
      phone: "010-1234-5678",
      university: null,
    };
  
    if (this.props.loadedTutor !== null) {
      tutor = this.props.loadedTutor;
    }

    return (
      <>
      <Container>
        <Header isLoggedIn={true} />
        <Row>
          <Col xs={2}>
          </Col>
          <Col>
            <Jumbotron>
              <div className="profiletutor">
                <img src={image} className="photo" />
                <h2>
                  ID:{this.state.username}
                </h2>
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
                Name:{tutor.name}
              </h1>
              <h2>
                Age:{tutor.age}
              </h2>
              <h2>
                Subject:{tutor.subject}
              </h2>
              <h2>
                gender:{tutor.gender}
              </h2>
              <h3>
                phonenumber:{tutor.phone}
              </h3>
              <h3>
                address:{tutor.address}
              </h3>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
      loadedTutor: state.pro.tutor,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTutor: () => {
      dispatch(actionCreators.getTutor())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTutor);

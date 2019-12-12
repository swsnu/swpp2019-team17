import React, { Component } from 'react';
import { connect } from 'react-redux';

import image2 from '../image2.png';
import Header from '../../Header/header';

import TuteeChildListComponent from './TuteeChildListComponent';
import actionCreators from '../../../redux/profile';

// bootstrap
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

class ProfileTutee extends Component {
    state = {
    };

    
    componentDidMount() {
      // 
      this.props.getTutee();
    }
    
    render() {

      onClickMatching = (childID) => {

      }

      let tutee_manager = null;
      
      if (this.state.loadedTutee !== null) {
        // 중요하니깐 한글로 씁니다. 여기에 loadedTutee가 받아져요!!
        // 앞으로 DB를 쓸 거면 얘 형식이 어떻게 될지 알아야합니다
        tutee_manager = this.state.loadedTutee;
      }

      let children = <TuteeChildListComponent onClickMatching={() => this.onClickMatching(0)}/>;

      if (this.state.loadedChildren.length() !== 0) {
        // In here, we map the information from redux
        // 여기도 component에 적절한 값 넣어줘야해요
        children = loadedChildren.map(() => (
          <TuteeChildListComponent/>
        ))
      }

      return (
        <Container>
          <Header isLoggedIn={true} />
          <Row>
            <Col xs={2}>
            </Col>
            <Col>
              <Jumbotron>
                <div className="profiletutor">
                  <img src={image2} className="photo" />
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
                  Name: Name
                </h1>
                <h2>
                  ID: 
                </h2>
                <h2>
                  Age:
                </h2>
                <h2>
                  Subject:
                </h2>
                <h2>
                  gender:
                </h2>
                <h3>
                  phonenumber:
                </h3>
                <h3>
                  address:
                </h3>
              </Jumbotron>
            </Col>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
      );
  }
}

const mapStateToProps = state => {
    return {
        loadedTutee: state.pro.tutee_manager,
        loadedChildren: state.pro.children
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getTutee: () => dispatch(actionCreators.getTuteeManager()),
      sendChildID: (id) => dispatch(actionCreators.sendChildID(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTutee);

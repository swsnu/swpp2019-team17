import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/match';

import MatchedTutor from './MatchedTutor';

import './Match.css'
import Header from '../Header/header'
import profile1 from '../Profile/image.png'
import profile2 from '../Profile/image2.png'

// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';


class Match extends Component {
    state = {
        gender: 3,
        subject: 31,
        age: -1
    };
    
    componentDidMount() {
      this.props.getTutors(3, 31);
    }

    onChangeSubject = (e) => {
        switch (e.target.className) {
            case "Korean":
                this.setState({subject: this.state.subject ^ 1});
                break;
            case "English":
                this.setState({subject: this.state.subject ^ 2});
                break;
            case "Math":
                this.setState({subject: this.state.subject ^ 4});
                break;
            case "Social":
                this.setState({subject: this.state.subject ^ 8});
            case "Science":
                this.setState({subject: this.state.subject ^ 16});
        }

        this.props.getTutors(this.state.gender, this.state.subject);
    }

    onChangeGender = (e) => {
        switch (e.target.className) {
            case "Male":
                this.setState({gender: this.state.gender ^ 1});
                break;
            case "Female":
                this.setState({gender: this.state.gender ^ 2});
                break;
            default:
                console.log("Something went wrong on onChangeGender!!");
        }

        this.props.getTutors(this.state.gender, this.state.subject, this.state.age);
    }

    onChangeAge = (e) => {
        if (e.target.value.toString().length != 2) {
            return;
        }

        this.props.getTutors
    }
    
    render() {
        let tutors = this.props.loadedTutor;

        let jsxitems = null;

        if (tutors.length !== 0) {
            jsxitems = tutors.map((tutor) => 
                <MatchedTutor proflie={tutor.profile} gender={tutor.gender} subject={tutor.subject} />
            )
        }

        return (
            <div className="matching">
                <Header isLoggedIn={true} />
                <Jumbotron id="jumbo">
                    <Container id="condition">
                        <Row>
                            <Col>
                                <legend>Gender</legend>
                            </Col>
                            <Col>
                                <legend>Subject</legend>
                            </Col>
                            <Col>
                                <legend>Age</legend>
                            </Col>
                        </Row>
                        <Row>
                            <Col id="query-item">
                                <Row>
                                    <Form.Check type='checkbox' className="Male"
                                        defaultChecked='true' onClick={(event) => {this.onChangeGender(event)}} /> Male
                                </Row>
                                <Row>
                                    <Form.Check type='checkbox' className="Female"
                                        defaultChecked='true' onClick={(event) => {this.onChangeGender(event)}} /> Female
                                </Row>
                            </Col>
                            <Col id="query-item">
                                <Row>
                                    <Form.Check type="checkbox" className="Korean"
                                    defaultChecked='true' onClick={(event) => {this.onChangeSubject(event)}}/> Korean (0)
                                </Row>
                                <Row>
                                    <Form.Check type="checkbox" className="English"
                                    defaultChecked='true' onClick={(event) => {this.onChangeSubject(event)}}/> English (0) 
                                </Row>
                                <Row>
                                    <Form.Check type="checkbox" defaultChecked='true' className="Math"
                                        onChange={(event) => {this.onChangeSubject(event)}}/> Math () 
                                </Row>
                                <Row>
                                    <Form.Check type="checkbox" className="Social"
                                    defaultChecked='true' onChange={(event) => {this.onChangeSubject(event)}}/> Social Study (0) 
                                </Row>
                                <Row>
                                    <Form.Check type="checkbox" defaultChecked='true' className="Science"
                                        onChange={(event) => {this.onChangeSubject(event)}}/> Science ()
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Form.Control type="text" placeholder="Type age here" onChange={ (event)=> {this.onChangeAge(event)} }/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <div className="result">
                    {jsxitems};
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loadedTutor: state.mat.tutors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTutors: (gender, subject) => dispatch(actionCreators.getTutor(gender, subject))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Match));
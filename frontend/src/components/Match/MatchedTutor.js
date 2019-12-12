import React from 'react';

// bootstrap
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

function MatchedTutor(props) {
  return (
    <Media className="border-bottom border-dark">
      <img
        width={64}
        height={64}
        src={props.profile}
        alt="Profile photo"
        rounded
      />
      <Media.Body>
        <Container>
          <Row>
            <Col>
              <p><b>{props.name}</b></p>
              <p>{props.gender}</p>
            </Col>
            <Col>
              <p>{props.subject}</p>
            </Col>
            <Col>
            {/* 데모 때는 스케쥴을 둘만 넣었는데 어떻게 넣을지 고려해봐야겠네요 
              <p>{props.available[0]}</p>
              <p>{props.available[1]}</p>
            */}
            </Col>
            <Col>
              <Button>Request</Button>
              <Button>Detail</Button>
            </Col>
          </Row>
        </Container>
      </Media.Body>
    </Media>

  )
}
export default MatchedTutor;

/*
                <div className='matchedtutor'>
                    <div className="information">
                        <p>{props.gender} |
                        <button>Review</button> <button onClick={()=> {alert("Your request has been sent to the tutor")}}>Request</button>
                    </div>
                    <div className="available">
                        <p>{props.available[0]}</p>
                        <p>{props.available[1]}</p>
                    </div>
                </div>
*/
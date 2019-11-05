import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/match';

import MatchedTutor from './MatchedTutor';

class Match extends Component {
    state = {

    };
    
    componentDidMount() {
      this.props.getTutors();
    }
    
    render() {
        let matchresult = this.props.loadedTutor;
        let tutorlistjsx = null;

        if (matchresult.length !== 0) {
            tutorlistjsx = matchresult.map((tutor) => {
                return (<MatchedTutor name={tutor.name} />);
            });
      }

    return (
        <div className="matching">
            <div className="condition">
                <fieldset className="education">
                <legend>education</legend>
                <input type="checkbox" /> SNU
                <input type="checkbox" /> KU
                </fieldset>
            </div>
            <div className="result">
                {tutorlistjsx}
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
        getTutors: () => dispatch(actionCreators.getTutor)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Match));
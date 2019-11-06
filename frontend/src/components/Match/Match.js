import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actionCreators from '../../redux/match';

import MatchedTutor from './MatchedTutor';

import './Match.css'

class Match extends Component {
    state = {
        matchresult: [{gender: 'male', name: 'Cheol-su'}, {gender: 'female', name: 'Young-hee'}],
        male: true,
        female: true
    };
    
    componentDidMount() {
      this.props.getTutors();
      // this.setState({matchresult: this.props.loadedTutor});
      // 테스트를 위해서 꺼둠
    }

    onChangeMan = (ele) => {
        
        this.setState({male: !this.state.male})
    }

    onChangeGirl = (ele) => {
        this.setState({female: !this.state.female})
    }
    
    render() {
        let genderNum =  [0 , 0]

        const MALE = 0;
        const FEMALE = 1;

        let tutorlistjsx = null;

        let temp = this.state.matchresult;

        // matchresult를 받았다면, 이를 불러와서 리스트로 만듭니다
        // 겸사겸사 체크박스에 표시될 값도 표시해줍니다. 
        // 어떻게 해야 업데이트를 할 수 있을지 생각이 안난다
        if (this.state.matchresult.length !== 0) {
        // for temp 
        if (this.state.male) {
            if (this.state.female) {
                temp = [{gender: 'male', name: 'Cheol-su', subject: 'Science'}, {gender: 'female', name: 'Young-hee', subject: 'Math'}]
            }
            else {
                temp = [{gender: 'male', name: 'Cheol-su', subject: 'Science'}];
            }
        }
        else {
            if (this.state.female) {
                temp = [{gender: 'female', name: 'Young-hee', subject: 'Math'}]
            }
            else {
                temp = [];
            }
        }

        tutorlistjsx = temp.map((tutor) => {


            //tutorlistjsx = this.state.matchresult.map((tutor) => {
                /*
                // adding college dictionary
                // 그런데 지금 database에 university가 없음...
                if (!(tutor.university in univdict)) {
                    univdict[tutor.university] = 1;
                }
                else {
                    univdict[tutor.university] = univdict[tutor.university] + 1;
                }*/

                // adding gender to list
                if (tutor.gender === "male") {
                    genderNum[MALE]++;
                }
                else {
                    genderNum[FEMALE]++;
                }

                return (<MatchedTutor name={tutor.name} gender={tutor.gender} subject={tutor.subject}/>);
            });
        }

        let genderswitch = 
            <fieldset className="genderswitch-div">
                <legend>gender</legend>
                <div className="male"><input type='checkbox'
                    defaultChecked='true' onClick={(event) => {this.onChangeMan(event)}} /> male ({genderNum[MALE]})</div>
                <div className="female"><input type='checkbox'
                    defaultChecked='true' onClick={(event) => {this.onChangeGirl(event)}} /> female ({genderNum[FEMALE]})</div>
            </fieldset>

        return (
            <div className="matching">
                <div className="condition">
                    {genderswitch}
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
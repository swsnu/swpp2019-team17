import React, { Component } from 'react';
import image from './image.png';
import './ProfileTutor.css';

class ProfileTutor extends Component {
    state = {
      name: 'Gildong Hong',
      username:'tutoring',
      photo:'',
      age:'23',
      subject:'Math',
      gender:'Male',
      phonenumber:'010-1234-5678',
      address:'관악로 25길 11, 402호',
      certificate: null,
    };
    
    render() {
      return (
        <div className="profiletutor">
            <img src={image} className="photo"/>
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
            <br/>
            <br/>
            <br/>
                <div className="button-list">
                    <button type="button">Edit Profile</button><br/>
                    <button type="button">Tutoring</button><br/>
                    <button type="button">Withdrawal</button><br/>
                </div>
        </div>
      );
    }
  }
  
  export default ProfileTutor;
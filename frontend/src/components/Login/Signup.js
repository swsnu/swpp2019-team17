import React from 'react';
import Popup from 'reactjs-popup';

const Signup = () => (
  <Popup
    trigger={<button className="signup" type="button">Signup</button>}
    modal
    closeOnDocumentClick
  >
    <div className="header">Sign up</div>
    <div className="content">Are you a tutee, or a tutor?</div>
    <button type="button">Tutor</button>
    <button type="button">Tutee</button>
  </Popup>
);
export default Signup;

import React, { Component } from 'react';

class Match extends Component {
  state = {

  };

  render() {
      let matchresult = null;

      return (
          <div className="matching">
              <div className="condition">
                  <fieldset className="education">
                    <input type="checkbox" /> SNU
                    <input type="checkbox" /> KU
                  </fieldset>
              </div>
              <div className="result">
                  {matchresult}
              </div>
          </div>
      )
  }
}
export default Match;
import React, { Component } from 'react';
import Header from '../Header/header';

class Main extends Component {
  render(){
    return(
      <div>
        <Header isLoggedIn={false} />
      </div>
    )
  }
}
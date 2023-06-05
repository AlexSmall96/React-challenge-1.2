import React, { Component } from 'react'
import UserMessage from './UserMessage';
import UserData from './UserData';

class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedin: true
      }
    }
  render() {
    return (
      <div>
        <UserData isLoaded={this.state.isLoaded} />
        <UserMessage isLoggedin={this.state.isLoggedin} />


      </div>
    )
  }
}

export default NestingComponents
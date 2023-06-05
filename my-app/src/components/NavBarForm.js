
import React, { Component } from 'react'
import NavBarChild from './NavBarChild'

class NavBarForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           isLoggedIn:true
        }
      };
      handleClick = () => {
        this.setState({
            isLoggedIn: this.state.isLoggedIn === true ? false : true
    })
    }
    render() {
    return (
      <NavBarChild
      isLoggedIn={this.state.isLoggedIn}
      handleClick={this.handleClick}
      />
    )
  }
}

export default NavBarForm
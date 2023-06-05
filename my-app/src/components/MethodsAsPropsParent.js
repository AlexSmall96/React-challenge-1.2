import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild';

export class MethodsAsPropsParent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoggedIn: true,
      }
    }
  
    handleSignIn = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <MethodsAsPropsChild 
        isLoggedIn={this.state.isLoggedIn}
        handleSignIn={this.handleSignIn}
        />
     </div>
    )
  }
}

export default MethodsAsPropsParent
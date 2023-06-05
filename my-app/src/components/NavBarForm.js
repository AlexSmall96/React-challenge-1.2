
import React, { Component } from 'react'

class NavBarForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           isLoggedIn:true
        }
      };
      handleClick = () => {
        this.setState({
            isLoggedIn: this.isLoggedIn === true ? false : true
    })
    }
    render() {
    return (
      <div>
            <h1>My Galllery</h1>{
                this.state.isLoggedIn === false ? (
                    <form>
                        <label htmlFor='username'></label>
                        <input type='text' name='username' id='username'></input>
                        <label htmlFor='password'></label>
                        <input type='text' name='password' id='password'></input>
                        <button onClick={this.handleClick}>Submit</button>
                    </form>
                ) : (
                    <button onClick={this.handleClick}>Logout</button>
                ) 
            }   
      </div>
    )
  }
}

export default NavBarForm
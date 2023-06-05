import React from 'react'

function NavBarChild(props) {
  return (
        <div>
            <h1>My Galllery</h1>{
                props.isLoggedIn === false ? (
                    <form>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' id='username'></input>
                        <label htmlFor='password'>Password</label>
                        <input type='text' name='password' id='password'></input>
                        <button onClick={props.handleClick}>Submit</button>
                    </form>
                ) : (
                    <button onClick={props.handleClick}>Logout</button>
                ) 
            }   
      </div>
  )
}

export default NavBarChild;
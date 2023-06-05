import React from "react";
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message:'Hello, guest!',
            buttonText: 'Login',
            count: 0
        };
    }

    handleClick(){
            this.setState({
                message: this.state.message === 'Hello, guest!' ? 'Welcome back user!' : 'Hello, guest!',
                buttonText: this.state.buttonText === 'Login' ? 'Logout' : 'Login'
            }, () => {
                console.log(this.state.message)
                console.log(this.state.buttonText)
            })
        }

    increment(){
        this.setState({
            count: this.state.count + 1
        });
    };

    render(){
        return(
            <div className={css.NavBar}> 
                <h1>My Gallery</h1>
                <span>{this.state.message}
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                    <button onClick={() => this.increment()}>{this.state.count}</button>
                </span>
            </div>
        )
    }
}


export default NavBarSimple;
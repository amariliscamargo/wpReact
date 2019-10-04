import React from 'react';
import Navbar from './Navbar';

class Login extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            username: '',
            password:'',
            userNiceName:'',
            userEmail: '',
            loggedIn: false,
            loading: false,
            error:''

        };
    }
    render(){
        return(
            <div>
                <Navbar/>
                <form onSubmit={this.onFormSubmit}></form>
            </div>
        );
    }
}

export default Login;
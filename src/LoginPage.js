import React, { Component } from 'react'
import request from 'superagent';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    submitHandle = async(e) => {
        e.preventDefault();

        const token = await request.post(`https://peaceful-anchorage-51064.herokuapp.com/auth/signin`, this.state)
        console.log(token)
        this.props.tokenChange(token.body.token);
    }

  
    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <label>
                        Email
                        <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
                    </label>
                    <label>
                        Password
                        <input onChange={(e) => this.setState({password: e.target.value})}/>
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

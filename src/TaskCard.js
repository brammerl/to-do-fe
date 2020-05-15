import React, { Component } from 'react'
import request from 'superagent'

export default class TaskCard extends Component {

    complete = async (id) => {
            await request.get(`https://peaceful-anchorage-51064.herokuapp.com/api/todo/${id}`).set('Authorization', this.props.token);

            
        }
    
    render() {
        return (
            <li>
                <h2 id={this.props.task}>{this.props.task.task}</h2>
                <button onClick= {() => this.complete(this.props.task.id)}>Finish</button>
            </li>
        )
    }
}


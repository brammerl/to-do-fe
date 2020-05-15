import React, { Component } from 'react'
import request from 'superagent'

import './toDo.css'




export default class TodoPage extends Component {
    state = {
        todo: [],
        token: localStorage.getItem('TOKEN'),
        task: ''
    }
    componentDidMount = async() => {
        const data = await request.get(`https://peaceful-anchorage-51064.herokuapp.com/api/todo`)
        .set('Authorization', this.props.token)

        console.log(data.body);
        this.setState({todo: data.body})
    }

    complete = async (id) => {
        await request.put(`https://peaceful-anchorage-51064.herokuapp.com/api/todo/${id}`).set('Authorization', this.props.token);
        
    }

    strikeThrough = (task) => {
        if(task.compeleted === false) return 'incomplete';
        
        if(task.completed === true) return 'complete';

    }

    submitHandle = async(e) => {
        e.preventDefault();

        const added = await request.post(`https://peaceful-anchorage-51064.herokuapp.com/api/todo`, {
            task: this.state.task
        })
        .set('Authorization', this.props.token)

        console.log(added)

        const Newdata = await request.get(`https://peaceful-anchorage-51064.herokuapp.com/api/todo`)
        .set('Authorization', this.props.token)


        this.setState({todo: Newdata.body})
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.submitHandle}> 
                    <label>Add New Task
                        <input onChange={ (e) => this.setState({task: e.target.value})}/>
                    </label>
                    <button>Submit</button>
                </form>
                <section>
                <ul>
                {
                    this.state.todo.map(task => {
                        return <li>
                            <h2 className={this.strikeThrough(task)}>{task.task}</h2>
                    {task.completed === false && <button onClick={() => this.complete(task.id)} id={task.task}>Complete</button> } 
                        </li>
                    })

                }
                </ul>
                </section>

            </div>
        )
    }
}

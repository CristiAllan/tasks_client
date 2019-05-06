import React, { Component } from 'react';
import List from './list/List';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateTask from './create_tasks/CreateTasks';
import DestroyTasks from './destroy_tasks/DestroyTasks';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.loadTasks = this.loadTasks.bind(this);
  }

  async loadTasks() {
    const url = process.env.REACT_APP_API + '/tasks';
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    const tasks = await response.json();
    this.setState({ tasks: tasks });
  }

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    return (
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className='tasks_list' >
          <p className='title'>To-do</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done !== true)} />
          <CreateTask loadTasks={this.loadTasks} />
        </Col>

        <Col xs={{ span: 8, offset: 2 }} className='tasks_list' >
          <p className='title'>Done</p>
          <List loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done === true)} />
          <DestroyTasks loadTasks={this.loadTasks} />
        </Col>
      </Row>
    );
  }
}

export default Tasks;

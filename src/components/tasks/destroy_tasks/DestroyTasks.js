import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class DestroyTasks extends Component {
  async deleteDoneTasks() {
    if (window.confirm(`Are you sure you want to clean your done tasks?`)) {
      const url = process.env.REACT_APP_API + '/tasks/destroy_done';

      await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      this.props.loadTasks();
    }
  }

  render () {
    return (
      <Button onClick={() => this.deleteDoneTasks()} variant='red' className='float-right remove-tasks-btn'>Remove all tasks</Button>
    );
  }
}

export default DestroyTasks;

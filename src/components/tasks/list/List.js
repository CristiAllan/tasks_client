import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class List extends Component {
  async checkTask(task) {
    const url = `http://localhost:3001/tasks/${task.id}`;

    await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        task: { done: true }
      })
    })

    this.props.loadTasks();
  }

  async deleteTask(task) {
    if (window.confirm(`Are you sure you want to delete: ${task.title}`)) {
      const url = `http://localhost:3001/tasks/${task.id}`;

      await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      this.props.loadTasks();
    }
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Table responsive>
              <tbody>
                { this.props.tasks.map((task, index) => {
                  return <tr key={task.id}>
                    <td className='col-md-10'>{task.title}</td>
                    <td>
                      {
                        task.done === false
                        ? <a className='check' href='#' onClick={() => this.checkTask(task)} >
                            <FontAwesomeIcon icon='check-circle' size='lg' />
                          </a>
                        : null
                      }
                    </td>
                    <td>
                      <a className='delete' href='#' onClick={() => this.deleteTask(task) } >
                        <FontAwesomeIcon icon='trash-alt' size='lg' />
                      </a>
                    </td>
                  </tr>;
                }) }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default List;

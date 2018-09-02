import React, {Component} from 'react';

class TodoList extends Component { 
  
  render() { 
    return ( 
      <div className="todoList"> 
        <div className="header">
          <form> 
            <input placeholder="Add task"> 
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    ); 
  }
}

export default TodoList; 
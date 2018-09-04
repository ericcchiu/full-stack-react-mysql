import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '', 
      items: []
    }
    this.updateData = this.updateData.bind(this);

  }

  componentDidMount() {
    this.updateData();
    
  }

  updateData() { 
    $.ajax({
      url: '/api/url', 
      type: "GET",
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleChange(event) { 
    this.setState({ 
      value: event.target.value
    }
   );
  }

  handleSubmit(event) { 
    console.log('This is our submitted value', this.state.value);
    event.preventDefault();
    // POST request to /api/url route 
    $.ajax({
      url: '/api/url', 
      type: "POST",
      data: {url: this.state.value},
      success: () => {
       this.updateData();
      },
      dataType: 'json',
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  
  render () {
    return (<div>
      <h1>Eric App</h1>
      <List items={ this.state.items }/>


      <form onSubmit={ this.handleSubmit.bind(this) }>
        <label>
          New URL:
          <input type="text" 
            value={ this.state.value } 
            onChange={ this.handleChange.bind(this) }
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>


      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '', 
      items: [],
      selected: ''
    }
    this.updateData = this.updateData.bind(this);
    this.handleSelect = this.handleSelect.bind(this); 

  }

  componentDidMount() {
    this.updateData();
    
  }

  updateData() { 
    $.ajax({
      url: '/api/url', 
      type: "GET",
      success: (data) => {
        console.log('THIS IS OUR DATA', data)
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

  handleSelect(urlClicked) { 
    this.setState({
      selected: urlClicked
    })

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
      <h2>Selected Item:</h2>
      {this.state.selected}
      <List items={ this.state.items } handleSelect={this.handleSelect}/>


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
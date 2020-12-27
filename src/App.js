
import './App.css';
import React, {Component} from 'react' 
import axios from 'axios';
import TodoComponent from './TodoComponent';

class App extends Component {

  constructor (props) {
    super(props);
    this.state= { 
      todos: []
    };

  }
  componentDidMount() {
    console.log("Hello There");
    axios.get(' https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      this.setState({todos:res.data})
    })
  }

  
  
  render () {
    console.log("State:", this.state);
    let items = this.state.todos.map(element => {
      let li = (<TodoComponent userId ={element.userId} id ={element.id} title ={element.title} body = {element.body} />);
        return li;
    })
    console.log ('li', items);    
   
  return (
    <div>
      <ol>
        {items}
      </ol>
      
    </div>
  )
}

}

export default App;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

class App extends Component {

  componentDidMount() {
    console.log(`%c${ 'Greetings! Feel free to take a look :)'}`, // everything after the %c is styled
        `color: green; font-weight: bold; font-size: 2rem;`);
  }

  render() {
    return (<Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </div>
    </Router>);
  }
}

export default App;

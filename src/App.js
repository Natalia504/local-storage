import React, { Component } from 'react';
import Flipper from './components/Flipper';
import TodoList from './components/TodoList';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/flipper' component={Flipper} />
          <Route path='/todoList' component={TodoList} />
        </Switch>
      </div>
    );
  }
}


export default App;



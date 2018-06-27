import React, { Component } from 'react';
import './Flipper.css';
import { Link } from 'react-router-dom'


export default class Flipper extends Component {
  render() {
    return (
      <div className='main-container'>
        <h2>This is a Flipper</h2>
        <section className='container'>
          <div className='flipper'>
            <div className='front'>Front</div>
            <div className='back'>Back</div>
          </div>
        </section>
        <Link to='/todoList'><button type='submit' className='next'>NEXT</button></Link>
      </div>

    )
  }
}

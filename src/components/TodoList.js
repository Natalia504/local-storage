import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TodoList.css';

//To-Do List using localStorage

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            post: [],
            input: ''
        }
    }

    //save input/val as this.state.input
    handleChange(val) {
        this.setState({
            input: val
        })
    }
    //show items as list and save in local storage
    handleAdd(input) {
        // 1. set state to localStorage
        var arr = this.state.post;
        var newObj = { "value": input, "complete": false }
        arr.push(newObj)
        localStorage.setItem('arr', JSON.stringify(arr))
        this.setState({
            post: arr
        })
    }


    //delete item
    handleDelete(i) {
        // 2. set state to localStorage after Deleting and every time the state changes
        var result = this.state.post
        result.splice(i, 1)
        localStorage.setItem('arr', JSON.stringify(result))
        this.setState({
            post: result
        })
    }

    // move item up the list
    handleUp(i) {
        var todoList = this.state.post;
        var removed = todoList.splice(i, 1)
        if (i === 0) {
            todoList.push(removed[0])
        } else {
            todoList.splice(i - 1, 0, removed[0])
        }
        localStorage.setItem('todo', JSON.stringify(todoList))
        this.setState({
            post: todoList
        })
    }

    //move item down the list
    handleDown(i) {
        var todoList = this.state.post;
        var removed = todoList.splice(i, 1)
        if (i === todoList.length) {
            todoList.unshift(removed[0])
        } else {
            todoList.splice(i + 1, 0, removed[0])
        }
        localStorage.setItem('todo', JSON.stringify(todoList))
        this.setState({
            post: todoList
        })
    }

    //toggle Complete
    //handleAdd should create an object with two properties and two values 1.value:string 2.completed:boolean
   
    handleComplete(i) {
        var arr = this.state.post;
        arr[i].complete = !arr[i].complete
        localStorage.setItem('arr', JSON.stringify(arr))
        this.setState({
            post: arr
        })

    }

    // 3. take data from local storage and assign it to the state:
    componentWillMount() {
        var arr = JSON.parse(localStorage.getItem('arr')) || [];
        this.setState({
            post: arr
        })
    }
    render() {
        // 4. then map through the state
        let text = this.state.post.map((item, i) => {
            console.log('item', item)
            var className = item.complete ? "complete" : "incomplete"
            return <div key={i}>
                <li className={className}>
                    {item.value}
                    <div className='two-btn'>
                        <button type='button' onClick={() => this.handleUp(i)}>UP</button>
                        <button type='button' onClick={() => this.handleDown(i)}>DOWN</button>
                    </div>
                    <button type='submit' onClick={() => this.handleComplete(i)}>COMPLETE</button>
                    <button type='submit' onClick={() => this.handleDelete(i)}>X</button>
                </li>
            </div>
        })
        return (
            <div className='main-container'>
                <div className='todo-List'>
                    <h2>This is your To-Do List</h2>
                    <p>To-do list is saved in local storage, so you can go back and/or refresh the page, and your list will not disappear.</p>
                    <div className='input-btn'>
                        <input className='input-field' type='text' value={this.state.input} onChange={(e) => this.handleChange(e.target.value)} />
                        <button type='submit' className='add-btn' onClick={() => this.handleAdd(this.state.input)}>ADD</button>
                    </div>
                    <div className='todo'>
                        <ol>{text}</ol>

                    </div>
                    <div className='nav-btn'>
                        <Link to='/flipper'><button type='submit'>Back</button></Link>
                        <Link to='/next component'><button type='submit'>Next</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default TodoList;

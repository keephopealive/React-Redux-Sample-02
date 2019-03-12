import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskNew from './components/TaskNew';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TaskList/>
                <TaskNew/>
            </div>
        );
    }
}

export default App;

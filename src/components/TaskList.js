import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleCompleteTask } from './../redux';

const TaskList = ({tasks, destroyTask, toggleCompleteTask}) => {

    const incompleteTaskList = tasks
    .filter( (task) => !task.completed )
    .map( (task, index) => (
        <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button onClick={ () => { toggleCompleteTask(task.id); }}>Mark Complete</button>
            <button onClick={ () => { destroyTask(task.id); }}>Delete</button>
        </div>
    ));

    const completedTaskList = tasks
    .filter( (task) => task.completed )
    .map( (task, index) => (
        <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button onClick={ () => { toggleCompleteTask(task.id); }}>Mark Complete</button>
            <button onClick={ () => { destroyTask(task.id); }}>Delete</button>
        </div>
    ));

    return (
        <div>
            <h1>TaskList</h1>
            <hr/>
            <h3>Incomplete List</h3>
            {incompleteTaskList}
            <hr/>
            <h3>Complete List</h3>
            {completedTaskList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    destroyTask: (id) => dispatch(deleteTask(id)),
    toggleCompleteTask: (id) => dispatch(toggleCompleteTask(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

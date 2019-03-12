import React, { Component } from 'react';

import { connect } from 'react-redux';
import { deleteTask } from './../redux';

const TaskList = (props) => {
    console.log(props.tasks);
    const taskList = props.tasks.map( (task, index) => (
        <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button onClick={ () => { props.deleteTask(index); }}>Delete</button>
        </div>
    ))

    return (
        <div>
            <h1>TaskList</h1>
            {taskList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks,
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (idx) => dispatch(deleteTask(idx))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);


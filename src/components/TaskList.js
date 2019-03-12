import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from './../redux';

const TaskList = ({tasks, destroyTask}) => {
    // console.log(props)
    const taskList = tasks.map( (task, index) => (
        <div key={index}>
            <h5>{task.title}</h5>
            <h5>{task.completed}</h5>
            <button onClick={ () => { destroyTask(index); }}>Delete</button>
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
    destroyTask: (idx) => dispatch(deleteTask(idx))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

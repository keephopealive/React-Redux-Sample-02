import React from 'react';

import { connect } from 'react-redux';
import { updateNewTaskValue, resetNewTaskValue, createTask } from './../redux';

const TaskNew = ({value, handleChange, handleSubmit, handleReset}) => {
    return (
        <div>
            <input type="text" value={value} onChange={(event) => handleChange(event.target.value)} />
            <button onClick={handleSubmit}>Add Task</button>
            <button onClick={handleReset}>Reset Input</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    value: state.newTaskValue,
})

const mapDispatchToProps = (dispatch) => ({
    handleChange: (value) => dispatch(updateNewTaskValue(value)),
    handleReset: () => dispatch(resetNewTaskValue()),
    handleSubmit: () => dispatch(createTask())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskNew);


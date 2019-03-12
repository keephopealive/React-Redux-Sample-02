import {
    // combineReducers,
    createStore,
} from 'redux';

const initialState = { 
    tasks:[
        { title: 'first task' }, 
        { title: 'second task' },
        { title: 'third task' },
        { title: 'fourth task' },
    ], 
    newTaskValue: "",
};

// ACTIONS -- actions.js
export const createTask = (task) => ({
    type: 'CREATE_TASK',                        // <-- action.type
    task,                                       // <-- action.task
});
export const deleteTask = (idx) => ({
    type: 'DELETE_TASK',                        // <-- action.type
    idx                                         // <-- action.idx
});
export const updateNewTaskValue = (value) => ({
    type: 'UPDATE_NEW_TASK_VALUE',
    value
});
export const resetNewTaskValue = () => ({
    type: 'RESET_NEW_TASK_VALUE',
});
// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        
        case 'RETRIEVE_TASKS':
            return state.tasks;

        case 'CREATE_TASK':
            console.log("@@@@@ state", state)
            console.log("@@@@@ action", action)
            return Object.assign(
                {},
                state,
                { 
                    tasks: [
                        ...state.tasks, 
                        { title: state.newTaskValue }
                    ],
                    newTaskValue: ""
                }
            );

        case 'DELETE_TASK':
            return Object.assign(
                {},
                state,
                {
                    tasks: [
                        ...state.tasks.slice(0, action.idx),
                        ...state.tasks.slice(action.idx+1),
                    ]
                }
            );

        case 'RESET_NEW_TASK_VALUE':
            return Object.assign(
                {},
                state,
                { newTaskValue: "" }
            );

        case 'UPDATE_NEW_TASK_VALUE':
            return Object.assign(
                {},
                state,
                { newTaskValue: action.value }
            );

        default:
            return state;
    }
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
// export const reducers = combineReducers({
//     tasks
// });



// STORE -- store.js
export function configureStore(initialState = initialState) { // initialState = initialState | {}
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();
import {
    // combineReducers,
    createStore,
} from 'redux';



// Initial State
// Minimal representation of the data in the app
let id = 4;
const initialState = {
    tasks: [
        { id: 1, title: 'first task', completed: false },
        { id: 2, title: 'second task', completed: true },
        { id: 3, title: 'third task', completed: true },
        { id: 4, title: 'fourth task', completed: false },
    ],
    newTaskValue: "",
};

// ACTIONS -- actions.js
// Minimal representation of the change to the data
export const createTask = () => ({
    type: 'CREATE_TASK',
});
export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    id
});
export const updateNewTaskValue = (value) => ({
    type: 'UPDATE_NEW_TASK_VALUE',
    value
});
export const resetNewTaskValue = () => ({
    type: 'RESET_NEW_TASK_VALUE',
});
export const toggleCompleteTask = (id) => ({
    type: 'TOGGLE_COMPLETE_TASK',
    id
});


// REDUCERS

// REDUCERS -- task

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETE_TASK':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- taskReducer -- TOGGLE_COMPLETE_TASK | state: ", state)
            console.log(" -- taskReducer -- TOGGLE_COMPLETE_TASK | action", action)
            if (action.id !== state.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
    switch (action.type) {

        case 'RETRIEVE_TASKS':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- reducer -- RETRIEVE_TASKS | state: ", state)
            console.log(" -- reducer -- RETRIEVE_TASKS | action", action)
            return state.tasks;

        case 'CREATE_TASK':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- reducer -- CREATE_TASK | state: ", state)
            console.log(" -- reducer -- CREATE_TASK | action", action)
            id++;
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id, title: state.newTaskValue, completed: false },
                ],
                newTaskValue: "",
            }

        case 'DELETE_TASK':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- reducer -- DELETE_TASK | state: ", state)
            console.log(" -- reducer -- DELETE_TASK | action", action)
            let deleteIndex = state.tasks.findIndex(obj => obj['id'] === action.id);
            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, deleteIndex),
                    ...state.tasks.slice(deleteIndex + 1),
                ],
            };

        case 'RESET_NEW_TASK_VALUE':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- reducer -- RESET_NEW_TASK_VALUE | state: ", state)
            console.log(" -- reducer -- RESET_NEW_TASK_VALUE | action", action)
            return {
                ...state,
                newTaskValue: ""
            }

        case 'UPDATE_NEW_TASK_VALUE':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- reducer -- UPDATE_NEW_TASK_VALUE | state: ", state)
            console.log(" -- reducer -- UPDATE_NEW_TASK_VALUE | action: ", action)
            console.log(" -- reducer -- UPDATE_NEW_TASK_VALUE | action.type: ", action.type)
            console.log(" -- reducer -- UPDATE_NEW_TASK_VALUE | action.value: ", action.value)
            return {
                ...state,
                newTaskValue: action.value,
            }

        case 'TOGGLE_COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => taskReducer(task, action)),
            }

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




















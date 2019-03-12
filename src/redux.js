import {
    combineReducers,
    createStore,
} from 'redux';


// ACTIONS -- actions.js
export const createTask = (task) => ({
    type: 'CREATE_TASK',                        // <-- action.type
    task,                                       // <-- action.task
});

export const deleteTask = (idx) => ({
    type: 'DELETE_TASK',                        // <-- action.type
    idx                                         // <-- action.idx
});



// REDUCERS -- reducers.js
export const tasks = (state = [], action) => {
    switch (action.type) {
        
        case 'RETRIEVE_TASKS':
            return state;

        case 'CREATE_TASK':
            return [
                ...state, 
                {
                    text: action.text,
                    completed: false
                }
            ];

        case 'DELETE_TASK':
            ;
            return Object.assign(
                [
                    ...state.slice(0, action.idx),
                    ...state.slice(action.idx+1),
                ]
            );

        default:
            return state;
    }
};


// INITIAL STATE 
const initialStateSample = { 
    tasks: [{ title: 'first task' }, { title: 'second task' }] 
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
export const reducers = combineReducers({
    tasks,
});



// STORE -- store.js
export function configureStore(initialState = initialStateSample) { // initialState = initialState | {}
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();
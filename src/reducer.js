import { combineReducers } from 'redux'


const todo=(state = ['a', 'b'], action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return [...state, 'c']
        default:
            return state
    }
};


const rootReducer = combineReducers({
    todo
});

export default rootReducer;
import { combineReducers } from 'redux'



const INITIAL_STATE = {
    todo: ['a', 'b'],
}

const todo=(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todo: state.todo.splice(0,action.payload)

            }
        default:
            return state
    }
};


const rootReducer = combineReducers({
    todo
});

export default rootReducer;
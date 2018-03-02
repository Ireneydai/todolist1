

const increment = (text)=> {
    return {
        type: 'INCREMENT_COUNTER',
        payload: text
    }
};

const deleteTodo = (index)=> {
    return {
        type: "DELETE_TODO",
        payload: index
    }
};

module.exports = {
    increment, deleteTodo
};
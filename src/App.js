import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './List.js'
import actions from './actions.js'


class App extends Component{
    render (){
        const {deleteTodo, todo } = this.props;
        console.log(this)
        return(

            <div>
                <List text = {todo} onDelete={index =>deleteTodo(index)}/>
                <input
                ref='input'
                type = 'text'
                placeholder ='(not working)'
                />
                <button onClick={(e) => this.handleClick(e)}>+</button>
                

            </div>
        )
        
    }

    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.increment(text)
        node.value = ''
    }
}


const mapDispatchToProps = (dispatch) => {
    
    return {
        increment: (todo) => {
            dispatch(actions.increment(todo))
        },
        deleteTodo: (index) =>{
            dispatch(actions.deleteTodo(index))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        todo: state.todo,

    }
};




export default connect(mapStateToProps, mapDispatchToProps)(App)    
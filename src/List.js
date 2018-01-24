import React, {Component} from 'react'
import Item from './Item.js'

class List extends Component {
    render() {
        const {increment, todo } = this.props;
    
        return (
            <ul>
                {todo.map((item)=>
                <Item todo={todo} />
                )}
                {/* <input 
                    ref={(input) => { this.textInput = input; }}
                    type='text'   
                    placeholder='(type something)'
                /> */}
                 <button onClick={increment(this.refs.text)}>+</button>
            
            </ul>
        )
    }
}

export default List
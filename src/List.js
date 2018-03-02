import React, { Component } from 'react'
import Item from './Item.js'

class List extends Component {
    render() {
        return (
            <div>
                
                {this.props.text.todo.map((item, index)=>
                <Item todo={item} key = {index} index = {index} onDelete={(index)=>this.props.onDelete(index)}/>
                )}


            </div>
        )
    }
}

export default List;
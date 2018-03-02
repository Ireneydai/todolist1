import React from 'react'

const Item = props => (
    <div>
        {props.todo}
        <button onClick = {()=> props.onDelete(props.index)}>x</button>
    </div>

);

export default Item;
import React from 'react'
import { deleteNode } from '../../db/api'

function DeleteNode() {
    const onSubmit = (e) => {
        e.preventDefault()

        const name = document.getElementById('name').value

        deleteNode({ name })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="name" type="text" placeholder="Enter name" />
            <button onClick={onSubmit} type="submit">Submit</button>
        </div>            
    )
}

export default DeleteNode 

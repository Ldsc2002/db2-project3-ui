import React from 'react'
import { deleteNode, deleteRel } from '../../db/api'

function DeleteNode(props) {
    const { rel } = props

    const onSubmit = (e) => {
        e.preventDefault()

        const name = document.getElementById('name').value

        if (rel) {
            const title = document.getElementById('title').value
            deleteRel(name, title)
        } else {
            deleteNode('user', { name })
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="name" type="text" placeholder="Enter name" />

            {rel && (
                <input id="title" type="text" placeholder="Enter job title" />
            )}

            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}

export default DeleteNode

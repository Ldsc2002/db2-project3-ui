import React from 'react'
import { relBetweenUserAndJob } from '../../db/api'

function AddRel() {
    const onSubmit = (e) => {
        e.preventDefault()

        const name = document.getElementById('name').value
        const title = document.getElementById('title').value

        relBetweenUserAndJob(name, title)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="name" type="text" placeholder="Enter name" />
            <input id="title" type="text" placeholder="Enter job title" />

            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}

export default AddRel

import React from 'react'
import { relBetweenUserAndJob } from '../../db/api'

function AddRel() {
    const onSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const title = document.getElementById('title').value
        const state = document.getElementById('state').value
        const message = document.getElementById('message').value

        relBetweenUserAndJob(email, title, state, message)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="email" type="text" placeholder="Enter email" />
            <input id="title" type="text" placeholder="Enter job title" />
            <input id="state" type="text" placeholder="Enter state" />
            <input id="message" type="text" placeholder="Enter message" />

            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}

export default AddRel

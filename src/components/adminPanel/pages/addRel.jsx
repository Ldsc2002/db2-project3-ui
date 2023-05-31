import React from 'react'
import { relBetweenUserAndJob } from '../../db/api'

function AddRel() {
    const onSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const title = document.getElementById('title').value
        const cv = document.getElementById('CV').value
        const message = document.getElementById('message').value

        relBetweenUserAndJob(email, title, cv, message)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="email" type="text" placeholder="Enter email" />
            <input id="title" type="text" placeholder="Enter job title" />
            <input id="CV" type="text" placeholder="Enter CV link" />
            <input id="message" type="text" placeholder="Enter message" />

            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}

export default AddRel

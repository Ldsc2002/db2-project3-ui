import React from 'react'
import { relBetweenUserAndJob } from '../../db/api'

function AddRel() {
    const onSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const title = document.getElementById('title').value
        const salary = document.getElementById('salary').value
        

        relBetweenUserAndJob(email, title, salary)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="email" type="text" placeholder="Enter email" />
            <input id="title" type="text" placeholder="Enter job title" />
            <input id="salary" type="number" placeholder="Enter desired salary" />

            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}

export default AddRel

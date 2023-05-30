import React from 'react'
import { addNode, updateNode } from '../../db/api'

function AddNode(props) {
    const { update } = props

    const onSubmit = (e) => {
        e.preventDefault()

        const skills = document.getElementById('skills').value.split(',')
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const age = document.getElementById('age')
        const phone = document.getElementById('phone')
        const openToWork = document.getElementById('openToWork').checked

        const data = {
            name: name.value,
            email: email.value,
            age: parseInt(age.value, 10),
            phone: parseInt(phone.value, 10),
            open_to_work: openToWork,
            skills,
        }

        if (update) {
            updateNode('user', data)
        } else {
            addNode('user', data)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input id="name" type="text" placeholder="Enter name" />
            <input id="email" type="text" placeholder="Enter email" />
            <input id="age" type="text" placeholder="Enter age" />
            <input id="phone" type="text" placeholder="Enter phone number" />
            <input id="skills" type="text" placeholder="Enter skills" />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>Open to work: </p>
                <input id="openToWork" type="checkbox" placeholder="Open to work:" />
            </div>

            <button onClick={onSubmit} type="submit">
                Submit
            </button>
        </div>
    )
}

export default AddNode

import React from 'react'
import { addNode, updateNode } from '../../db/api'

function AddNode(props) {
    const { update } = props

    const onSubmit = (e) => {
        e.preventDefault()

        let skills = document.getElementById('skills').value
        const nameFilter = update ? document.getElementById('id').value : ''
        const name = document.getElementById('name')
        const id_user = document.getElementById('id_user')
        const email = document.getElementById('email')
        const age = document.getElementById('age')
        const phone = document.getElementById('phone')
        const openToWork = document.getElementById('openToWork').checked
        const admin = document.getElementById('admin').checked

        skills = skills.includes(',') ? skills.split(',') : [skills]

        const data = {
            name: name.value,
            ID: id_user.value,
            email: email.value,
            age: parseInt(age.value, 10),
            phone: parseInt(phone.value, 10),
            open_to_work: openToWork,
            abilities: skills,
        }

        if (age.value === '') {
            delete data.age
        }

        if (phone.value === '') {
            delete data.phone
        }

        if (skills[0] === '') {
            delete data.abilities
        }

        if (update) {
            // check all fields in data and remove empty ones
            Object.keys(data).forEach((key) => {
                if (data[key] === '') {
                    delete data[key]
                }
            })

            updateNode('user', { name: nameFilter }, data)
        } else {
            addNode('user', data, admin)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {update && (
                <input id="id" type="text" placeholder="Enter name to update" />
            )}
            <input id="name" type="text" placeholder="Enter name" />
            <input id="id_user" type="text" placeholder="Enter ID" />
            <input id="email" type="text" placeholder="Enter email" />
            <input id="age" type="text" placeholder="Enter age" />
            <input id="phone" type="text" placeholder="Enter phone number" />
            <input id="skills" type="text" placeholder="Enter skills" />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>Open to work: </p>
                <input id="openToWork" type="checkbox" placeholder="Open to work:" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>Admin: </p>
                <input id="admin" type="checkbox" placeholder="Admin:" />
            </div>

            <button onClick={onSubmit} type="submit">
                Submit
            </button>
        </div>
    )
}

export default AddNode

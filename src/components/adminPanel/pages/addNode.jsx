import React from 'react'
import { addNode } from '../../db/api'

function AddNode() {
    const onSubmit = (e) => {
        e.preventDefault()

        let skills = document.getElementById('skills').value.split(',')
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let age = document.getElementById('age')
        let phone = document.getElementById('phone')
        let openToWork = document.getElementById('openToWork').checked

        let data = {
            name: name.value,
            email: email.value,
            age: parseInt(age.value),
            phone: parseInt(phone.value),
            open_to_work: openToWork,
            skills: skills,
        }

        console.log(data)

        addNode("user", data)
        
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input id="name" type="text" placeholder="Enter name" />
            <input id="email" type="text" placeholder="Enter email" />
            <input id="age" type="text" placeholder="Enter age" />
            <input id="phone" type="text" placeholder="Enter phone number" />
            <input id="skills" type="text" placeholder="Enter skills" />

            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label htmlFor="openToWork">Open to work</label>
                <input id="openToWork" type="checkbox" placeholder="Open to work:" />
            </div>

            <button onClick={onSubmit}>
                Submit
            </button>
        </div>
    )
}

export default AddNode

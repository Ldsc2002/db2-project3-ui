import React from 'react'
import { deleteProperty, deleteRelProperty } from '../../db/api'

function DeleteProperty(props) {
    const { rel } = props

    const onSubmit = (e) => {
        e.preventDefault()

        if (rel) {
            const name = document.getElementById('name').value
            const job = document.getElementById('job').value
            const appliesTo = document.getElementById('appliesTo').checked

            if (appliesTo) {
                deleteRelProperty(name, job, 'applies_to')
            }
        } else {
            const name = document.getElementById('name').value
            const email = document.getElementById('email').checked
            const phone = document.getElementById('phone').checked
            const age = document.getElementById('age').checked
            const openToWork = document.getElementById('openToWork').checked

            if (email) {
                deleteProperty(name, 'email')
            } else if (phone) {
                deleteProperty(name, 'phone')
            } else if (age) {
                deleteProperty(name, 'age')
            } else if (openToWork) {
                deleteProperty(name, 'open_to_work')
            }
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {rel && (
                <>
                    <input id="name" type="text" placeholder="Name to modify" />
                    <input id="job" type="text" placeholder="Job to modify" />

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>Applies to: </p>
                        <input id="appliesTo" type="checkbox" />
                    </div>
                </>
            )}

            {!rel && (
                <div>
                    <input id="name" type="text" placeholder="Name to modify" />

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>Email</p>
                        <input id="email" type="checkbox" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>Phone</p>
                        <input id="phone" type="checkbox" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>Age</p>
                        <input id="age" type="checkbox" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <p>Open to work: </p>
                        <input id="openToWork" type="checkbox" />
                    </div>
                </div>
            )}

            <button onClick={onSubmit} type="submit">
                Submit
            </button>

        </div>
    )
}

export default DeleteProperty

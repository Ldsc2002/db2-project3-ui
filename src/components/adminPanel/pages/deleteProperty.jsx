import React from 'react'
import { deleteProperty } from '../../db/api'

function DeleteProperty(props) {
    const { rel } = props

    const onSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email').checked
        const phone = document.getElementById('phone').checked
        const age = document.getElementById('age').checked
        const openToWork = document.getElementById('openToWork').checked
        const appliesTo = document.getElementById('appliesTo').checked

        if (rel) {
            if (appliesTo) {
                deleteProperty('rel', 'applies_to')
            }
        } else if (email) {
            deleteProperty('user', 'email')
        } else if (phone) {
            deleteProperty('user', 'phone')
        } else if (age) {
            deleteProperty('user', 'age')
        } else if (openToWork) {
            deleteProperty('user', 'open_to_work')
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {rel && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>Applies to: </p>
                    <input id="appliesTo" type="checkbox" />
                </div>
            )}

            {!rel && (
                <div>
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

import React, { useState } from 'react'
import classes from './AdminPanel.module.css'
import AddNode from './pages/addNode'
import AllNodes from './pages/allNodes'
import AddRel from './pages/addRel'
import DeleteNode from './pages/deleteNode'
import DeleteProperty from './pages/deleteProperty'

const options = [
    "Add node with label 'User'",
    'View all nodes',
    "Update node with label 'User'",
    'Create relationship between user and job',
    "Delete node with label 'User'",
    'Delete relationship between user and job',
    "Delete property from node with label 'User'",
    'Delete property from relationship between user and job',
]

function AdminPanel() {
    const [page, setPage] = useState(options[0])

    return (
        <div className={classes.container}>
            <div className={classes.buttonContainer}>
                {options.map((option) => (
                    <button
                        className={classes.navButton}
                        key={option}
                        type="button"
                        onClick={() => setPage(option)}
                        style={{ outline: `${page === option ? '3px solid black' : 'none'}` }}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className={classes.pageContainer}>
                <h1>{page}</h1>

                {page === options[0] && (<AddNode />)}
                {page === options[1] && (<AllNodes />)}
                {page === options[2] && (<AddNode update />)}
                {page === options[3] && (<AddRel />)}
                {page === options[4] && (<DeleteNode />)}
                {page === options[5] && (<DeleteNode rel />)}
                {page === options[6] && (<DeleteProperty />)}
                {page === options[7] && (<DeleteProperty rel />)}

            </div>

        </div>
    )
}

export default AdminPanel

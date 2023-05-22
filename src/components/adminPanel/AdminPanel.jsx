import React, { useState } from 'react'
import classes from './AdminPanel.module.css'

const options = [
    "Add node with label 'User'",
    "Add node with multiple labels",
    "View all nodes",
    "Update node with label 'User'",
    "Create relationship between user and job",
    "Delete node with label 'User'",
    "Delete relationship between user and job",
    "Delete property from node with label 'User'",
    "Delete property from relationship between user and job"
]

function AdminPanel() {
    const [page, setPage] = useState(options[0])

    return (
        <div className={classes.container}>
            <div className={classes.buttonContainer}>
                {options.map((option) => (
                    <button 
                        className={classes.navButton} 
                        key={option} type="button" 
                        onClick={() => setPage(option)}
                        style={{outline: `${page === option ? '3px solid black' : 'none'}`}}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className={classes.pageContainer}>
                <h1>{page}</h1>

            </div>

        </div>
    )
}

export default AdminPanel

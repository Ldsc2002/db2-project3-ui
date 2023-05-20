import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import JobsFeed from '../jobsFeed/JobsFeed'

const pages = ['Feed']

function App() {
    const [page, setPage] = useState('Feed')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Feed' && <JobsFeed />}
        </div>
    )
}

export default App

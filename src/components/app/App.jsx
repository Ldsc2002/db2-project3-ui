import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import JobsFeed from '../jobsFeed/JobsFeed'
import PeopleFeed from '../peopleFeed/PeopleFeed'

const pages = ['Jobs', 'People', 'Companies']

function App() {
    const [page, setPage] = useState('Jobs')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Jobs' && <JobsFeed />}
            {page === 'People' && <PeopleFeed />}
        </div>
    )
}

export default App

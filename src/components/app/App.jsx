import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import JobsFeed from '../jobsFeed/JobsFeed'
import PeopleFeed from '../peopleFeed/PeopleFeed'
import CompanyFeed from '../companyFeed/CompanyFeed'

const pages = ['Jobs', 'People', 'Companies']

function App() {
    const [page, setPage] = useState('Jobs')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Jobs' && <JobsFeed />}
            {page === 'People' && <PeopleFeed />}
            {page === 'Companies' && <CompanyFeed />}
        </div>
    )
}

export default App

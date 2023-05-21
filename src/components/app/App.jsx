import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import JobsFeed from '../jobsFeed/JobsFeed'
import PeopleFeed from '../peopleFeed/PeopleFeed'
import CompanyFeed from '../companyFeed/CompanyFeed'
import PostsFeed from '../postsFeed/PostsFeed'

const pages = ['Posts', 'Jobs', 'People', 'Companies']

function App() {
    const [page, setPage] = useState('Posts')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Posts' && <PostsFeed />}
            {page === 'Jobs' && <JobsFeed />}
            {page === 'People' && <PeopleFeed />}
            {page === 'Companies' && <CompanyFeed />}
        </div>
    )
}

export default App

import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import JobsFeed from '../jobsFeed/JobsFeed'
import PeopleFeed from '../peopleFeed/PeopleFeed'
import CompanyFeed from '../companyFeed/CompanyFeed'
import PostsFeed from '../postsFeed/PostsFeed'
import GroupsFeed from '../groupsFeed/GroupsFeed'
import AdminPanel from '../adminPanel/AdminPanel'

const pages = ['Posts', 'Jobs', 'People', 'Companies', 'Groups', 'Admin Panel']

function App() {
    const [page, setPage] = useState('Posts')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Posts' && <PostsFeed />}
            {page === 'Jobs' && <JobsFeed />}
            {page === 'People' && <PeopleFeed />}
            {page === 'Companies' && <CompanyFeed />}
            {page === 'Groups' && <GroupsFeed />}
            {page === 'Admin Panel' && <AdminPanel />}
        </div>
    )
}

export default App

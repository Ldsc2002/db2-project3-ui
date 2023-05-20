import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import UserFeed from '../userFeed/UserFeed'

const pages = ['Feed']

function App() {
    const [page, setPage] = useState('Feed')

    return (
        <div>
            <NavBar setPage={setPage} pages={pages} />
            {page === 'Feed' && <UserFeed />}
            {/* {page === 'Jobs' && <JobsList user={user} />}
                {page === 'Charts' && <UserStats />}
                {page === 'Statistics' && <PageStats />}
                {page === 'Profile' && <UserInfo user={user} />}
                {page === 'Search' && <UserSearch />} */}
        </div>
    )
}

export default App

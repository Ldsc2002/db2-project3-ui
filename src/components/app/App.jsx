import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
// import JobsList from '../jobsList/JobsList'
import UserFeed from '../userFeed/UserFeed'
// import UserInfo from '../userInfo/UserInfo'
// import UserSearch from '../userSearch/UserSearch'
// import UserStats from '../userStats/UserStats'
// import PageStats from '../pageStats/PageStats'

// const pages = ['Feed', 'Jobs', 'Charts', 'Statistics', 'Profile', 'Search']
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

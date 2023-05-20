import React, { useState, useEffect } from 'react'
import { getAllCompanies } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './CompanyFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllCompanies().then((result) => {
            setPosts(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div>
                {posts.map((post) => (
                    <PostCard
                        key={post.ID}
                        description={
                            `Founded in ${post.creation_date.day}/
                            ${post.creation_date.month}/
                            ${post.creation_date.year}`
                        }
                        title={post.name}
                        moreText={{
                            Field: post.field,
                            Country: post.country,
                            Employees: post.num_workers.low,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed

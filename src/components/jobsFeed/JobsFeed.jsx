import React, { useState, useEffect } from 'react'
import { getAllJobs } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './JobsFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllJobs().then((result) => {
            setPosts(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div>
                {posts.map((post) => (
                    <PostCard
                        key={post.ID}
                        title={post.title}
                        moreText={{
                            Country: post.country,
                            Applicants: post.offering_salary,
                            'Offering Salary': post.offering_salary,
                        }}
                        arrayData={post.required_abilities}
                        arrayTitle="Required Skills"
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed

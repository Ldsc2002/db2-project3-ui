import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { getAllJobs } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './JobsFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllJobs().then((result) => {
            console.log(result)
            setPosts(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div>
                {posts.map((post, index) => (
                    <PostCard
                        // eslint-disable-next-line no-underscore-dangle
                        key={post.ID}
                        title={post.country}
                        description={post.salary}
                        arrayData={post.required_habilities}
                        arrayTitle="Required Skills:"
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed

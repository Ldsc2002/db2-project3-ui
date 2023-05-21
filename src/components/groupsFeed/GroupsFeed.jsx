import React, { useState, useEffect } from 'react'
import { getAllGroups } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './GroupsFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllGroups().then((result) => {
            console.log(result)
            setPosts(result)
        })
    }, [])

    return (
        <div className={classes.container}>
            <div>
                {posts.map((post) => (
                    <PostCard
                        key={post.ID}
                        description={post.description}
                        title={post.name}
                        moreText={{
                            Visibility: post.visibility,
                            "Created on": post.created_date.day + "/" + post.created_date.month + "/" + post.created_date.year,
                        }}
                        arrayData={post.members}
                        arrayTitle="Members"
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed

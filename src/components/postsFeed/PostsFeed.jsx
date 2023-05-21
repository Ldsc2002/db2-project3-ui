import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../db/api'
import PostCard from '../postCard/PostCard'
import classes from './PostsFeed.module.css'

function JobsFeed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((result) => {
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
                        description={post.content}
                        moreText={{
                            Likes: post.likes,
                            'Posted on': `${post.date.day}/${post.date.month}/${post.date.year}`,
                        }}
                        arrayData={post.comments}
                        arrayTitle="Comments"
                    />
                ))}
            </div>
        </div>
    )
}

export default JobsFeed
